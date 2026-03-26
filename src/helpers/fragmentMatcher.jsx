class IntrospectionFragmentMatcher {
  constructor(options = {}) {
    this.introspectionQueryResultData =
      options.introspectionQueryResultData || {__schema: {types: []}};
  }

  match() {
    return true;
  }
}

const FragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: "UNION",
          name: "Location",
          possibleTypes: [
            {
              name: "Deck",
            },
            {
              name: "Room",
            },
          ],
        },
      ],
    },
  },
});

export default FragmentMatcher;
