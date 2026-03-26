import React, { Component } from "react";
import gql from "graphql-tag.macro";
import { graphql, withApollo } from "@apollo/client/react/hoc";

import { Container, Row, Col } from "helpers/reactstrap";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Tour from "helpers/tourHelper";
import SubscriptionHelper from "helpers/subscriptionHelper";

import "./style.scss";

const columns = [
{
  Header: "Name",
  accessor: "name" // String-based value accessors!
},
{
  Header: "Age",
  accessor: "age"
},
{
  Header: "Gender",
  accessor: "gender"
},
{
  Header: "Position",
  accessor: "position"
},
{
  Header: "Rank",
  accessor: "rank"
}];


export const ROSTER_SUB = gql`
  subscription RosterUpdate($simulatorId: ID) {
    crewUpdate(simulatorId: $simulatorId) {
      id
      name
      age
      rank
      gender
      position
    }
  }
`;
const trainingSteps = [
{
  selector: ".nothing",
  content: "On this screen you will see a list of the officers that are on the ship. You can see their name, age, gender, position, and rank. Understanding this information will help you to know what skills are available to you and who you are responsible for as a bridge officer."
},
{
  selector: ".rt-thead",
  content: "To find officers faster you can sort the crew by clicking on the description above each column."
},
{
  selector: ".pagination-bottom",
  content: "Use the next or previous button to scroll through multiple pages."
}];

const RosterTable = ({crew = []}) => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);

  const tableColumns = React.useMemo(
    () =>
      columns.map(c => ({
        header: c.Header,
        accessorKey: c.accessor,
      })),
    [],
  );

  const table = useReactTable({
    data: crew,
    columns: tableColumns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div style={{height: "100%", display: "flex", flexDirection: "column"}}>
      <table className="table table-sm table-dark" style={{marginBottom: 0}}>
        <thead className="rt-thead">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{cursor: "pointer"}}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
          <tr>
            {table.getAllLeafColumns().map(column => (
              <th key={`filter-${column.id}`}>
                <input
                  value={column.getFilterValue() ?? ""}
                  onChange={event => column.setFilterValue(event.target.value)}
                  placeholder="Filter..."
                  className="form-control form-control-sm"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={table.getAllLeafColumns().length}>
                No Matching Crew Found
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div
        className="pagination-bottom"
        style={{display: "flex", gap: "0.5rem", marginTop: "0.5rem"}}
      >
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

class Roster extends Component {
  render() {
    const {
      data: { loading, crew }
    } = this.props;
    if (loading || !crew) return null;

    return (
      <Container className="roster-card" style={{ height: "100%" }}>
        <SubscriptionHelper
          subscribe={() =>
          this.props.data.subscribeToMore({
            document: ROSTER_SUB,
            variables: {
              simulatorId: this.props.simulator.id
            },
            updateQuery: (previousResult, { subscriptionData }) => {
              return Object.assign({}, previousResult, {
                crew: subscriptionData.data.crewUpdate
              });
            }
          })
          } />

        <Row style={{ height: "100%" }}>
          <Col sm={12} style={{ height: "100%" }}>
            <RosterTable crew={crew} />
          </Col>
        </Row>
        <Tour steps={trainingSteps} client={this.props.clientObj} />
      </Container>);

  }
}

export const ROSTER_QUERY = gql`
  query Roster($simulatorId: ID) {
    crew(simulatorId: $simulatorId) {
      id
      name
      age
      rank
      gender
      position
    }
  }
`;

export default graphql(ROSTER_QUERY, {
  options: (ownProps) => ({
    fetchPolicy: "cache-and-network",

    variables: {
      simulatorId: ownProps.simulator.id
    }
  })
})(withApollo(Roster));