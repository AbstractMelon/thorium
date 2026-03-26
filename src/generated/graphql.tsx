import gql from 'graphql-tag.macro';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  JSON: { input: {[key: string]: any}; output: {[key: string]: any}; }
};

export type Action = {
  __typename?: 'Action';
  action?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  voice?: Maybe<Scalars['String']['output']>;
};

export type ActionInput = {
  args?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  needsConfig?: InputMaybe<Scalars['Boolean']['input']>;
  noCancelOnReset?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdvancedNavStarsData = {
  __typename?: 'AdvancedNavStarsData';
  activating: Scalars['Boolean']['output'];
  velocity: Scalars['Float']['output'];
};

export type AdvancedNavigationAndAstrometrics = SystemInterface & {
  __typename?: 'AdvancedNavigationAndAstrometrics';
  coolantLevel: Scalars['Float']['output'];
  currentFlightPath?: Maybe<NavigationRoute>;
  currentFlightSet?: Maybe<FlightSet>;
  currentLocation: BasicCoordinate;
  currentLocationName?: Maybe<Scalars['String']['output']>;
  currentLocationUrl?: Maybe<Scalars['String']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  engineStatus: Scalars['String']['output'];
  extra?: Maybe<Scalars['Boolean']['output']>;
  flightPathCoords: Array<FullCoordinate>;
  flightPaths: Array<NamedNavigationRoute>;
  flightSetPathMap: Scalars['String']['output'];
  flightSets: Array<FlightSet>;
  hasEmergencyPower: Scalars['Boolean']['output'];
  heatLevel: Scalars['Float']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  probeAssignments: Scalars['String']['output'];
  probes: Array<FsProbe>;
  remainingEta: Scalars['Float']['output'];
  remainingStartupTime?: Maybe<Scalars['Float']['output']>;
  showEta: Scalars['Boolean']['output'];
  showFlightSet: Scalars['Boolean']['output'];
  simulatorId?: Maybe<Scalars['ID']['output']>;
  startingStartupTime: Scalars['Float']['output'];
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  totalEta: Scalars['Float']['output'];
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type Ambiance = {
  __typename?: 'Ambiance';
  asset: Scalars['String']['output'];
  channel: Array<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  playbackRate: Scalars['Float']['output'];
  volume: Scalars['Float']['output'];
};

export type AmbianceInput = {
  asset?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  playbackRate?: InputMaybe<Scalars['Float']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};

export type AppearanceComponent = {
  __typename?: 'AppearanceComponent';
  cloudMapAsset?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  emissiveColor?: Maybe<Scalars['String']['output']>;
  emissiveIntensity?: Maybe<Scalars['Float']['output']>;
  materialMapAsset?: Maybe<Scalars['String']['output']>;
  meshType?: Maybe<MeshTypeEnum>;
  modelAsset?: Maybe<Scalars['String']['output']>;
  ringMapAsset?: Maybe<Scalars['String']['output']>;
  scale?: Maybe<Scalars['Float']['output']>;
};

export type Asset = {
  __typename?: 'Asset';
  assetKey: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type AssetFolder = {
  __typename?: 'AssetFolder';
  folderPath: Scalars['String']['output'];
  fullPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  objects: Array<AssetObject>;
};

export type AssetObject = {
  __typename?: 'AssetObject';
  folderPath: Scalars['String']['output'];
  fullPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BasicCoordinate = {
  __typename?: 'BasicCoordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type BasicCoordinateInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type BehaviorComponent = {
  __typename?: 'BehaviorComponent';
  behavior: Behaviors;
  destination?: Maybe<EntityCoordinates>;
  targetId?: Maybe<Scalars['ID']['output']>;
};

export enum Behaviors {
  Attack = 'attack',
  Avoid = 'avoid',
  Follow = 'follow',
  HoldPosition = 'holdPosition',
  Wander = 'wander'
}

export type Card = {
  __typename?: 'Card';
  assigned?: Maybe<Scalars['Boolean']['output']>;
  component: Scalars['String']['output'];
  hidden?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  newStation?: Maybe<Scalars['Boolean']['output']>;
};

export type CardInput = {
  component?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum ChannelModeMessageType {
  Allnotesoff = 'allnotesoff',
  Allsoundoff = 'allsoundoff',
  Localcontroloff = 'localcontroloff',
  Localcontrolon = 'localcontrolon',
  Monomodeon = 'monomodeon',
  Omnimodeoff = 'omnimodeoff',
  Omnimodeon = 'omnimodeon',
  Polymodeon = 'polymodeon',
  Resetallcontrollers = 'resetallcontrollers'
}

export type Chart = {
  __typename?: 'Chart';
  admitTime?: Maybe<Scalars['String']['output']>;
  bloodPressure?: Maybe<Scalars['String']['output']>;
  diagnosis?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dischargeTime?: Maybe<Scalars['String']['output']>;
  heartRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  o2levels?: Maybe<Scalars['Float']['output']>;
  painPoints?: Maybe<Array<Maybe<PainPoint>>>;
  symptoms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  temperature?: Maybe<Scalars['Float']['output']>;
  treatment?: Maybe<Scalars['String']['output']>;
  treatmentRequest?: Maybe<Scalars['Boolean']['output']>;
};

export type ChartInput = {
  admitTime?: InputMaybe<Scalars['String']['input']>;
  bloodPressure?: InputMaybe<Scalars['String']['input']>;
  dischargeTime?: InputMaybe<Scalars['String']['input']>;
  heartRate?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  o2levels?: InputMaybe<Scalars['Float']['input']>;
  painPoints?: InputMaybe<Array<InputMaybe<PainPointInput>>>;
  symptoms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  treatment?: InputMaybe<Scalars['String']['input']>;
  treatmentRequest?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Client = {
  __typename?: 'Client';
  caches?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cards?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  commandLineFeedback?: Maybe<Array<Maybe<CommandLineFeedback>>>;
  commandLineOutput?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connected?: Maybe<Scalars['Boolean']['output']>;
  cracked?: Maybe<Scalars['Boolean']['output']>;
  currentCard?: Maybe<Card>;
  email?: Maybe<Scalars['String']['output']>;
  flight?: Maybe<Flight>;
  hypercard?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keypad?: Maybe<Keypad>;
  label?: Maybe<Scalars['String']['output']>;
  loginName?: Maybe<Scalars['String']['output']>;
  loginState?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['Boolean']['output']>;
  movie?: Maybe<Scalars['String']['output']>;
  offlineState?: Maybe<Scalars['String']['output']>;
  overlay?: Maybe<Scalars['Boolean']['output']>;
  ping?: Maybe<Scalars['String']['output']>;
  simulator?: Maybe<Simulator>;
  soundPlayer?: Maybe<Scalars['Boolean']['output']>;
  station?: Maybe<Station>;
  token?: Maybe<Scalars['String']['output']>;
  training?: Maybe<Scalars['Boolean']['output']>;
};

export type ColoredCoordinate = {
  __typename?: 'ColoredCoordinate';
  color: Scalars['String']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type ColoredCoordinateInput = {
  color: Scalars['String']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type CommArrow = {
  __typename?: 'CommArrow';
  connected?: Maybe<Scalars['Boolean']['output']>;
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  muted?: Maybe<Scalars['Boolean']['output']>;
  signal?: Maybe<Scalars['ID']['output']>;
};

export type CommArrowExtended = {
  __typename?: 'CommArrowExtended';
  connected?: Maybe<Scalars['Boolean']['output']>;
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  signal?: Maybe<Scalars['ID']['output']>;
};

export type CommArrowInput = {
  connected?: InputMaybe<Scalars['Boolean']['input']>;
  frequency?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  signal?: InputMaybe<Scalars['ID']['input']>;
};

export type CommRange = {
  __typename?: 'CommRange';
  lower?: Maybe<Scalars['Float']['output']>;
  upper?: Maybe<Scalars['Float']['output']>;
};

export type CommRanges = {
  __typename?: 'CommRanges';
  commercial?: Maybe<CommRange>;
  emergency?: Maybe<CommRange>;
  military?: Maybe<CommRange>;
  priority?: Maybe<CommRange>;
};

export type CommSignal = {
  __typename?: 'CommSignal';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CommRange>;
};

export type CommSignalExtended = {
  __typename?: 'CommSignalExtended';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ranges?: Maybe<CommRanges>;
};

export type CommSignalInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<RangeInput>;
};

export type CommUpdateInput = {
  amplitude?: InputMaybe<Scalars['Float']['input']>;
  frequency?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CommandLine = {
  __typename?: 'CommandLine';
  commands?: Maybe<Array<Maybe<CommandLineCommand>>>;
  components?: Maybe<Scalars['JSON']['output']>;
  config?: Maybe<Scalars['JSON']['output']>;
  connections?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type CommandLineCommand = {
  __typename?: 'CommandLineCommand';
  help?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CommandLineFeedback = {
  __typename?: 'CommandLineFeedback';
  approve?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['ID']['output']>;
  command?: Maybe<Scalars['String']['output']>;
  deny?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  triggers?: Maybe<Array<Maybe<TimelineItem>>>;
};

export type ComputerCore = {
  __typename?: 'ComputerCore';
  activeHackingPreset?: Maybe<HackingPreset>;
  files?: Maybe<Array<Maybe<ComputerCoreFile>>>;
  hackingActive?: Maybe<Scalars['Boolean']['output']>;
  hackingLog: Array<Scalars['String']['output']>;
  hackingPortScanFrequency?: Maybe<Scalars['Float']['output']>;
  hackingPorts: HackingPorts;
  hackingState?: Maybe<Scalars['String']['output']>;
  history?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  terminals?: Maybe<Array<Maybe<ComputerCoreTerminals>>>;
  users?: Maybe<Array<Maybe<ComputerCoreUser>>>;
  virii?: Maybe<Array<Maybe<ComputerCoreVirus>>>;
};

export type ComputerCoreFile = {
  __typename?: 'ComputerCoreFile';
  corrupted?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  restoring?: Maybe<Scalars['Boolean']['output']>;
};

export type ComputerCoreFileInput = {
  corrupted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  restoring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComputerCoreTerminals = {
  __typename?: 'ComputerCoreTerminals';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Terminal_Status>;
};

export type ComputerCoreUser = {
  __typename?: 'ComputerCoreUser';
  hacker?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type ComputerCoreUserInput = {
  hacker?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type ComputerCoreVirus = {
  __typename?: 'ComputerCoreVirus';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Coolant = {
  __typename?: 'Coolant';
  quantity?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
};

export type CoolantRegulator = {
  __typename?: 'CoolantRegulator';
  coolant?: Maybe<Coolant>;
  damage?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CoolantTank = SystemInterface & {
  __typename?: 'CoolantTank';
  coolant?: Maybe<Scalars['Float']['output']>;
  coolantRate?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
  z?: Maybe<Scalars['Float']['output']>;
};

export type CoordinatesInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type CoreFeed = {
  __typename?: 'CoreFeed';
  body?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ignored?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CoreLayout = {
  __typename?: 'CoreLayout';
  config?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CoreLayoutInput = {
  config?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Countermeasure = {
  __typename?: 'Countermeasure';
  active: Scalars['Boolean']['output'];
  availablePower: Scalars['Float']['output'];
  buildPercentage: Scalars['Float']['output'];
  building: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  locked: Scalars['Boolean']['output'];
  modules: Array<CountermeasureModule>;
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  powerUsage: Scalars['Float']['output'];
  readyToLaunch: Scalars['Boolean']['output'];
  totalPowerUsed: Scalars['Float']['output'];
};

export type CountermeasureConfigOptions = {
  __typename?: 'CountermeasureConfigOptions';
  label: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CountermeasureModule = {
  __typename?: 'CountermeasureModule';
  activated: Scalars['Boolean']['output'];
  buildProgress: Scalars['Float']['output'];
  config: Scalars['JSON']['output'];
  configurationOptions: Array<CountermeasureConfigOptions>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  powerRequirement: Scalars['Float']['output'];
  resourceRequirements: CountermeasureResources;
};

export type CountermeasureResources = {
  __typename?: 'CountermeasureResources';
  carbon: Scalars['Float']['output'];
  copper: Scalars['Float']['output'];
  plasma: Scalars['Float']['output'];
  plastic: Scalars['Float']['output'];
  titanium: Scalars['Float']['output'];
};

export type CountermeasureSlot = {
  __typename?: 'CountermeasureSlot';
  slot1?: Maybe<Countermeasure>;
  slot2?: Maybe<Countermeasure>;
  slot3?: Maybe<Countermeasure>;
  slot4?: Maybe<Countermeasure>;
  slot5?: Maybe<Countermeasure>;
  slot6?: Maybe<Countermeasure>;
  slot7?: Maybe<Countermeasure>;
  slot8?: Maybe<Countermeasure>;
};

export enum CountermeasureSlotEnum {
  Slot1 = 'slot1',
  Slot2 = 'slot2',
  Slot3 = 'slot3',
  Slot4 = 'slot4',
  Slot5 = 'slot5',
  Slot6 = 'slot6',
  Slot7 = 'slot7',
  Slot8 = 'slot8'
}

export type Countermeasures = SystemInterface & {
  __typename?: 'Countermeasures';
  class?: Maybe<Scalars['String']['output']>;
  damage: Damage;
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  launched: Array<Countermeasure>;
  locations?: Maybe<Array<Maybe<Room>>>;
  materials: CountermeasureResources;
  name: Scalars['String']['output'];
  power: Power;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  slots: CountermeasureSlot;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type Crew = {
  __typename?: 'Crew';
  age?: Maybe<Scalars['Int']['output']>;
  charts?: Maybe<Array<Maybe<Chart>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inventory?: Maybe<Array<Maybe<InventoryItem>>>;
  killed?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Deck>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['String']['output']>;
  restRoom?: Maybe<Room>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  workRoom?: Maybe<Room>;
};

export type CrewCountInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  crew?: InputMaybe<Scalars['ID']['input']>;
};

export type CrewInput = {
  age?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  killed?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['String']['input']>;
  restRoom?: InputMaybe<Scalars['Int']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  workRoom?: InputMaybe<Scalars['Int']['input']>;
};

export type Crm = SystemInterface & {
  __typename?: 'Crm';
  activated?: Maybe<Scalars['Boolean']['output']>;
  attacking?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  enemies?: Maybe<Array<Maybe<CrmFighter>>>;
  enemyCount?: Maybe<Scalars['Int']['output']>;
  enemyDestroyedCount?: Maybe<Scalars['Int']['output']>;
  enemyIcon?: Maybe<Scalars['String']['output']>;
  enemyStrength?: Maybe<Scalars['Float']['output']>;
  fighterCount?: Maybe<Scalars['Int']['output']>;
  fighterDestroyedCount?: Maybe<Scalars['Int']['output']>;
  fighterIcon?: Maybe<Scalars['String']['output']>;
  fighterImage?: Maybe<Scalars['String']['output']>;
  fighterStrength?: Maybe<Scalars['Float']['output']>;
  fighters?: Maybe<Array<Maybe<CrmFighter>>>;
  id?: Maybe<Scalars['ID']['output']>;
  interval?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phasers?: Maybe<Array<Maybe<CrmPhaserShot>>>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  torpedos?: Maybe<Array<Maybe<CrmTorpedo>>>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type CrmFighter = {
  __typename?: 'CrmFighter';
  attacking?: Maybe<Scalars['Boolean']['output']>;
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['ID']['output']>;
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  docked?: Maybe<Scalars['Boolean']['output']>;
  frags?: Maybe<Scalars['Int']['output']>;
  hull?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  phaserLevel?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Coordinates>;
  shield?: Maybe<Scalars['Float']['output']>;
  shieldRaised?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  strength?: Maybe<Scalars['Float']['output']>;
  torpedoCount?: Maybe<Scalars['Int']['output']>;
  torpedoLoaded?: Maybe<Scalars['Boolean']['output']>;
  velocity?: Maybe<Coordinates>;
};

export type CrmPhaserShot = {
  __typename?: 'CrmPhaserShot';
  destination?: Maybe<Coordinates>;
  target?: Maybe<Coordinates>;
};

export type CrmTorpedo = {
  __typename?: 'CrmTorpedo';
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<Coordinates>;
};

export enum Damage_Step_Types {
  Optional = 'optional',
  Required = 'required'
}

export enum Damage_Types {
  Default = 'default',
  Engineering = 'engineering',
  Rnd = 'rnd'
}

export enum DmxChannelProperty {
  Amber = 'amber',
  Blue = 'blue',
  Focus = 'focus',
  Generic = 'generic',
  Green = 'green',
  Intensity = 'intensity',
  Nothing = 'nothing',
  Red = 'red',
  Strobe = 'strobe',
  Uv = 'uv',
  White = 'white'
}

export type DmxConfig = {
  __typename?: 'DMXConfig';
  actionStrength: Scalars['Float']['output'];
  config: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DmxDevice = {
  __typename?: 'DMXDevice';
  channels: Array<DmxChannelProperty>;
  class: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DmxFixture = {
  __typename?: 'DMXFixture';
  DMXDevice: DmxDevice;
  DMXDeviceId: Scalars['String']['output'];
  channel: Scalars['Int']['output'];
  class: Scalars['String']['output'];
  clientId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mode: DmxFixtureMode;
  name: Scalars['String']['output'];
  passiveChannels: DmxPassiveChannels;
  simulatorId: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
};

export enum DmxFixtureMode {
  Active = 'active',
  Passive = 'passive'
}

export type DmxPassiveChannels = {
  __typename?: 'DMXPassiveChannels';
  amber?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  generic?: Maybe<Scalars['Int']['output']>;
  intensity?: Maybe<Scalars['Int']['output']>;
  nothing?: Maybe<Scalars['Int']['output']>;
  strobe?: Maybe<Scalars['Int']['output']>;
  uv?: Maybe<Scalars['Int']['output']>;
  white?: Maybe<Scalars['Int']['output']>;
};

export type DmxPassiveChannelsInput = {
  amber?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  generic?: InputMaybe<Scalars['Int']['input']>;
  intensity?: InputMaybe<Scalars['Int']['input']>;
  nothing?: InputMaybe<Scalars['Int']['input']>;
  strobe?: InputMaybe<Scalars['Int']['input']>;
  uv?: InputMaybe<Scalars['Int']['input']>;
  white?: InputMaybe<Scalars['Int']['input']>;
};

export type DmxSet = {
  __typename?: 'DMXSet';
  fixtureIds: Array<Scalars['String']['output']>;
  fixtures: Array<DmxFixture>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum Docking_Direction {
  Arriving = 'arriving',
  Departing = 'departing',
  Unspecified = 'unspecified'
}

export enum Docking_Types {
  Dockingport = 'dockingport',
  Shuttlebay = 'shuttlebay',
  Specialized = 'specialized'
}

export type Damage = {
  __typename?: 'Damage';
  currentStep?: Maybe<Scalars['Int']['output']>;
  damaged?: Maybe<Scalars['Boolean']['output']>;
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  neededReactivationCode?: Maybe<Scalars['String']['output']>;
  reactivationCode?: Maybe<Scalars['String']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  reportSteps?: Maybe<Array<Maybe<DamageReportStep>>>;
  requested?: Maybe<Scalars['Boolean']['output']>;
  taskReportDamage?: Maybe<Scalars['Boolean']['output']>;
  validate?: Maybe<Scalars['Boolean']['output']>;
  which?: Maybe<Damage_Types>;
};

export type DamageReportStep = {
  __typename?: 'DamageReportStep';
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  validate?: Maybe<Scalars['Boolean']['output']>;
  validated?: Maybe<Scalars['Boolean']['output']>;
};

export type DamageStep = {
  __typename?: 'DamageStep';
  args?: Maybe<DamageStepArgs>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DamageStepArgs = {
  __typename?: 'DamageStepArgs';
  backup?: Maybe<Scalars['String']['output']>;
  cleanup?: Maybe<Scalars['Boolean']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Scalars['Boolean']['output']>;
  equipment?: Maybe<Scalars['String']['output']>;
  inventory?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<Scalars['String']['output']>;
  preamble?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Scalars['String']['output']>;
  reactivate?: Maybe<Scalars['Boolean']['output']>;
  room?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DamageStepArgsInput = {
  backup?: InputMaybe<Scalars['String']['input']>;
  cleanup?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['Boolean']['input']>;
  equipment?: InputMaybe<Scalars['String']['input']>;
  inventory?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Scalars['String']['input']>;
  preamble?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  reactivate?: InputMaybe<Scalars['Boolean']['input']>;
  room?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type DamageStepInput = {
  args?: InputMaybe<DamageStepArgsInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Damage_Step_Types>;
};

export type DamageTask = {
  __typename?: 'DamageTask';
  id?: Maybe<Scalars['ID']['output']>;
  nextSteps?: Maybe<Array<Maybe<TaskTemplate>>>;
  required?: Maybe<Scalars['Boolean']['output']>;
  taskTemplate?: Maybe<TaskTemplate>;
};

export type DamageTaskInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  nextSteps?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Deck = {
  __typename?: 'Deck';
  crewCount?: Maybe<Scalars['Int']['output']>;
  doors?: Maybe<Scalars['Boolean']['output']>;
  environment?: Maybe<Environment>;
  evac?: Maybe<Scalars['Boolean']['output']>;
  hallway?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  svgPath?: Maybe<Scalars['String']['output']>;
};

export type DirectionInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
  z?: InputMaybe<Scalars['Float']['input']>;
};

export type DockingPort = {
  __typename?: 'DockingPort';
  clamps?: Maybe<Scalars['Boolean']['output']>;
  compress?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  deck?: Maybe<Deck>;
  direction?: Maybe<Docking_Direction>;
  docked?: Maybe<Scalars['Boolean']['output']>;
  doors?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  inventory?: Maybe<Array<Maybe<InventoryItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Coordinates>;
  shipName?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Docking_Types>;
};

export type DockingPortInput = {
  clamps?: InputMaybe<Scalars['Boolean']['input']>;
  compress?: InputMaybe<Scalars['Boolean']['input']>;
  deckId?: InputMaybe<Scalars['ID']['input']>;
  direction?: InputMaybe<Docking_Direction>;
  docked?: InputMaybe<Scalars['Boolean']['input']>;
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<CoordinatesInput>;
  shipName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Document = {
  __typename?: 'Document';
  asset: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Engine = SystemInterface & {
  __typename?: 'Engine';
  acceleration?: Maybe<Scalars['Float']['output']>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  on?: Maybe<Scalars['Boolean']['output']>;
  power?: Maybe<Power>;
  previousSpeed?: Maybe<Scalars['Int']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  speed?: Maybe<Scalars['Int']['output']>;
  speedFactor?: Maybe<Scalars['Float']['output']>;
  speeds?: Maybe<Array<Maybe<Speed>>>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
  useAcceleration?: Maybe<Scalars['Boolean']['output']>;
  velocity?: Maybe<Scalars['Float']['output']>;
};

export type EngineComponent = {
  __typename?: 'EngineComponent';
  coolant?: Maybe<Scalars['Float']['output']>;
  cooling?: Maybe<Scalars['Boolean']['output']>;
  currentSpeed?: Maybe<Scalars['Float']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  heatRate?: Maybe<Scalars['Float']['output']>;
  maxSpeed?: Maybe<Scalars['Float']['output']>;
};

export type EntitiesLocationInput = {
  id: Scalars['ID']['input'];
  position: EntityCoordinatesInput;
};

export type Entity = {
  __typename?: 'Entity';
  appearance?: Maybe<AppearanceComponent>;
  behavior?: Maybe<BehaviorComponent>;
  enginesImpulse?: Maybe<EngineComponent>;
  enginesWarp?: Maybe<EngineComponent>;
  glow?: Maybe<GlowComponent>;
  id: Scalars['ID']['output'];
  identity?: Maybe<IdentityComponent>;
  interval?: Maybe<Scalars['Int']['output']>;
  light?: Maybe<LightComponent>;
  location?: Maybe<LocationComponent>;
  reset?: Maybe<Scalars['Boolean']['output']>;
  stage?: Maybe<StageComponent>;
  stageChild?: Maybe<StageChildComponent>;
  template?: Maybe<TemplateComponent>;
  thrusters?: Maybe<ThrustersComponent>;
};

export type EntityCoordinates = {
  __typename?: 'EntityCoordinates';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type EntityCoordinatesInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export enum EntityEngineEnum {
  Impulse = 'impulse',
  Warp = 'warp'
}

export type Environment = {
  __typename?: 'Environment';
  gravity?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  nitrogen?: Maybe<Scalars['Float']['output']>;
  oxygen?: Maybe<Scalars['Float']['output']>;
  pressure?: Maybe<Scalars['Float']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  trace?: Maybe<Scalars['Float']['output']>;
};

export type EnvironmentInput = {
  gravity?: InputMaybe<Scalars['Float']['input']>;
  humidity?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  nitrogen?: InputMaybe<Scalars['Float']['input']>;
  oxygen?: InputMaybe<Scalars['Float']['input']>;
  pressure?: InputMaybe<Scalars['Float']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
  trace?: InputMaybe<Scalars['Float']['input']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  count: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
};

export type EquipmentInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Exocomp = {
  __typename?: 'Exocomp';
  class?: Maybe<Scalars['String']['output']>;
  completion?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  destination?: Maybe<System>;
  difficulty?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  logs?: Maybe<Array<Maybe<ExocompLog>>>;
  parts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type ExocompInput = {
  destination?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  parts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  upgrade?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExocompLog = {
  __typename?: 'ExocompLog';
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Float']['output']>;
};

export type ExternalMission = {
  __typename?: 'ExternalMission';
  author?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ExternalSimulator = {
  __typename?: 'ExternalSimulator';
  author?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Externals = {
  __typename?: 'Externals';
  missions?: Maybe<Array<Maybe<ExternalMission>>>;
  simulators?: Maybe<Array<Maybe<ExternalSimulator>>>;
};

export type FbAwardInput = {
  ClassHours: Scalars['Float']['input'];
  Description: Scalars['String']['input'];
  FlightHours: Scalars['Float']['input'];
  ImageURL?: InputMaybe<Scalars['String']['input']>;
  Name: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type FbAwards = {
  __typename?: 'FBAwards';
  ClassHours: Scalars['Float']['output'];
  Description: Scalars['String']['output'];
  FlightHours: Scalars['Float']['output'];
  ImageURL?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type FbCurrentSelections = {
  __typename?: 'FBCurrentSelections';
  Awards?: Maybe<Array<FbAwards>>;
  EventId?: Maybe<Scalars['ID']['output']>;
  Mission?: Maybe<Scalars['ID']['output']>;
  Simulator?: Maybe<Scalars['ID']['output']>;
  StationEmailLinks?: Maybe<Array<FbStationEmailLinks>>;
  flightSubmissions?: Maybe<Array<Scalars['String']['output']>>;
};

export type FbFullSimulator = {
  __typename?: 'FBFullSimulator';
  Missions: Array<FbMission>;
  Name: Scalars['String']['output'];
  Roles: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type FbMission = {
  __typename?: 'FBMission';
  ClassHours: Scalars['Float']['output'];
  FlightHours: Scalars['Float']['output'];
  Name: Scalars['String']['output'];
  Retired?: Maybe<Scalars['Boolean']['output']>;
  Synopsis: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type FbPageText = {
  __typename?: 'FBPageText';
  Awards?: Maybe<Scalars['String']['output']>;
  EmailHeading?: Maybe<Scalars['String']['output']>;
  EmailNotFound?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  Subheading?: Maybe<Scalars['String']['output']>;
};

export type FbStationEmailLinks = {
  __typename?: 'FBStationEmailLinks';
  email?: Maybe<Scalars['String']['output']>;
  station?: Maybe<Scalars['String']['output']>;
};

export type FbUser = {
  __typename?: 'FBUser';
  id: Scalars['ID']['output'];
};

export type FsEquipmentInput = {
  count: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};

export type FsProbe = {
  __typename?: 'FSProbe';
  equipment: Array<Equipment>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type FsProbeInput = {
  equipment: Array<FsEquipmentInput>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type Flight = {
  __typename?: 'Flight';
  clients?: Maybe<Array<Maybe<SpaceEdventuresClient>>>;
  date?: Maybe<Scalars['String']['output']>;
  flightType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  running?: Maybe<Scalars['Boolean']['output']>;
  simulators?: Maybe<Array<Maybe<Simulator>>>;
  timelineStep?: Maybe<Scalars['Int']['output']>;
  transmitted?: Maybe<Scalars['Boolean']['output']>;
};

export type FlightSet = {
  __typename?: 'FlightSet';
  addOnTraining?: Maybe<Scalars['Boolean']['output']>;
  backgroundImg: Scalars['String']['output'];
  borders: Array<MapBorder>;
  defaultStartingLocation: BasicCoordinate;
  exitOptions: Array<NavigationExitOptions>;
  id: Scalars['ID']['output'];
  imageMaxX: Scalars['Float']['output'];
  imageMaxY: Scalars['Float']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pixelDistanceModifier?: Maybe<Scalars['Float']['output']>;
  pixelsPerSecond: Scalars['Float']['output'];
  pointsOfInterest: Array<PointOfInterest>;
  probeLaunchRangeRadius: Scalars['Float']['output'];
  probeSpeedModifier?: Maybe<Scalars['Float']['output']>;
  speedOptions: Array<NavigationSpeedOptions>;
  startOptions: Array<NavigationStartOptions>;
};

export type FlightSetInput = {
  addOnTraining?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundImg: Scalars['String']['input'];
  borders: Array<MapBorderInput>;
  defaultStartingLocation: BasicCoordinateInput;
  exitOptions: Array<NavigationExitOptionsInput>;
  id: Scalars['ID']['input'];
  imageMaxX: Scalars['Float']['input'];
  imageMaxY: Scalars['Float']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pixelDistanceModifier?: InputMaybe<Scalars['Float']['input']>;
  pixelsPerSecond: Scalars['Float']['input'];
  pointsOfInterest: Array<PointOfInterestInput>;
  probeLaunchRangeRadius: Scalars['Float']['input'];
  probeSpeedModifier?: InputMaybe<Scalars['Float']['input']>;
  speedOptions: Array<NavigationSpeedOptionsInput>;
  startOptions: Array<NavigationStartOptionsInput>;
};

export type FlightType = {
  __typename?: 'FlightType';
  classHours?: Maybe<Scalars['Float']['output']>;
  flightHours?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FormFields = {
  __typename?: 'FormFields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Array<Maybe<FormOptions>>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormFieldsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Array<InputMaybe<FormOptionsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type FormOptions = {
  __typename?: 'FormOptions';
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type FormOptionsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type FormResults = {
  __typename?: 'FormResults';
  client?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Array<Maybe<FormFields>>>;
  name?: Maybe<Scalars['String']['output']>;
  station?: Maybe<Scalars['String']['output']>;
};

export type FormResultsInput = {
  client?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Array<InputMaybe<FormFieldsInput>>>;
};

export type FullCoordinate = {
  __typename?: 'FullCoordinate';
  color: Scalars['String']['output'];
  speed: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type FullCoordinateInput = {
  color: Scalars['String']['input'];
  speed: Scalars['Float']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type GlowComponent = {
  __typename?: 'GlowComponent';
  color?: Maybe<Scalars['String']['output']>;
  glowMode?: Maybe<GlowModeEnum>;
};

export enum GlowModeEnum {
  Glow = 'glow',
  Halo = 'halo',
  Shell = 'shell'
}

export type GoogleSheet = {
  __typename?: 'GoogleSheet';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GoogleSheetFile = {
  __typename?: 'GoogleSheetFile';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GoogleSheets = {
  __typename?: 'GoogleSheets';
  id?: Maybe<Scalars['ID']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
};

export type GoogleSpreadsheet = {
  __typename?: 'GoogleSpreadsheet';
  id?: Maybe<Scalars['ID']['output']>;
  sheets?: Maybe<Array<Maybe<GoogleSheet>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum Hull_Plating_Mode {
  Energy = 'energy',
  Kinetic = 'kinetic',
  Radiation = 'radiation'
}

export type HackingLrm = {
  __typename?: 'HackingLRM';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HackingPorts = {
  __typename?: 'HackingPorts';
  fileViewer?: Maybe<Scalars['Int']['output']>;
  logs?: Maybe<Scalars['Int']['output']>;
  longRange?: Maybe<Scalars['Int']['output']>;
  remoteControl?: Maybe<Scalars['Int']['output']>;
};

export type HackingPreset = {
  __typename?: 'HackingPreset';
  commandLines: Array<Scalars['String']['output']>;
  fileViewer: Scalars['Boolean']['output'];
  files: Array<ComputerCoreFile>;
  id: Scalars['String']['output'];
  logs: Scalars['Boolean']['output'];
  longRange: Scalars['Boolean']['output'];
  longRangeMessages: Array<HackingLrm>;
  name: Scalars['String']['output'];
  remoteControl: Scalars['Boolean']['output'];
};

export type HazardChoiceMapEntry = {
  __typename?: 'HazardChoiceMapEntry';
  hazardChoice: Scalars['String']['output'];
  poiId: Scalars['ID']['output'];
};

export type HazardChoiceMapEntryInput = {
  hazardChoice: Scalars['String']['input'];
  poiId: Scalars['ID']['input'];
};

export type HeatInterface = {
  coolant?: Maybe<Scalars['Float']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
};

export type History = {
  __typename?: 'History';
  date?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type HullPlating = SystemInterface & {
  __typename?: 'HullPlating';
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  engaged?: Maybe<Scalars['Boolean']['output']>;
  extra?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  mode?: Maybe<Hull_Plating_Mode>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  pulse?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export enum Isochip_States {
  Diagnostic = 'diagnostic',
  Empty = 'empty',
  Invalid = 'invalid',
  Nominal = 'nominal'
}

export type IdCoordinate = {
  __typename?: 'IdCoordinate';
  id: Scalars['ID']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type IdCoordinateInput = {
  id: Scalars['ID']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type IdentityComponent = {
  __typename?: 'IdentityComponent';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Interface = {
  __typename?: 'Interface';
  components?: Maybe<Scalars['JSON']['output']>;
  config?: Maybe<Scalars['JSON']['output']>;
  connections?: Maybe<Scalars['JSON']['output']>;
  deviceType?: Maybe<InterfaceDevice>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  templateId?: Maybe<Scalars['ID']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type InterfaceDevice = {
  __typename?: 'InterfaceDevice';
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isLandscape?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type InternalComm = SystemInterface & {
  __typename?: 'InternalComm';
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  incoming?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  log?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  outgoing?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type InventoryCount = {
  count?: InputMaybe<Scalars['Int']['input']>;
  inventory?: InputMaybe<Scalars['ID']['input']>;
};

export type InventoryCountInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<InventoryMetadata>;
  name?: Maybe<Scalars['String']['output']>;
  roomCount?: Maybe<Array<Maybe<RoomCount>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  teamCount?: Maybe<Array<Maybe<TeamCount>>>;
};

export type InventoryItemInput = {
  crewCount?: InputMaybe<Array<InputMaybe<CrewCountInput>>>;
  metadata?: InputMaybe<InventoryMetadataInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  roomCount?: InputMaybe<Array<InputMaybe<RoomCountInput>>>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};

export type InventoryLog = {
  __typename?: 'InventoryLog';
  log?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type InventoryMetadata = {
  __typename?: 'InventoryMetadata';
  defense?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  science?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type InventoryMetadataInput = {
  defense?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  science?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Isochip = {
  __typename?: 'Isochip';
  chip?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  requiredChip?: Maybe<Scalars['Int']['output']>;
  simulator?: Maybe<Simulator>;
  slot?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Isochip_States>;
  system?: Maybe<System>;
};

export type IsochipInput = {
  chip?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  requiredChip?: InputMaybe<Scalars['Int']['input']>;
  simulator?: InputMaybe<Scalars['ID']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  system?: InputMaybe<Scalars['ID']['input']>;
};

export type JumpDrive = SystemInterface & {
  __typename?: 'JumpDrive';
  activated?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  env?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  ringsExtended?: Maybe<Scalars['Boolean']['output']>;
  sectors?: Maybe<JumpDriveSectors>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  stress?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type JumpDriveSector = {
  __typename?: 'JumpDriveSector';
  level?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Float']['output']>;
};

export type JumpDriveSectors = {
  __typename?: 'JumpDriveSectors';
  aft?: Maybe<JumpDriveSector>;
  fore?: Maybe<JumpDriveSector>;
  port?: Maybe<JumpDriveSector>;
  starboard?: Maybe<JumpDriveSector>;
};

export type Keyboard = {
  __typename?: 'Keyboard';
  id: Scalars['ID']['output'];
  keys?: Maybe<Array<Maybe<KeyboardKey>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type KeyboardKey = {
  __typename?: 'KeyboardKey';
  actions?: Maybe<Array<Maybe<MacroAction>>>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  keyCode?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type KeyboardKeyInput = {
  actions?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  keyCode?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Keypad = {
  __typename?: 'Keypad';
  allowedAttempts?: Maybe<Scalars['Int']['output']>;
  attempts?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  codeLength?: Maybe<Scalars['Int']['output']>;
  enteredCode?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  giveHints?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
};

export enum Lighting_Action {
  Blackout = 'blackout',
  Darken = 'darken',
  Fade = 'fade',
  Normal = 'normal',
  Oscillate = 'oscillate',
  Shake = 'shake',
  Strobe = 'strobe',
  Work = 'work'
}

export type LrCommunications = SystemInterface & {
  __typename?: 'LRCommunications';
  damage?: Maybe<Damage>;
  decoded?: Maybe<Scalars['Boolean']['output']>;
  difficulty?: Maybe<Scalars['Int']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  interception?: Maybe<Scalars['Boolean']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<Maybe<LrMessage>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  presetMessages?: Maybe<Array<Maybe<PresetAnswer>>>;
  satellites?: Maybe<Scalars['Int']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};


export type LrCommunicationsMessagesArgs = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  crew?: InputMaybe<Scalars['Boolean']['input']>;
  sent?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LrMessage = {
  __typename?: 'LRMessage';
  a?: Maybe<Scalars['Int']['output']>;
  approved?: Maybe<Scalars['Boolean']['output']>;
  crew?: Maybe<Scalars['Boolean']['output']>;
  datestamp?: Maybe<Scalars['String']['output']>;
  decodedMessage?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  encrypted?: Maybe<Scalars['Boolean']['output']>;
  f?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  ra?: Maybe<Scalars['Int']['output']>;
  rf?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  sent?: Maybe<Scalars['Boolean']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type LibraryCategory = {
  __typename?: 'LibraryCategory';
  entries?: Maybe<Array<Maybe<LibraryEntry>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LibraryEntry = {
  __typename?: 'LibraryEntry';
  body?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  font?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  seeAlso?: Maybe<Array<Maybe<LibraryEntry>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LibraryInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  font?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  seeAlso?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LightComponent = {
  __typename?: 'LightComponent';
  color?: Maybe<Scalars['String']['output']>;
  decay?: Maybe<Scalars['Float']['output']>;
  intensity?: Maybe<Scalars['Float']['output']>;
};

export type Lighting = {
  __typename?: 'Lighting';
  action: Lighting_Action;
  actionStrength: Scalars['Float']['output'];
  color?: Maybe<Scalars['String']['output']>;
  dmxConfig?: Maybe<DmxConfig>;
  intensity: Scalars['Float']['output'];
  transitionDuration: Scalars['Int']['output'];
  useAlertColor?: Maybe<Scalars['Boolean']['output']>;
};

export type LightingInput = {
  action?: InputMaybe<Lighting_Action>;
  actionStrength?: InputMaybe<Scalars['Float']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  dmxConfig?: InputMaybe<Scalars['String']['input']>;
  intensity?: InputMaybe<Scalars['Float']['input']>;
  transitionDuration?: InputMaybe<Scalars['Int']['input']>;
  useAlertColor?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location = Deck | Room;

export type LocationComponent = {
  __typename?: 'LocationComponent';
  acceleration: EntityCoordinates;
  inert: Scalars['Boolean']['output'];
  position: EntityCoordinates;
  rotation: Quaternion;
  rotationAcceleration: EntityCoordinates;
  rotationVelocity: EntityCoordinates;
  velocity: EntityCoordinates;
};

export type LocationInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type Log = {
  __typename?: 'Log';
  clientId?: Maybe<Scalars['ID']['output']>;
  flightId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  log?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type LogInput = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  flightId?: InputMaybe<Scalars['ID']['input']>;
  log?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type LongRangeCommInput = {
  decoded?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  interception?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Macro = {
  __typename?: 'Macro';
  actions?: Maybe<Array<Maybe<MacroAction>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MacroAction = {
  __typename?: 'MacroAction';
  args: Scalars['String']['output'];
  delay?: Maybe<Scalars['Int']['output']>;
  event: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  needsConfig?: Maybe<Scalars['Boolean']['output']>;
  noCancelOnReset?: Maybe<Scalars['Boolean']['output']>;
};

export type MacroButton = {
  __typename?: 'MacroButton';
  actions?: Maybe<Array<Maybe<MacroAction>>>;
  category?: Maybe<Scalars['String']['output']>;
  color?: Maybe<NotifyColors>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MacroButtonConfig = {
  __typename?: 'MacroButtonConfig';
  buttons?: Maybe<Array<Maybe<MacroButton>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MacroInput = {
  args?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  noCancelOnReset?: InputMaybe<Scalars['Boolean']['input']>;
  stepId?: InputMaybe<Scalars['ID']['input']>;
};

export type MapBorder = {
  __typename?: 'MapBorder';
  iconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location: MapBorderLocation;
  name: Scalars['String']['output'];
  riskIndex: Scalars['Float']['output'];
};

export type MapBorderInput = {
  iconUrl: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  location: MapBorderLocationInput;
  name: Scalars['String']['input'];
  riskIndex: Scalars['Float']['input'];
};

export type MapBorderLocation = {
  __typename?: 'MapBorderLocation';
  side: Scalars['String']['output'];
};

export type MapBorderLocationInput = {
  side: Scalars['String']['input'];
};

export enum MeshTypeEnum {
  Cube = 'cube',
  Model = 'model',
  Planet = 'planet',
  Sphere = 'sphere',
  Sprite = 'sprite',
  Star = 'star'
}

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type MessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export enum MidiActionMode {
  Macro = 'macro',
  MomentaryMacro = 'momentaryMacro',
  Toggle = 'toggle',
  ValueAssignment = 'valueAssignment'
}

export type MidiControl = {
  __typename?: 'MidiControl';
  actionMode?: Maybe<MidiActionMode>;
  channel?: Maybe<Scalars['Int']['output']>;
  channelModeMessage?: Maybe<ChannelModeMessageType>;
  config?: Maybe<Scalars['JSON']['output']>;
  controllerNumber?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  messageType?: Maybe<MidiMessageType>;
};

export type MidiControlInput = {
  actionMode?: InputMaybe<MidiActionMode>;
  channel?: InputMaybe<Scalars['Int']['input']>;
  channelModeMessage?: InputMaybe<ChannelModeMessageType>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  controllerNumber?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['Int']['input']>;
  messageType?: InputMaybe<MidiMessageType>;
};

export enum MidiMessageType {
  Channelpressure = 'channelpressure',
  Controlchange = 'controlchange',
  Keypressure = 'keypressure',
  Noteoff = 'noteoff',
  Noteon = 'noteon',
  Pitchbendchange = 'pitchbendchange',
  Programchange = 'programchange'
}

export type MidiSet = {
  __typename?: 'MidiSet';
  controls?: Maybe<Array<Maybe<MidiControl>>>;
  deviceName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mission = {
  __typename?: 'Mission';
  aux?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extraRequirements?: Maybe<SimulatorCapabilities>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  requirements?: Maybe<SimulatorCapabilities>;
  simulators?: Maybe<Array<Maybe<Simulator>>>;
  timeline: Array<TimelineStep>;
};


export type MissionRequirementsArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Motu = {
  __typename?: 'Motu';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inputs?: Maybe<Array<Maybe<MotuInput>>>;
  offline?: Maybe<Scalars['Boolean']['output']>;
  outputs?: Maybe<Array<Maybe<MotuOutput>>>;
  sends?: Maybe<Array<Maybe<MotuPatch>>>;
};

export type MotuChannel = {
  __typename?: 'MotuChannel';
  chan?: Maybe<Scalars['Int']['output']>;
  fader?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mute?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<MotuType>;
};

export type MotuChannelInput = {
  fader?: InputMaybe<Scalars['Float']['input']>;
  mute?: InputMaybe<Scalars['Int']['input']>;
};

export type MotuComp = {
  __typename?: 'MotuComp';
  attack?: Maybe<Scalars['Float']['output']>;
  enable?: Maybe<Scalars['Float']['output']>;
  makeup?: Maybe<Scalars['Float']['output']>;
  peak?: Maybe<Scalars['Float']['output']>;
  ratio?: Maybe<Scalars['Float']['output']>;
  release?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
  trim?: Maybe<Scalars['Float']['output']>;
};

export type MotuEq = {
  __typename?: 'MotuEQ';
  bw?: Maybe<Scalars['Float']['output']>;
  enable?: Maybe<Scalars['Int']['output']>;
  freq?: Maybe<Scalars['Float']['output']>;
  gain?: Maybe<Scalars['Float']['output']>;
  mode?: Maybe<Scalars['Int']['output']>;
};

export type MotuGate = {
  __typename?: 'MotuGate';
  attack?: Maybe<Scalars['Float']['output']>;
  enable?: Maybe<Scalars['Int']['output']>;
  release?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

export type MotuInput = {
  __typename?: 'MotuInput';
  chan?: Maybe<Scalars['Int']['output']>;
  comp?: Maybe<MotuComp>;
  fader?: Maybe<Scalars['Float']['output']>;
  gate?: Maybe<MotuGate>;
  highshelf?: Maybe<MotuEq>;
  id?: Maybe<Scalars['ID']['output']>;
  lowshelf?: Maybe<MotuEq>;
  mid1?: Maybe<MotuEq>;
  mid2?: Maybe<MotuEq>;
  mute?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pan?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<MotuType>;
};

export type MotuOutput = {
  __typename?: 'MotuOutput';
  chan?: Maybe<Scalars['Int']['output']>;
  fader?: Maybe<Scalars['Float']['output']>;
  highshelf?: Maybe<MotuEq>;
  id?: Maybe<Scalars['ID']['output']>;
  lowshelf?: Maybe<MotuEq>;
  mid1?: Maybe<MotuEq>;
  mid2?: Maybe<MotuEq>;
  mute?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  panner?: Maybe<Scalars['Float']['output']>;
  prefader?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<MotuType>;
};

export type MotuPatch = {
  __typename?: 'MotuPatch';
  input?: Maybe<MotuInput>;
  mute?: Maybe<Scalars['Boolean']['output']>;
  output?: Maybe<MotuOutput>;
  send?: Maybe<Scalars['Float']['output']>;
};

export enum MotuType {
  Aux = 'aux',
  Chan = 'chan',
  Group = 'group'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  _template?: Maybe<Scalars['String']['output']>;
  activateProbeEmitter?: Maybe<Scalars['String']['output']>;
  activateStealth?: Maybe<Scalars['String']['output']>;
  activateThx?: Maybe<Scalars['String']['output']>;
  addAssetFolder?: Maybe<Scalars['String']['output']>;
  addCardToStation?: Maybe<Scalars['String']['output']>;
  addClientToSet?: Maybe<Scalars['String']['output']>;
  addCommandLine?: Maybe<Scalars['String']['output']>;
  addCommandLineOutput?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Command Line: Add command line
   * Requires:
   *   - Cards:Command Line
   */
  addCommandLineToSimulator?: Maybe<Scalars['String']['output']>;
  addComputerCoreUser?: Maybe<ComputerCoreUser>;
  addCoolant?: Maybe<Scalars['String']['output']>;
  addCoreLayout?: Maybe<Scalars['String']['output']>;
  addCrewToTeam?: Maybe<Scalars['String']['output']>;
  addCrewmember?: Maybe<Scalars['String']['output']>;
  addDeck?: Maybe<Scalars['String']['output']>;
  addDecksBulk?: Maybe<Scalars['String']['output']>;
  /** Macro: Systems: Add Extra Report to Simulator */
  addExtraReportToSimulator?: Maybe<Scalars['String']['output']>;
  /** Macro: Advanced Navigation: Add Flight Set to Navigation */
  addFlightSetToNavigation?: Maybe<Scalars['String']['output']>;
  addHeat?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Interception: Add Interception Signal
   * Requires:
   *   - Cards:Interception
   *   - Systems:LongRangeComm
   */
  addInterceptionSignal?: Maybe<Scalars['String']['output']>;
  addInterface?: Maybe<Scalars['String']['output']>;
  addInterfaceDevice?: Maybe<Scalars['String']['output']>;
  addInterfaceToSimulator?: Maybe<Scalars['String']['output']>;
  addInventory?: Maybe<Scalars['String']['output']>;
  addIssue?: Maybe<Scalars['String']['output']>;
  addIssueUpload?: Maybe<Scalars['String']['output']>;
  addKeyboard?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Library: Add Entry
   * Requires:
   *   - Cards:Library
   */
  addLibraryEntry?: Maybe<Scalars['String']['output']>;
  addLog?: Maybe<Scalars['String']['output']>;
  addMacro?: Maybe<Scalars['ID']['output']>;
  addMacroButton?: Maybe<Scalars['String']['output']>;
  addMacroButtonConfig?: Maybe<Scalars['ID']['output']>;
  /** Macro: Inventory: Add Multiple Inventory */
  addMultipleInventory?: Maybe<Scalars['String']['output']>;
  /** Macro: Objective: Add Objective */
  addObjective?: Maybe<Scalars['String']['output']>;
  addRoom?: Maybe<Scalars['String']['output']>;
  addRoomsBulk?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Short Range: Add Signal
   * Requires:
   *  - Cards:CommShortRange
   *  - Systems:ShortRangeComm
   */
  addShortRangeComm?: Maybe<Scalars['String']['output']>;
  addSickbayCrew?: Maybe<Scalars['String']['output']>;
  addSimulatorAmbiance?: Maybe<Scalars['String']['output']>;
  addSimulatorDamageStep?: Maybe<Scalars['String']['output']>;
  addSimulatorDamageTask?: Maybe<Scalars['String']['output']>;
  addSimulatorStationCard?: Maybe<Scalars['String']['output']>;
  addSpeed?: Maybe<Scalars['String']['output']>;
  addStationToStationSet?: Maybe<Scalars['String']['output']>;
  addSystemDamageStep?: Maybe<Scalars['String']['output']>;
  addSystemDamageTask?: Maybe<Scalars['String']['output']>;
  addSystemToSimulator?: Maybe<Scalars['String']['output']>;
  addTacticalMapItem?: Maybe<Scalars['String']['output']>;
  addTacticalMapLayer?: Maybe<Scalars['String']['output']>;
  addTacticalMapPath?: Maybe<Scalars['String']['output']>;
  /** Macro: Tactical Map: Add Tactical Maps to Flight */
  addTacticalMapsToFlight?: Maybe<Scalars['String']['output']>;
  addTargetClass?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Tasks: Add Task
   * Requires:
   *  - Cards:Tasks, EngineeringReports, RnDReports, DamageControl, DamageStepControl
   */
  addTask?: Maybe<Scalars['String']['output']>;
  addTaskTemplate?: Maybe<Scalars['String']['output']>;
  addTimelineItemToTimelineStep?: Maybe<Scalars['String']['output']>;
  addTimelineStep?: Maybe<Scalars['ID']['output']>;
  /**
   * Macro: Tractor Beam: Add Target
   * Requires:
   *  - Cards:TractorBeam
   *  - Systems:TractorBeam
   */
  addTractorTarget?: Maybe<Scalars['String']['output']>;
  addTrigger?: Maybe<Scalars['String']['output']>;
  /** Macro: Triggers: Add trigger to simulator */
  addTriggerToSimulator?: Maybe<Scalars['String']['output']>;
  addViriiToComputerCore?: Maybe<Scalars['String']['output']>;
  animateSensorContacact?: Maybe<Scalars['String']['output']>;
  applyClientSet?: Maybe<Scalars['String']['output']>;
  approveLongRangeMessage?: Maybe<Scalars['String']['output']>;
  assignPatient?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Space EdVentures: Assign Space EdVentures Badge
   * Requires:
   *   - Space EdVentures
   */
  assignSpaceEdventuresBadge?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Space EdVentures: Transmit to Space EdVentures
   * Requires:
   *   - Space EdVentures
   */
  assignSpaceEdventuresFlightRecord?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Space EdVentures: Change Flight Type
   * Requires:
   *   - Space EdVentures
   */
  assignSpaceEdventuresFlightType?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Space EdVentures: Assign Space EdVentures Mission
   * Requires:
   *   - Space EdVentures
   */
  assignSpaceEdventuresMission?: Maybe<Scalars['String']['output']>;
  assignTaskReportStep?: Maybe<Scalars['String']['output']>;
  /** Macro: Timeline: Auto-Advance Timeline Step (Use with Delay) */
  autoAdvance?: Maybe<Scalars['String']['output']>;
  batchIsochipUpdate?: Maybe<Array<Maybe<Isochip>>>;
  beginTransportScan?: Maybe<Scalars['String']['output']>;
  /** Macro: Damage Control: Break system */
  breakSystem?: Maybe<Scalars['String']['output']>;
  cancelDeconProgram?: Maybe<Scalars['String']['output']>;
  cancelHail?: Maybe<Scalars['String']['output']>;
  /** Macro: Sounds: Stop Looping All Sounds */
  cancelLoopingSounds?: Maybe<Scalars['String']['output']>;
  cancelSensorScan?: Maybe<Scalars['String']['output']>;
  cancelSickbayBunkScan?: Maybe<Scalars['String']['output']>;
  cancelTransportScan?: Maybe<Scalars['String']['output']>;
  changePower?: Maybe<Scalars['String']['output']>;
  changeRoomDeck?: Maybe<Scalars['String']['output']>;
  /** Macro: Simulator: Change Alert Level */
  changeSimulatorAlertLevel?: Maybe<Scalars['String']['output']>;
  changeSimulatorBridgeCrew?: Maybe<Scalars['String']['output']>;
  changeSimulatorCaps?: Maybe<Scalars['String']['output']>;
  changeSimulatorExocomps?: Maybe<Scalars['String']['output']>;
  changeSimulatorExtraPeople?: Maybe<Scalars['String']['output']>;
  /** Macro: Simulator: Change Simulator Layout */
  changeSimulatorLayout?: Maybe<Scalars['String']['output']>;
  changeSimulatorRadiation?: Maybe<Scalars['String']['output']>;
  changeSystemDefaultPowerLevel?: Maybe<Scalars['String']['output']>;
  changeSystemPowerLevels?: Maybe<Scalars['String']['output']>;
  chargePhaserBeam?: Maybe<Scalars['String']['output']>;
  chargeThx?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Targeting: Clear Targeting Classes
   * Requires:
   *  - Cards:Targeting, TargetingStandalone
   *  - Systems:Targeting
   */
  clearAllTargetingContacts?: Maybe<Scalars['String']['output']>;
  clearPdf?: Maybe<Scalars['String']['output']>;
  clearTaskReport?: Maybe<Scalars['String']['output']>;
  clearTransportTargets?: Maybe<Scalars['String']['output']>;
  clientActivateLights?: Maybe<Scalars['String']['output']>;
  clientAddCache?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Space EdVentures: Add Extra Crew Member
   * Requires:
   *   - Space EdVentures
   */
  clientAddExtra?: Maybe<Scalars['String']['output']>;
  clientConnect?: Maybe<Scalars['String']['output']>;
  clientCrack?: Maybe<Scalars['String']['output']>;
  clientDiagnostic?: Maybe<Scalars['String']['output']>;
  clientDisconnect?: Maybe<Scalars['String']['output']>;
  clientLockScreen?: Maybe<Scalars['String']['output']>;
  clientLogin?: Maybe<Scalars['String']['output']>;
  clientLogout?: Maybe<Scalars['String']['output']>;
  clientMovieState?: Maybe<Scalars['String']['output']>;
  clientOfflineState?: Maybe<Scalars['String']['output']>;
  clientPing?: Maybe<Scalars['String']['output']>;
  clientRemoveCache?: Maybe<Scalars['String']['output']>;
  clientReset?: Maybe<Scalars['String']['output']>;
  clientSetCard?: Maybe<Scalars['String']['output']>;
  clientSetEmail?: Maybe<Scalars['String']['output']>;
  clientSetFlight?: Maybe<Scalars['String']['output']>;
  clientSetSimulator?: Maybe<Scalars['String']['output']>;
  clientSetSoundPlayer?: Maybe<Scalars['String']['output']>;
  clientSetStation?: Maybe<Scalars['String']['output']>;
  clientSetTraining?: Maybe<Scalars['String']['output']>;
  clientUnlockScreen?: Maybe<Scalars['String']['output']>;
  clockSync?: Maybe<Scalars['String']['output']>;
  commAddArrow?: Maybe<Scalars['String']['output']>;
  commAddSignal?: Maybe<Scalars['String']['output']>;
  commConnectArrow?: Maybe<Scalars['String']['output']>;
  commDisconnectArrow?: Maybe<Scalars['String']['output']>;
  commHail?: Maybe<Scalars['String']['output']>;
  commRemoveArrow?: Maybe<Scalars['String']['output']>;
  commRemoveSignal?: Maybe<Scalars['String']['output']>;
  commUpdate?: Maybe<Scalars['String']['output']>;
  commUpdateSignal?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Short Range: Set Signals
   * Requires:
   *  - Cards:CommShortRange
   *  - Systems:ShortRangeComm
   */
  commUpdateSignals?: Maybe<Scalars['String']['output']>;
  completeDeconProgram?: Maybe<Scalars['String']['output']>;
  /** Macro: Objective: Complete Objective */
  completeObjective?: Maybe<Scalars['String']['output']>;
  completeTaskReport?: Maybe<Scalars['String']['output']>;
  completeTransport?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Computer Core: Activate External Hacking
   * Requires:
   *   - Cards:ComputerCore
   *   - Systems:ComputerCore
   */
  computerCoreActivateHacking?: Maybe<Scalars['String']['output']>;
  computerCoreAddFile?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Computer Core: Add Hacker
   * Requires:
   *   - Cards:ComputerCore
   *   - Systems:ComputerCore
   */
  computerCoreAddHacker?: Maybe<Scalars['String']['output']>;
  computerCoreAppendLog?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Computer Core: Deactivate External Hacking
   * Requires:
   *   - Cards:ComputerCore
   *   - Systems:ComputerCore
   */
  computerCoreDeactivateHacking?: Maybe<Scalars['String']['output']>;
  computerCoreDeleteLog?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Computer Core: Set External Hacking Preset
   * Requires:
   *   - Cards:ComputerCore
   *   - Systems:ComputerCore
   */
  computerCoreHackingPreset?: Maybe<Scalars['String']['output']>;
  computerCoreSetHackingFrequency?: Maybe<Scalars['String']['output']>;
  computerCoreSetHackingState?: Maybe<Scalars['String']['output']>;
  computerCoreUpdateHackingFiles?: Maybe<Scalars['String']['output']>;
  connectHail?: Maybe<Scalars['String']['output']>;
  coolPhaserBeam?: Maybe<Scalars['String']['output']>;
  countermeasuresActivateCountermeasure?: Maybe<Scalars['String']['output']>;
  countermeasuresAddModule?: Maybe<Countermeasure>;
  countermeasuresBuildCountermeasure?: Maybe<Scalars['String']['output']>;
  countermeasuresConfigureModule?: Maybe<Scalars['String']['output']>;
  countermeasuresCreateCountermeasure?: Maybe<Countermeasure>;
  countermeasuresDeactivateCountermeasure?: Maybe<Scalars['String']['output']>;
  countermeasuresLaunchCountermeasure?: Maybe<Scalars['String']['output']>;
  countermeasuresLaunchUnlockedCountermeasures?: Maybe<Scalars['String']['output']>;
  countermeasuresRemoveCountermeasure?: Maybe<Scalars['String']['output']>;
  countermeasuresRemoveModule?: Maybe<Scalars['String']['output']>;
  countermeasuresSetFDNote?: Maybe<Scalars['String']['output']>;
  countermeasuresSetResource?: Maybe<Scalars['String']['output']>;
  createDockingPort?: Maybe<Scalars['String']['output']>;
  createFirebaseUser?: Maybe<Scalars['Boolean']['output']>;
  createFlightSet?: Maybe<Scalars['String']['output']>;
  createHackingPreset?: Maybe<Scalars['String']['output']>;
  createMission?: Maybe<Scalars['String']['output']>;
  createSensorArmyContact?: Maybe<Scalars['String']['output']>;
  createSensorContact?: Maybe<Scalars['String']['output']>;
  createSensorContacts?: Maybe<Scalars['String']['output']>;
  createSet?: Maybe<Scalars['String']['output']>;
  createSimulator?: Maybe<Scalars['String']['output']>;
  createSoftwarePanel?: Maybe<Scalars['String']['output']>;
  createStationSet?: Maybe<Scalars['String']['output']>;
  createSurveyForm?: Maybe<Scalars['String']['output']>;
  createTargetingContact?: Maybe<Scalars['String']['output']>;
  createTeam?: Maybe<Scalars['String']['output']>;
  crewImport?: Maybe<Scalars['String']['output']>;
  crmAddEnemy?: Maybe<Scalars['String']['output']>;
  crmDestroyUndockedFighters?: Maybe<Scalars['String']['output']>;
  crmFirePhaser?: Maybe<Scalars['String']['output']>;
  crmFireTorpedo?: Maybe<Scalars['String']['output']>;
  crmLoadTorpedo?: Maybe<Scalars['String']['output']>;
  crmRestockTorpedos?: Maybe<Scalars['String']['output']>;
  crmRestoreFighter?: Maybe<Scalars['String']['output']>;
  crmRestoreFighters?: Maybe<Scalars['String']['output']>;
  crmSetAcceleration?: Maybe<Scalars['String']['output']>;
  crmSetActivated?: Maybe<Scalars['String']['output']>;
  crmSetAttacking?: Maybe<Scalars['String']['output']>;
  crmSetEnemyCount?: Maybe<Scalars['String']['output']>;
  crmSetEnemyIcon?: Maybe<Scalars['String']['output']>;
  crmSetEnemyStrength?: Maybe<Scalars['String']['output']>;
  crmSetFighterDocked?: Maybe<Scalars['String']['output']>;
  crmSetFighterIcon?: Maybe<Scalars['String']['output']>;
  crmSetFighterImage?: Maybe<Scalars['String']['output']>;
  crmSetFighterStrength?: Maybe<Scalars['String']['output']>;
  crmSetPassword?: Maybe<Scalars['String']['output']>;
  crmSetPhaserCharge?: Maybe<Scalars['String']['output']>;
  crmSetShieldState?: Maybe<Scalars['String']['output']>;
  crmStopPhaser?: Maybe<Scalars['String']['output']>;
  damageReport?: Maybe<Scalars['String']['output']>;
  damageSystem?: Maybe<Scalars['String']['output']>;
  deactivateStealth?: Maybe<Scalars['String']['output']>;
  deactivateThx?: Maybe<Scalars['String']['output']>;
  deckDoors?: Maybe<Scalars['String']['output']>;
  deckEvac?: Maybe<Scalars['String']['output']>;
  deleteComputerCoreVirus?: Maybe<Scalars['String']['output']>;
  deleteFlight?: Maybe<Scalars['String']['output']>;
  deleteFlightSet?: Maybe<Scalars['String']['output']>;
  deleteHackingPreset?: Maybe<Scalars['String']['output']>;
  deleteLongRangeMessage?: Maybe<Scalars['String']['output']>;
  denyTaskVerify?: Maybe<Scalars['String']['output']>;
  deployExocomp?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Probes: Destroy Probe Network
   * Requires:
   *  - Cards:ProbeNetwork
   *  - Systems:Probes
   */
  destroyAllProbeNetwork?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Probes: Destroy All Probes
   * Requires:
   *  - Cards:ProbeNetwork
   *  - Systems:Probes
   */
  destroyAllProbes?: Maybe<Scalars['String']['output']>;
  destroyProbe?: Maybe<Scalars['String']['output']>;
  destroySensorContact?: Maybe<Scalars['String']['output']>;
  directionUpdate?: Maybe<Scalars['String']['output']>;
  dischargePatient?: Maybe<Scalars['String']['output']>;
  dischargePhaserBeam?: Maybe<Scalars['String']['output']>;
  dismissVerifiedTasks?: Maybe<Scalars['String']['output']>;
  dmxConfigCreate?: Maybe<Scalars['String']['output']>;
  dmxConfigDuplicate?: Maybe<Scalars['String']['output']>;
  dmxConfigRemove?: Maybe<Scalars['String']['output']>;
  dmxConfigSetActionStrength?: Maybe<Scalars['String']['output']>;
  dmxConfigSetConfig?: Maybe<Scalars['String']['output']>;
  dmxConfigSetName?: Maybe<Scalars['String']['output']>;
  dmxDeviceCreate?: Maybe<Scalars['String']['output']>;
  dmxDeviceRemove?: Maybe<Scalars['String']['output']>;
  dmxDeviceSetChannels?: Maybe<Scalars['String']['output']>;
  dmxDeviceSetName?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Add Fixture Tag */
  dmxFixtureAddTag?: Maybe<Scalars['String']['output']>;
  dmxFixtureCreate?: Maybe<Scalars['String']['output']>;
  dmxFixtureRemove?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Remove Fixture Tag */
  dmxFixtureRemoveTag?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Set Fixture To Active Mode */
  dmxFixtureSetActive?: Maybe<Scalars['String']['output']>;
  dmxFixtureSetChannel?: Maybe<Scalars['String']['output']>;
  dmxFixtureSetDMXDevice?: Maybe<Scalars['String']['output']>;
  dmxFixtureSetMode?: Maybe<Scalars['String']['output']>;
  dmxFixtureSetName?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Set Fixture Passive Channels */
  dmxFixtureSetPassiveChannels?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Set Fixture Tags */
  dmxFixtureSetTags?: Maybe<Scalars['String']['output']>;
  dmxSetCreate?: Maybe<Scalars['String']['output']>;
  dmxSetDuplicate?: Maybe<Scalars['String']['output']>;
  dmxSetRemove?: Maybe<Scalars['String']['output']>;
  dmxSetSetName?: Maybe<Scalars['String']['output']>;
  /** Macro: DMX: Set Simulator DMX Config */
  dmxSetSimulatorConfig?: Maybe<Scalars['String']['output']>;
  /** Macro: Document: Add Document */
  documentAdd?: Maybe<Scalars['String']['output']>;
  documentRemove?: Maybe<Scalars['String']['output']>;
  downloadRemoteAssets?: Maybe<Scalars['String']['output']>;
  duplicateCommandLine?: Maybe<Scalars['String']['output']>;
  duplicateMacro?: Maybe<Scalars['String']['output']>;
  duplicateMacroAction?: Maybe<Scalars['String']['output']>;
  duplicateStationSet?: Maybe<Scalars['String']['output']>;
  duplicateTacticalMap?: Maybe<Scalars['String']['output']>;
  duplicateTimelineStep?: Maybe<Scalars['String']['output']>;
  editCardInStationSet?: Maybe<Scalars['String']['output']>;
  editMission?: Maybe<Scalars['String']['output']>;
  editSimulatorStationCard?: Maybe<Scalars['String']['output']>;
  editStationInStationSet?: Maybe<Scalars['String']['output']>;
  encryptLongRangeMessage?: Maybe<Scalars['String']['output']>;
  endSurvey?: Maybe<Scalars['String']['output']>;
  engineCool?: Maybe<Scalars['String']['output']>;
  entitiesSetPosition?: Maybe<Scalars['String']['output']>;
  entityCreate: Entity;
  entityRemove?: Maybe<Scalars['String']['output']>;
  entityRemoveAppearance?: Maybe<Scalars['String']['output']>;
  entityRemoveBehavior?: Maybe<Scalars['String']['output']>;
  entityRemoveEngine?: Maybe<Scalars['String']['output']>;
  entityRemoveGlow?: Maybe<Scalars['String']['output']>;
  entityRemoveIdentity?: Maybe<Scalars['String']['output']>;
  entityRemoveLight?: Maybe<Scalars['String']['output']>;
  entityRemoveLocation?: Maybe<Scalars['String']['output']>;
  entityRemoveStage?: Maybe<Scalars['String']['output']>;
  entityRemoveStageChild?: Maybe<Scalars['String']['output']>;
  entityRemoveThrusters?: Maybe<Scalars['String']['output']>;
  entitySetAppearance?: Maybe<Scalars['String']['output']>;
  entitySetBehavior?: Maybe<Scalars['String']['output']>;
  entitySetEngine?: Maybe<Scalars['String']['output']>;
  entitySetGlow?: Maybe<Scalars['String']['output']>;
  entitySetIdentity?: Maybe<Scalars['String']['output']>;
  entitySetLight?: Maybe<Scalars['String']['output']>;
  entitySetLocation?: Maybe<Scalars['String']['output']>;
  entitySetRotationVelocityMagnitude?: Maybe<Scalars['String']['output']>;
  entitySetStage?: Maybe<Scalars['String']['output']>;
  entitySetStageChild?: Maybe<Scalars['String']['output']>;
  entitySetTemplate?: Maybe<Scalars['String']['output']>;
  entitySetThrusters?: Maybe<Scalars['String']['output']>;
  executeCommandLine?: Maybe<Scalars['String']['output']>;
  executeFirebasePush?: Maybe<Scalars['Boolean']['output']>;
  exocompCompleteUpgrade?: Maybe<Scalars['String']['output']>;
  firePhaserBeam?: Maybe<Scalars['String']['output']>;
  fireProbe?: Maybe<Scalars['String']['output']>;
  fireRailgun?: Maybe<Scalars['String']['output']>;
  /** Macro: Damage Control: Fix system */
  fixSystem?: Maybe<Scalars['String']['output']>;
  /** Macro: Sandbox: Set Base Universe for Flight */
  flightSetBaseUniverse?: Maybe<Scalars['String']['output']>;
  /** Macro: Simulator: Flip Simulator */
  flipSimulator?: Maybe<Scalars['String']['output']>;
  fluxDilithiumStress?: Maybe<Scalars['String']['output']>;
  fluxJumpdriveSector?: Maybe<Scalars['String']['output']>;
  fluxSignalJammer?: Maybe<Scalars['String']['output']>;
  fluxStealthQuadrants?: Maybe<Scalars['String']['output']>;
  fluxSubspaceField?: Maybe<Scalars['String']['output']>;
  /** Macro: Systems: Flux Power */
  fluxSystemPower?: Maybe<Scalars['String']['output']>;
  fluxTranswarp?: Maybe<Scalars['String']['output']>;
  freezeTacticalMap?: Maybe<Scalars['String']['output']>;
  generateDamageReport?: Maybe<Scalars['String']['output']>;
  generateTaskReport?: Maybe<Scalars['String']['output']>;
  /** Macro: Generic: Do a generic thing. Use for triggers. */
  generic?: Maybe<Scalars['String']['output']>;
  getSpaceEdventuresLogin?: Maybe<Scalars['String']['output']>;
  googleSheetsAppendData?: Maybe<Scalars['String']['output']>;
  googleSheetsAuthorize?: Maybe<Scalars['String']['output']>;
  googleSheetsCompleteAuthorize?: Maybe<Scalars['String']['output']>;
  googleSheetsFileSearch?: Maybe<Array<Maybe<GoogleSheetFile>>>;
  googleSheetsRevoke?: Maybe<Scalars['String']['output']>;
  handheldScannerCancel?: Maybe<Scalars['String']['output']>;
  handheldScannerResponse?: Maybe<Scalars['String']['output']>;
  handheldScannerScan?: Maybe<Scalars['String']['output']>;
  handleAddFlightSetToNavigation?: Maybe<Scalars['String']['output']>;
  handleAddProbeAssignment?: Maybe<Scalars['String']['output']>;
  handleCommandLineFeedback?: Maybe<Scalars['String']['output']>;
  handleCoolantFlush?: Maybe<Scalars['String']['output']>;
  handleEmergencyStop?: Maybe<Scalars['String']['output']>;
  handleEngageFlightPath?: Maybe<Scalars['String']['output']>;
  handleEngineFlux?: Maybe<Scalars['String']['output']>;
  handleOnAssignProbe?: Maybe<Scalars['String']['output']>;
  handleOverrideLocation?: Maybe<Scalars['String']['output']>;
  handleResumePath?: Maybe<Scalars['String']['output']>;
  handleSaveFlightPath?: Maybe<Scalars['String']['output']>;
  handleSetCoolantLevel?: Maybe<Scalars['String']['output']>;
  handleSetHeatLevel?: Maybe<Scalars['String']['output']>;
  handleShowEta?: Maybe<Scalars['String']['output']>;
  handleShowFlightSet?: Maybe<Scalars['String']['output']>;
  handleUpdateCurrentFlightPath?: Maybe<Scalars['String']['output']>;
  handleUpdateCurrentFlightSet?: Maybe<Scalars['String']['output']>;
  handleUpdateEta?: Maybe<Scalars['String']['output']>;
  handleUpdateProbeAssignments: Scalars['String']['output'];
  /** Macro: Station: Hide Card */
  hideSimulatorCard?: Maybe<Scalars['String']['output']>;
  hitJumpDriveStress?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Shields: Hit all shields
   * Requires:
   *  - Cards:ShieldControl
   *  - Systems:Shield
   */
  hitShields?: Maybe<Scalars['String']['output']>;
  ignoreCoreFeed?: Maybe<Scalars['String']['output']>;
  importLibraryEntry?: Maybe<Scalars['String']['output']>;
  importMission?: Maybe<Scalars['String']['output']>;
  importMissionFromUrl?: Maybe<Scalars['String']['output']>;
  importRooms?: Maybe<Scalars['String']['output']>;
  importSimulatorFromUrl?: Maybe<Scalars['String']['output']>;
  importTaskTemplates?: Maybe<Scalars['String']['output']>;
  insertIsochip?: Maybe<Isochip>;
  internalCommCallIncoming?: Maybe<Scalars['String']['output']>;
  internalCommCallOutgoing?: Maybe<Scalars['String']['output']>;
  internalCommCancelIncoming?: Maybe<Scalars['String']['output']>;
  internalCommCancelOutgoing?: Maybe<Scalars['String']['output']>;
  internalCommConnectIncoming?: Maybe<Scalars['String']['output']>;
  internalCommConnectOutgoing?: Maybe<Scalars['String']['output']>;
  launchProbe?: Maybe<Scalars['String']['output']>;
  /** Macro: Lighting: Fade Lights */
  lightingFadeLights?: Maybe<Scalars['String']['output']>;
  /** Macro: Lighting: Set Effect */
  lightingSetEffect?: Maybe<Scalars['String']['output']>;
  /** Macro: Lighting: Set Intensity */
  lightingSetIntensity?: Maybe<Scalars['String']['output']>;
  /** Macro: Lighting: Shake Lights */
  lightingShakeLights?: Maybe<Scalars['String']['output']>;
  loadRailgun?: Maybe<Scalars['String']['output']>;
  loadTacticalMap?: Maybe<Scalars['String']['output']>;
  lockThx?: Maybe<Scalars['String']['output']>;
  longRangeMessageSend?: Maybe<Scalars['String']['output']>;
  midiSetControl?: Maybe<MidiSet>;
  midiSetCreate?: Maybe<MidiSet>;
  midiSetRemove?: Maybe<Scalars['Boolean']['output']>;
  midiSetRename?: Maybe<MidiSet>;
  missionSetExtraRequirements?: Maybe<Scalars['String']['output']>;
  motuAdd?: Maybe<Scalars['String']['output']>;
  motuRemove?: Maybe<Scalars['String']['output']>;
  /** Macro: MOTU: (Un)Mute connection from Input to Output */
  motuSetSendMute?: Maybe<Scalars['String']['output']>;
  /** Macro: MOTU: Update Channel */
  motuUpdateChannel?: Maybe<Scalars['String']['output']>;
  moveInventory?: Maybe<Scalars['String']['output']>;
  moveSensorContact?: Maybe<Scalars['String']['output']>;
  muteShortRangeComm?: Maybe<Scalars['String']['output']>;
  navCalculateCourse?: Maybe<Scalars['String']['output']>;
  navCancelCalculation?: Maybe<Scalars['String']['output']>;
  navCourseEntry?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Navigation: Send Course
   * Requires:
   *  - Cards:Navigation
   *  - Systems:Navigation
   */
  navCourseResponse?: Maybe<Scalars['String']['output']>;
  navSetDestination?: Maybe<Scalars['String']['output']>;
  navSetDestinations?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Navigation: Course Preset
   * Requires:
   *  - Cards:Navigation
   *  - Systems:Navigation
   */
  navSetPresets?: Maybe<Scalars['String']['output']>;
  navSetScanning?: Maybe<Scalars['String']['output']>;
  navSetThrusters?: Maybe<Scalars['String']['output']>;
  navToggleCalculate?: Maybe<Scalars['String']['output']>;
  newRandomCrewmember?: Maybe<Scalars['String']['output']>;
  newSensorScan?: Maybe<Scalars['String']['output']>;
  newTacticalMap?: Maybe<Scalars['String']['output']>;
  normalSubspaceField?: Maybe<Scalars['String']['output']>;
  normalTranswarp?: Maybe<Scalars['String']['output']>;
  /** Macro: Actions: Send Notification */
  notify?: Maybe<Scalars['String']['output']>;
  nudgeSensorContacts?: Maybe<Scalars['String']['output']>;
  objectiveSetCrewComplete?: Maybe<Scalars['String']['output']>;
  objectiveSetOrder?: Maybe<Scalars['String']['output']>;
  /** Macro: Flight: Pause Flight */
  pauseFlight?: Maybe<Scalars['String']['output']>;
  phaserArc?: Maybe<Scalars['String']['output']>;
  pingSensors?: Maybe<Scalars['String']['output']>;
  /** Macro: Sounds: Play a sound */
  playSound?: Maybe<Scalars['String']['output']>;
  positionUpdate?: Maybe<Scalars['String']['output']>;
  /** Macro: Actions: Print PDF Asset */
  printPdf?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Probes: Probe Processed Data
   * Requires:
   *  - Cards:ProbeNetwork
   *  - Systems:Probes
   */
  probeProcessedData?: Maybe<Scalars['String']['output']>;
  probeQuery?: Maybe<Scalars['String']['output']>;
  probeQueryResponse?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Sensors: Processed Data
   * Requires:
   *  - Cards:Sensors, JrSensors
   *  - Systems:Sensors
   */
  processedData?: Maybe<Scalars['String']['output']>;
  reactorAckWingRequest?: Maybe<Scalars['String']['output']>;
  reactorBatteryChargeLevel?: Maybe<Scalars['String']['output']>;
  reactorBatteryChargeRate?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Reactor: Change Reactor Efficiency
   * Requires:
   *  - Cards:ReactorControl
   *  - Systems:Reactor
   */
  reactorChangeEfficiency?: Maybe<Scalars['String']['output']>;
  reactorChangeModel?: Maybe<Scalars['String']['output']>;
  reactorChangeOutput?: Maybe<Scalars['String']['output']>;
  reactorEject?: Maybe<Scalars['String']['output']>;
  reactorRequestWingPower?: Maybe<Scalars['String']['output']>;
  reactorRequireBalance?: Maybe<Scalars['String']['output']>;
  reactorSetHasWings?: Maybe<Scalars['String']['output']>;
  reactorSetWingPower?: Maybe<Scalars['String']['output']>;
  recallExocomp?: Maybe<Scalars['String']['output']>;
  recordTemplateAddToSnippet?: Maybe<Scalars['String']['output']>;
  recordTemplateCreateSnippet?: Maybe<Scalars['String']['output']>;
  recordTemplateDeleteSnippet?: Maybe<Scalars['String']['output']>;
  recordTemplateRemoveFromSnippet?: Maybe<Scalars['String']['output']>;
  recordTemplateRename?: Maybe<Scalars['String']['output']>;
  recordTemplateUpdateRecord?: Maybe<Scalars['String']['output']>;
  recordsAddToSnippet?: Maybe<Scalars['String']['output']>;
  /** Macro: Records: Create Ship Record */
  recordsCreate?: Maybe<Scalars['String']['output']>;
  /** Macro: Records: Add Record to Snippet */
  recordsCreateOnSnippet?: Maybe<RecordSnippet>;
  recordsCreateSnippet?: Maybe<Scalars['String']['output']>;
  recordsDeleteRecord?: Maybe<Scalars['String']['output']>;
  /** Macro: Records: Generate Records Snippet */
  recordsGenerateRecords?: Maybe<RecordSnippet>;
  recordsHideSnippet?: Maybe<RecordSnippet>;
  recordsRemoveFromSnippet?: Maybe<Scalars['String']['output']>;
  recordsShowSnippet?: Maybe<RecordSnippet>;
  remoteAccessSendCode?: Maybe<Scalars['String']['output']>;
  remoteAccessUpdateCode?: Maybe<Scalars['String']['output']>;
  removeAllCrew?: Maybe<Scalars['String']['output']>;
  removeAllSensorContacts?: Maybe<Scalars['String']['output']>;
  removeAssetFolder?: Maybe<Scalars['String']['output']>;
  removeAssetObject?: Maybe<Scalars['String']['output']>;
  removeCardFromStation?: Maybe<Scalars['String']['output']>;
  removeClientFromSet?: Maybe<Scalars['String']['output']>;
  removeCommandLine?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Command Line: Remove command line
   * Requires:
   *   - Cards:Command Line
   */
  removeCommandLineFromSimulator?: Maybe<Scalars['String']['output']>;
  removeComputerCoreUser?: Maybe<Scalars['String']['output']>;
  removeCoreLayout?: Maybe<Scalars['String']['output']>;
  removeCrewFromTeam?: Maybe<Scalars['String']['output']>;
  removeCrewInventory?: Maybe<Scalars['String']['output']>;
  removeCrewmember?: Maybe<Scalars['String']['output']>;
  removeDeck?: Maybe<Scalars['String']['output']>;
  removeDockingPort?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Interception: Remove Interception Signal
   * Requires:
   *   - Cards:Interception
   *   - Systems:LongRangeComm
   */
  removeInterceptionSignal?: Maybe<Scalars['String']['output']>;
  removeInterface?: Maybe<Scalars['String']['output']>;
  removeInterfaceDevice?: Maybe<Scalars['String']['output']>;
  removeInterfaceFromSimulator?: Maybe<Scalars['String']['output']>;
  removeInventory?: Maybe<Scalars['String']['output']>;
  removeKeyboard?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Library: Remove Entry
   * Requires:
   *   - Cards:Library
   */
  removeLibraryEntry?: Maybe<Scalars['String']['output']>;
  removeMacro?: Maybe<Scalars['String']['output']>;
  removeMacroButton?: Maybe<Scalars['String']['output']>;
  removeMacroButtonConfig?: Maybe<Scalars['String']['output']>;
  removeMission?: Maybe<Scalars['String']['output']>;
  removeProcessedData?: Maybe<Scalars['String']['output']>;
  removeRoom?: Maybe<Scalars['String']['output']>;
  removeSensorArmyContact?: Maybe<Scalars['String']['output']>;
  removeSensorContact?: Maybe<Scalars['String']['output']>;
  removeSet?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Short Range: Remove Signal
   * Requires:
   *  - Cards:CommShortRange
   *  - Systems:ShortRangeComm
   */
  removeShortRangeComm?: Maybe<Scalars['String']['output']>;
  removeSickbayCrew?: Maybe<Scalars['String']['output']>;
  removeSimulator?: Maybe<Scalars['String']['output']>;
  removeSimulatorAmbiance?: Maybe<Scalars['String']['output']>;
  removeSimulatorDamageStep?: Maybe<Scalars['String']['output']>;
  removeSimulatorDamageTask?: Maybe<Scalars['String']['output']>;
  removeSimulatorStationCard?: Maybe<Scalars['String']['output']>;
  removeSoftwarePanel?: Maybe<Scalars['String']['output']>;
  removeSpaceEdventuresClient?: Maybe<Scalars['String']['output']>;
  removeStationFromStationSet?: Maybe<Scalars['String']['output']>;
  removeStationSet?: Maybe<Scalars['String']['output']>;
  removeSurveyForm?: Maybe<Scalars['String']['output']>;
  removeSystemDamageStep?: Maybe<Scalars['String']['output']>;
  removeSystemDamageTask?: Maybe<Scalars['String']['output']>;
  removeSystemFromSimulator?: Maybe<Scalars['String']['output']>;
  removeTacticalMap?: Maybe<Scalars['String']['output']>;
  removeTacticalMapItem?: Maybe<Scalars['String']['output']>;
  removeTacticalMapLayer?: Maybe<Scalars['String']['output']>;
  removeTacticalMapPath?: Maybe<Scalars['String']['output']>;
  removeTarget?: Maybe<Scalars['String']['output']>;
  removeTargetClass?: Maybe<Scalars['String']['output']>;
  removeTaskTemplate?: Maybe<Scalars['String']['output']>;
  removeTeam?: Maybe<Scalars['String']['output']>;
  removeTimelineStep?: Maybe<Scalars['String']['output']>;
  removeTimelineStepItem?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Tractor Beam: Remove Target
   * Requires:
   *  - Cards:TractorBeam
   *  - Systems:TractorBeam
   */
  removeTractorTarget?: Maybe<Scalars['String']['output']>;
  removeTrigger?: Maybe<Scalars['String']['output']>;
  /** Macro: Triggers: Remove trigger from simulator */
  removeTriggerFromSimulator?: Maybe<Scalars['String']['output']>;
  /** Macro: Viewscreen: Remove Viewscreen Picture-in-Picture */
  removeViewscreenPictureInPicture?: Maybe<Scalars['String']['output']>;
  renameCommandLine?: Maybe<Scalars['String']['output']>;
  renameInterface?: Maybe<Scalars['String']['output']>;
  renameInterfaceDevice?: Maybe<Scalars['String']['output']>;
  renameKeyboard?: Maybe<Scalars['String']['output']>;
  renameMacro?: Maybe<Scalars['String']['output']>;
  renameMacroButton?: Maybe<Scalars['String']['output']>;
  renameMacroButtonConfig?: Maybe<Scalars['String']['output']>;
  renameRoom?: Maybe<Scalars['String']['output']>;
  renameSet?: Maybe<Scalars['String']['output']>;
  /** Macro: Simulator: Rename Simulator */
  renameSimulator?: Maybe<Scalars['String']['output']>;
  renameStationSet?: Maybe<Scalars['String']['output']>;
  renameTaskTemplate?: Maybe<Scalars['String']['output']>;
  renameTrigger?: Maybe<Scalars['String']['output']>;
  reorderCoreLayouts?: Maybe<Scalars['String']['output']>;
  reorderMacroAction?: Maybe<Scalars['String']['output']>;
  /** Reorder Macros */
  reorderMacroButton?: Maybe<Scalars['String']['output']>;
  reorderStationWidgets?: Maybe<Scalars['String']['output']>;
  reorderTacticalMapLayer?: Maybe<Scalars['String']['output']>;
  reorderTimelineItem?: Maybe<Scalars['String']['output']>;
  reorderTimelineStep?: Maybe<Scalars['String']['output']>;
  repairSystem?: Maybe<Scalars['String']['output']>;
  requestDamageReport?: Maybe<Scalars['String']['output']>;
  requestTaskVerify?: Maybe<Scalars['String']['output']>;
  requestVerifyTaskReportStep?: Maybe<Scalars['String']['output']>;
  requiredRotationSet?: Maybe<Scalars['String']['output']>;
  /** Macro: Flight: Reset Flight */
  resetFlight?: Maybe<Scalars['String']['output']>;
  resetKeypad?: Maybe<Scalars['String']['output']>;
  resetThx?: Maybe<Scalars['String']['output']>;
  restartComputerCoreTerminal?: Maybe<Scalars['String']['output']>;
  restoreComputerCoreFile?: Maybe<Scalars['String']['output']>;
  restoreShields?: Maybe<Scalars['String']['output']>;
  /** Macro: Flight: Resume Flight */
  resumeFlight?: Maybe<Scalars['String']['output']>;
  roomGas?: Maybe<Scalars['String']['output']>;
  rotationSet?: Maybe<Scalars['String']['output']>;
  rotationUpdate?: Maybe<Scalars['String']['output']>;
  scanSickbayBunk?: Maybe<Scalars['String']['output']>;
  /** Macro: Advanced Navigation: Select current flight set */
  selectCurrentFlightSet?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Long Range: Send Long Range Message
   * Requires:
   *   - Cards:CommDecoding
   *   - Systems:LongRangeComm
   */
  sendLongRangeMessage?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Messaging: Send an inter-ship message
   * Requires:
   *  - Cards:Messages
   */
  sendMessage?: Maybe<Scalars['String']['output']>;
  sensorScanCancel?: Maybe<Scalars['String']['output']>;
  sensorScanRequest?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Sensors: Send Scan Result
   * Requires:
   *  - Cards:SecurityScans, SensorScans, Sensors, JrSensors
   *  - Systems:Sensors
   */
  sensorScanResult?: Maybe<Scalars['String']['output']>;
  sensorsFireProjectile?: Maybe<Scalars['String']['output']>;
  sensorsSetHasPing?: Maybe<Scalars['String']['output']>;
  /** Macro: Simulator: Set Alert Condition Lock */
  setAlertConditionLock?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Sensors: Set Army Sensor Contacts
   * Requires:
   *  - Cards:Sensors, JrSensors
   *  - Systems:Sensors
   */
  setArmyContacts?: Maybe<Scalars['String']['output']>;
  setAutoMovement?: Maybe<Scalars['String']['output']>;
  setAuxTimelineStep?: Maybe<Scalars['String']['output']>;
  setBridgeMessaging?: Maybe<Scalars['String']['output']>;
  /** Macro: Clients: Set Hypercard */
  setClientHypercard?: Maybe<Scalars['String']['output']>;
  setClientOverlay?: Maybe<Scalars['String']['output']>;
  setCodeLength?: Maybe<Scalars['String']['output']>;
  setCoolantTank?: Maybe<Scalars['String']['output']>;
  setCoordinateTargeting?: Maybe<Scalars['String']['output']>;
  setDamageStepValidation?: Maybe<Scalars['String']['output']>;
  setDeconAutoFinish?: Maybe<Scalars['String']['output']>;
  setDilithiumStressRate?: Maybe<Scalars['String']['output']>;
  setEngineAcceleration?: Maybe<Scalars['String']['output']>;
  setEngineSpeedFactor?: Maybe<Scalars['String']['output']>;
  setEngineSpeeds?: Maybe<Scalars['String']['output']>;
  setEngineUseAcceleration?: Maybe<Scalars['String']['output']>;
  setFirebaseAwards?: Maybe<Scalars['Boolean']['output']>;
  setFirebaseMission?: Maybe<Scalars['Boolean']['output']>;
  setFirebaseSimulator?: Maybe<Scalars['Boolean']['output']>;
  setHeatRate?: Maybe<Scalars['String']['output']>;
  setHullPlatingEngaged?: Maybe<Scalars['String']['output']>;
  setHullPlatingMode?: Maybe<Scalars['String']['output']>;
  setHullPlatingPulse?: Maybe<Scalars['String']['output']>;
  setInterceptionDifficulty?: Maybe<Scalars['String']['output']>;
  setJumpDriveEnabled?: Maybe<Scalars['String']['output']>;
  setJumpDriveRingsExtended?: Maybe<Scalars['String']['output']>;
  setJumpdriveActivated?: Maybe<Scalars['String']['output']>;
  setJumpdriveEnvs?: Maybe<Scalars['String']['output']>;
  setJumpdriveSectorLevel?: Maybe<Scalars['String']['output']>;
  setJumpdriveSectorOffset?: Maybe<Scalars['String']['output']>;
  setKeypadAllowedAttempts?: Maybe<Scalars['String']['output']>;
  setKeypadCode?: Maybe<Scalars['String']['output']>;
  setKeypadEnteredCode?: Maybe<Scalars['String']['output']>;
  setKeypadHint?: Maybe<Scalars['String']['output']>;
  setKeypadLocked?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Long Range: Set preset messages
   * Requires:
   *   - Cards:CommDecoding
   *   - Systems:LongRangeComm
   */
  setLongRangePresetMessages?: Maybe<Scalars['String']['output']>;
  setLongRangeSatellites?: Maybe<Scalars['String']['output']>;
  setMacroButtonCategory?: Maybe<Scalars['String']['output']>;
  setMacroButtonColor?: Maybe<Scalars['String']['output']>;
  setPhaserBeamCharge?: Maybe<Scalars['String']['output']>;
  setPhaserBeamCount?: Maybe<Scalars['String']['output']>;
  setPhaserBeamHeat?: Maybe<Scalars['String']['output']>;
  setPhaserChargeSpeed?: Maybe<Scalars['String']['output']>;
  setPhaserHoldToCharge?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Sensors: Scan Answers
   * Requires:
   *  - Cards:SecurityScans, SensorScans, Sensors, JrSensors
   *  - Systems:Sensors
   */
  setPresetAnswers?: Maybe<Scalars['String']['output']>;
  setProbeCharge?: Maybe<Scalars['String']['output']>;
  setProbeTorpedo?: Maybe<Scalars['String']['output']>;
  setRailgunAmmo?: Maybe<Scalars['String']['output']>;
  setRailgunAvailableAmmo?: Maybe<Scalars['String']['output']>;
  setRailgunMaxAmmo?: Maybe<Scalars['String']['output']>;
  setReactorEffciciencies?: Maybe<Scalars['String']['output']>;
  setSelfDestructAuto?: Maybe<Scalars['String']['output']>;
  setSelfDestructCode?: Maybe<Scalars['String']['output']>;
  setSelfDestructTime?: Maybe<Scalars['String']['output']>;
  setSensorPingMode?: Maybe<Scalars['String']['output']>;
  setSensorsDefaultHitpoints?: Maybe<Scalars['String']['output']>;
  setSensorsDefaultSpeed?: Maybe<Scalars['String']['output']>;
  setSensorsHistory?: Maybe<Scalars['String']['output']>;
  setSensorsInterference?: Maybe<Scalars['String']['output']>;
  setSensorsMissPercent?: Maybe<Scalars['String']['output']>;
  setSensorsSegment?: Maybe<Scalars['String']['output']>;
  setSickbayBunks?: Maybe<Scalars['String']['output']>;
  setSignalJammerSensorsInterference?: Maybe<Scalars['String']['output']>;
  setSimulatorAssets?: Maybe<Scalars['String']['output']>;
  setSimulatorExocomps?: Maybe<Scalars['String']['output']>;
  setSimulatorHasLegs?: Maybe<Scalars['String']['output']>;
  setSimulatorHasPrinter?: Maybe<Scalars['String']['output']>;
  setSimulatorHelium?: Maybe<Scalars['String']['output']>;
  setSimulatorHeliumRate?: Maybe<Scalars['String']['output']>;
  /** Macro: Timeline: Change Timeline Mission or Step */
  setSimulatorMission?: Maybe<Scalars['String']['output']>;
  setSimulatorMissionConfig?: Maybe<Scalars['String']['output']>;
  setSimulatorShowHelium?: Maybe<Scalars['String']['output']>;
  setSimulatorSoundEffects?: Maybe<Scalars['String']['output']>;
  setSimulatorSpaceEdventuresId?: Maybe<Scalars['String']['output']>;
  setSimulatorStationExecutive?: Maybe<Scalars['String']['output']>;
  setSimulatorStationLayout?: Maybe<Scalars['String']['output']>;
  setSimulatorStationLogin?: Maybe<Scalars['String']['output']>;
  setSimulatorStationMessageGroup?: Maybe<Scalars['String']['output']>;
  setSimulatorStationWidget?: Maybe<Scalars['String']['output']>;
  setSimulatorTimelineStep?: Maybe<Scalars['String']['output']>;
  setSimulatorTriggersPaused?: Maybe<Scalars['String']['output']>;
  setSpaceEdventuresToken?: Maybe<SpaceEdventuresCenter>;
  setSpeed?: Maybe<Scalars['String']['output']>;
  setStationAmbiance?: Maybe<Scalars['String']['output']>;
  setStationDescription?: Maybe<Scalars['String']['output']>;
  setStationExecutive?: Maybe<Scalars['String']['output']>;
  setStationLayout?: Maybe<Scalars['String']['output']>;
  setStationLogin?: Maybe<Scalars['String']['output']>;
  setStationSetCrewCount?: Maybe<Scalars['String']['output']>;
  setStationTags?: Maybe<Scalars['String']['output']>;
  setStationTraining?: Maybe<Scalars['String']['output']>;
  setStealthActivated?: Maybe<Scalars['String']['output']>;
  setStealthCharge?: Maybe<Scalars['String']['output']>;
  setStealthQuadrant?: Maybe<Scalars['String']['output']>;
  setStepDamage?: Maybe<Scalars['String']['output']>;
  setSubspaceFieldSectorValue?: Maybe<Scalars['String']['output']>;
  setSurveyFormGoogleSheet?: Maybe<Scalars['String']['output']>;
  setTargetClassCount?: Maybe<Scalars['String']['output']>;
  setTargetingCalculatedTarget?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Targeting: Set Targeting Classes
   * Requires:
   *  - Cards:Targeting, TargetingStandalone
   *  - Systems:Targeting
   */
  setTargetingClasses?: Maybe<Scalars['String']['output']>;
  setTargetingEnteredTarget?: Maybe<Scalars['String']['output']>;
  setTargetingRange?: Maybe<Scalars['String']['output']>;
  setTaskTemplateMacros?: Maybe<Scalars['String']['output']>;
  setTaskTemplatePreMacros?: Maybe<Scalars['String']['output']>;
  setTaskTemplateReportTypes?: Maybe<Scalars['String']['output']>;
  setTaskTemplateValues?: Maybe<Scalars['String']['output']>;
  setThrusterMovementSpeed?: Maybe<Scalars['String']['output']>;
  setThrusterRotationSpeed?: Maybe<Scalars['String']['output']>;
  setTrackingPreference?: Maybe<Scalars['String']['output']>;
  setTractorBeamCount?: Maybe<Scalars['String']['output']>;
  setTractorBeamScanning?: Maybe<Scalars['String']['output']>;
  setTractorBeamState?: Maybe<Scalars['String']['output']>;
  setTractorBeamStrength?: Maybe<Scalars['String']['output']>;
  setTractorBeamStress?: Maybe<Scalars['String']['output']>;
  setTractorBeamTarget?: Maybe<Scalars['String']['output']>;
  setTractorBeamTargetLabel?: Maybe<Scalars['String']['output']>;
  setTransportCharge?: Maybe<Scalars['String']['output']>;
  setTransportDestination?: Maybe<Scalars['String']['output']>;
  setTransportTarget?: Maybe<Scalars['String']['output']>;
  setTransporterChargeSpeed?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Transporters: Set Target Count
   * Requires:
   *  - Cards:Transporters
   *  - Systems:Transporters
   */
  setTransporterTargets?: Maybe<Scalars['String']['output']>;
  setTranswarpActive?: Maybe<Scalars['String']['output']>;
  setTranswarpSectorValue?: Maybe<Scalars['String']['output']>;
  setVerifyDamage?: Maybe<Scalars['String']['output']>;
  /** Macro: Viewscreen: Set Viewscreen Picture-in-Picture */
  setViewscreenPictureInPicture?: Maybe<Scalars['String']['output']>;
  /** Macro: Viewscreen: Set Viewscreen to Auto */
  setViewscreenToAuto?: Maybe<Scalars['String']['output']>;
  shieldFrequencySet?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Shields: Set all shield frequencies
   * Requires:
   *  - Cards:ShieldControl
   *  - Systems:Shield
   */
  shieldFrequencySetAll?: Maybe<Scalars['String']['output']>;
  shieldIntegritySet?: Maybe<Scalars['String']['output']>;
  shieldLowered?: Maybe<Scalars['String']['output']>;
  shieldRaised?: Maybe<Scalars['String']['output']>;
  shipDockingChange?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Docking: Set docking state
   * Requires:
   *  - Cards:Docking
   *  - Docking
   */
  shipSetDocking?: Maybe<Scalars['String']['output']>;
  /** Macro: Advanced Navigation: Show POI information on current flight set */
  showPoiInformationOnCurrentFlightSet?: Maybe<Scalars['String']['output']>;
  /** Macro: Advanced Navigation: Show POI on current flight set */
  showPoiOnCurrentFlightSet?: Maybe<Scalars['String']['output']>;
  /** Macro: Viewscreen: Show Tactical Map */
  showViewscreenTactical?: Maybe<Scalars['String']['output']>;
  sickbayBunkScanResponse?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Signal Jammer: Set Signal
   * Requires:
   *  - Cards:SignalJammer
   *  - Systems:SignalJammer
   */
  signalJammerSignals?: Maybe<Scalars['String']['output']>;
  /** Macro: MIDI: Activate a MIDI Set */
  simulatorAddMidiSet?: Maybe<Simulator>;
  /** Macro: MIDI: Deactivate a MIDI Set */
  simulatorRemoveMidiSet?: Maybe<Simulator>;
  snapshot?: Maybe<Scalars['String']['output']>;
  /** Macro: Timelines: Start Aux Timeline */
  startAuxTimeline?: Maybe<Scalars['ID']['output']>;
  startDeconProgram?: Maybe<Scalars['String']['output']>;
  startFlight?: Maybe<Scalars['String']['output']>;
  stationAssignCard?: Maybe<Scalars['String']['output']>;
  stationUnassignCard?: Maybe<Scalars['String']['output']>;
  stealthChangeAlert?: Maybe<Scalars['String']['output']>;
  stealthSensorsSonar?: Maybe<Scalars['String']['output']>;
  stopAllSensorContacts?: Maybe<Scalars['String']['output']>;
  /** Macro: Sounds: Cancel All Sounds */
  stopAllSounds?: Maybe<Scalars['String']['output']>;
  stopChargingPhasers?: Maybe<Scalars['String']['output']>;
  stopPhaserBeams?: Maybe<Scalars['String']['output']>;
  surveyFormResponse?: Maybe<Scalars['String']['output']>;
  /** Macro: Core: Set a timer on core (requires sync time enabled) */
  syncTimer?: Maybe<Scalars['String']['output']>;
  systemReactivationCode?: Maybe<Scalars['String']['output']>;
  systemReactivationCodeResponse?: Maybe<Scalars['String']['output']>;
  systemSetWing?: Maybe<Scalars['String']['output']>;
  targetSystem?: Maybe<Scalars['String']['output']>;
  targetTargetingContact?: Maybe<Scalars['String']['output']>;
  /** Macro: Tasks: Activate Task Flow */
  taskFlowActivate?: Maybe<Scalars['String']['output']>;
  taskFlowAdd?: Maybe<Scalars['String']['output']>;
  taskFlowAddStep?: Maybe<Scalars['String']['output']>;
  taskFlowAdvance?: Maybe<Scalars['String']['output']>;
  taskFlowRemove?: Maybe<Scalars['String']['output']>;
  taskFlowRemoveStep?: Maybe<Scalars['String']['output']>;
  taskFlowRename?: Maybe<Scalars['String']['output']>;
  taskFlowRenameStep?: Maybe<Scalars['String']['output']>;
  taskFlowReorderStep?: Maybe<Scalars['String']['output']>;
  taskFlowSetCategory?: Maybe<Scalars['String']['output']>;
  taskFlowStepAddTask?: Maybe<Scalars['String']['output']>;
  taskFlowStepEditTask?: Maybe<Scalars['String']['output']>;
  taskFlowStepRemoveTask?: Maybe<Scalars['String']['output']>;
  taskFlowStepSetCompleteAll?: Maybe<Scalars['String']['output']>;
  taskFlowStepSetDelay?: Maybe<Scalars['String']['output']>;
  test?: Maybe<Scalars['String']['output']>;
  timelineDuplicateItem?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Interfaces: Set Object Hidden
   * Requires:
   *   - Cards:Interface
   */
  toggleInterfaceObjectHidden?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Interfaces: Toggle Video playing
   * Requires:
   *   - Cards:Interface
   */
  toggleInterfaceObjectPlaying?: Maybe<Scalars['String']['output']>;
  toggleSensorsAutoTarget?: Maybe<Scalars['String']['output']>;
  toggleSensorsAutoThrusters?: Maybe<Scalars['String']['output']>;
  toggleSimulatorCardHidden?: Maybe<Scalars['String']['output']>;
  toggleStationMessageGroup?: Maybe<Scalars['String']['output']>;
  toggleStationWidgets?: Maybe<Scalars['String']['output']>;
  toggleViewscreenVideo?: Maybe<Scalars['String']['output']>;
  torpedoAddWarhead?: Maybe<Scalars['String']['output']>;
  torpedoFire?: Maybe<Scalars['String']['output']>;
  torpedoLoadWarhead?: Maybe<Scalars['String']['output']>;
  torpedoRemoveWarhead?: Maybe<Scalars['String']['output']>;
  torpedoSetWarheadCount?: Maybe<Scalars['String']['output']>;
  torpedoUnload?: Maybe<Scalars['String']['output']>;
  /** Macro: Flight: Start Training Mode */
  trainingMode?: Maybe<Scalars['String']['output']>;
  transferCargo?: Maybe<Scalars['String']['output']>;
  transferCoolant?: Maybe<Scalars['String']['output']>;
  /** Macro: Actions: Trigger Action (eg. Flash, Blackout, etc.) */
  triggerAction?: Maybe<Scalars['String']['output']>;
  triggerInterfaceObject?: Maybe<Scalars['String']['output']>;
  triggerKeyboardAction?: Maybe<Scalars['String']['output']>;
  /** Macro: Macros: Trigger Macro */
  triggerMacroAction?: Maybe<Scalars['String']['output']>;
  triggerMacroButton?: Maybe<Scalars['String']['output']>;
  triggerMacros?: Maybe<Scalars['String']['output']>;
  /** Macro: Surveys: Trigger Survey */
  triggerSurvey?: Maybe<Scalars['String']['output']>;
  /** Macro: Station: Unhide Card */
  unhideSimulatorCard?: Maybe<Scalars['String']['output']>;
  untargetTargetingContact?: Maybe<Scalars['String']['output']>;
  updateAdvNavFlightSet?: Maybe<Scalars['String']['output']>;
  updateAdvNavFlightSetData?: Maybe<Scalars['String']['output']>;
  updateCommandLine?: Maybe<Scalars['String']['output']>;
  updateComputerCoreUser?: Maybe<Scalars['String']['output']>;
  updateCoreLayout?: Maybe<Scalars['String']['output']>;
  updateCrewInventory?: Maybe<Scalars['String']['output']>;
  updateCrewmember?: Maybe<Scalars['String']['output']>;
  updateCurrentDamageStep?: Maybe<Scalars['String']['output']>;
  updateDeckSvg?: Maybe<Scalars['String']['output']>;
  updateDeconOffset?: Maybe<Scalars['String']['output']>;
  updateDilithiumStress?: Maybe<Scalars['String']['output']>;
  /** Macro: Docking: Update Docking Port/Shuttlebay */
  updateDockingPort?: Maybe<Scalars['String']['output']>;
  updateEnvironment?: Maybe<Scalars['String']['output']>;
  updateExocompDifficulty?: Maybe<Scalars['String']['output']>;
  updateFirebaseUserStation: Scalars['Boolean']['output'];
  updateFlightSet?: Maybe<Scalars['String']['output']>;
  updateHackingPreset?: Maybe<Scalars['String']['output']>;
  updateHallwaySvg?: Maybe<Scalars['String']['output']>;
  updateInterface?: Maybe<Scalars['String']['output']>;
  updateInterfaceDevice?: Maybe<Scalars['String']['output']>;
  updateInventoryCount?: Maybe<Scalars['String']['output']>;
  updateInventoryMetadata?: Maybe<Scalars['String']['output']>;
  updateIsochip?: Maybe<Isochip>;
  updateKeyboardKey?: Maybe<Scalars['String']['output']>;
  updateLibraryEntry?: Maybe<Scalars['String']['output']>;
  updateLongRangeComm?: Maybe<Scalars['String']['output']>;
  updateLongRangeDecodedMessage?: Maybe<Scalars['String']['output']>;
  updateMacroActions?: Maybe<Scalars['String']['output']>;
  updateMacroButtonActions?: Maybe<Scalars['String']['output']>;
  updatePatientChart?: Maybe<Scalars['String']['output']>;
  updateProbeEquipment?: Maybe<Scalars['String']['output']>;
  updateProbeType?: Maybe<Scalars['String']['output']>;
  updateRoomRoles?: Maybe<Scalars['String']['output']>;
  updateRoomSvg?: Maybe<Scalars['String']['output']>;
  updateSensorArmyContact?: Maybe<Scalars['String']['output']>;
  updateSensorContact?: Maybe<Scalars['String']['output']>;
  updateSensorContacts?: Maybe<Scalars['String']['output']>;
  /**
   * Macro: Sensors: Update Sensor Grid
   * Requires:
   *  - Cards:Sensors, JrSensors
   *  - Systems:Sensors
   */
  updateSensorGrid?: Maybe<Scalars['String']['output']>;
  updateSensorScan?: Maybe<Scalars['String']['output']>;
  updateSetClient?: Maybe<Scalars['String']['output']>;
  updateSickbayCrew?: Maybe<Scalars['String']['output']>;
  updateSignalJammer?: Maybe<Scalars['String']['output']>;
  updateSimulatorAmbiance?: Maybe<Scalars['String']['output']>;
  updateSimulatorCommandLines?: Maybe<Scalars['String']['output']>;
  updateSimulatorDamageStep?: Maybe<Scalars['String']['output']>;
  updateSimulatorDamageTask?: Maybe<Scalars['String']['output']>;
  updateSimulatorInterfaces?: Maybe<Scalars['String']['output']>;
  updateSimulatorLighting?: Maybe<Scalars['String']['output']>;
  updateSimulatorPanels?: Maybe<Scalars['String']['output']>;
  updateSimulatorTriggers?: Maybe<Scalars['String']['output']>;
  updateSoftwarePanel?: Maybe<Scalars['String']['output']>;
  updateSurveyForm?: Maybe<Scalars['String']['output']>;
  updateSystemDamageStep?: Maybe<Scalars['String']['output']>;
  updateSystemDamageTask?: Maybe<Scalars['String']['output']>;
  updateSystemName?: Maybe<Scalars['String']['output']>;
  updateSystemRooms?: Maybe<Scalars['String']['output']>;
  updateSystemUpgradeBoard?: Maybe<Scalars['String']['output']>;
  updateSystemUpgradeMacros?: Maybe<Scalars['String']['output']>;
  updateTacticalMap?: Maybe<Scalars['String']['output']>;
  updateTacticalMapItem?: Maybe<Scalars['String']['output']>;
  updateTacticalMapLayer?: Maybe<Scalars['String']['output']>;
  updateTacticalMapPath?: Maybe<Scalars['String']['output']>;
  updateTargetClass?: Maybe<Scalars['String']['output']>;
  updateTeam?: Maybe<Scalars['String']['output']>;
  updateTimelineStep?: Maybe<Scalars['String']['output']>;
  updateTimelineStepItem?: Maybe<Scalars['String']['output']>;
  updateTrigger?: Maybe<Scalars['String']['output']>;
  updateViewscreenAuto?: Maybe<Scalars['String']['output']>;
  /** Macro: Viewscreen: Change Viewscreen Card */
  updateViewscreenComponent?: Maybe<Scalars['String']['output']>;
  updateViewscreenData?: Maybe<Scalars['String']['output']>;
  updateViewscreenName?: Maybe<Scalars['String']['output']>;
  updateViewscreenSecondary?: Maybe<Scalars['String']['output']>;
  upgradeSystem?: Maybe<Scalars['String']['output']>;
  validateDamageStep?: Maybe<Scalars['String']['output']>;
  verifyTask?: Maybe<Scalars['String']['output']>;
  verifyTaskReportStep?: Maybe<Scalars['String']['output']>;
};


export type MutationActivateProbeEmitterArgs = {
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationActivateStealthArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationActivateThxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddAssetFolderArgs = {
  folderPath: Scalars['String']['input'];
  fullPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationAddCardToStationArgs = {
  cardComponent: Scalars['String']['input'];
  cardIcon?: InputMaybe<Scalars['String']['input']>;
  cardName: Scalars['String']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationAddClientToSetArgs = {
  client: SetClientInput;
  id: Scalars['ID']['input'];
};


export type MutationAddCommandLineArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddCommandLineOutputArgs = {
  clientId: Scalars['ID']['input'];
  output: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddCommandLineToSimulatorArgs = {
  commandLine: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddComputerCoreUserArgs = {
  id: Scalars['ID']['input'];
  user?: InputMaybe<ComputerCoreUserInput>;
};


export type MutationAddCoolantArgs = {
  coolant?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAddCoreLayoutArgs = {
  layout?: InputMaybe<CoreLayoutInput>;
};


export type MutationAddCrewToTeamArgs = {
  crewId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type MutationAddCrewmemberArgs = {
  crew?: InputMaybe<CrewInput>;
};


export type MutationAddDeckArgs = {
  doors?: InputMaybe<Scalars['Boolean']['input']>;
  evac?: InputMaybe<Scalars['Boolean']['input']>;
  number: Scalars['Int']['input'];
  simulatorId: Scalars['ID']['input'];
  svgPath?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddDecksBulkArgs = {
  decks: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddExtraReportToSimulatorArgs = {
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddFlightSetToNavigationArgs = {
  flightSetId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddHeatArgs = {
  heat?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAddInterceptionSignalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddInterfaceArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddInterfaceDeviceArgs = {
  height: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};


export type MutationAddInterfaceToSimulatorArgs = {
  interfaceId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddInventoryArgs = {
  inventory?: InputMaybe<InventoryItemInput>;
};


export type MutationAddIssueArgs = {
  body: Scalars['String']['input'];
  person: Scalars['String']['input'];
  priority: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationAddIssueUploadArgs = {
  data: Scalars['String']['input'];
  ext: Scalars['String']['input'];
  filename: Scalars['String']['input'];
};


export type MutationAddKeyboardArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddLibraryEntryArgs = {
  entry: LibraryInput;
};


export type MutationAddLogArgs = {
  log?: InputMaybe<LogInput>;
};


export type MutationAddMacroArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddMacroButtonArgs = {
  configId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationAddMacroButtonConfigArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddMultipleInventoryArgs = {
  inventory?: InputMaybe<Array<InputMaybe<InventoryItemInput>>>;
};


export type MutationAddObjectiveArgs = {
  objective: ObjectiveInput;
};


export type MutationAddRoomArgs = {
  deckId?: InputMaybe<Scalars['ID']['input']>;
  deckNumber?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  svgPath?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddRoomsBulkArgs = {
  rooms: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddShortRangeCommArgs = {
  frequency?: InputMaybe<Scalars['Float']['input']>;
  signalName?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddSickbayCrewArgs = {
  crew: CrewInput;
  id: Scalars['ID']['input'];
};


export type MutationAddSimulatorAmbianceArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationAddSimulatorDamageStepArgs = {
  simulatorId: Scalars['ID']['input'];
  step: DamageStepInput;
};


export type MutationAddSimulatorDamageTaskArgs = {
  simulatorId: Scalars['ID']['input'];
  task: DamageTaskInput;
};


export type MutationAddSimulatorStationCardArgs = {
  cardComponent: Scalars['String']['input'];
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationAddSpeedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  speed: Array<InputMaybe<SpeedInput>>;
};


export type MutationAddStationToStationSetArgs = {
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationAddSystemDamageStepArgs = {
  step: DamageStepInput;
  systemId: Scalars['ID']['input'];
};


export type MutationAddSystemDamageTaskArgs = {
  systemId: Scalars['ID']['input'];
  task: DamageTaskInput;
};


export type MutationAddSystemToSimulatorArgs = {
  className: Scalars['String']['input'];
  params: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationAddTacticalMapItemArgs = {
  item: TacticalItemInput;
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
};


export type MutationAddTacticalMapLayerArgs = {
  mapId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationAddTacticalMapPathArgs = {
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
  path: TacticalPathInput;
};


export type MutationAddTacticalMapsToFlightArgs = {
  mapIds: Array<Scalars['ID']['input']>;
};


export type MutationAddTargetClassArgs = {
  classInput: TargetClassInput;
  id: Scalars['ID']['input'];
};


export type MutationAddTaskArgs = {
  taskInput: TaskInput;
};


export type MutationAddTaskTemplateArgs = {
  definition: Scalars['String']['input'];
};


export type MutationAddTimelineItemToTimelineStepArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineItem: TimelineItemInput;
  timelineStepId: Scalars['ID']['input'];
};


export type MutationAddTimelineStepArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAddTractorTargetArgs = {
  beamId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddTriggerArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddTriggerToSimulatorArgs = {
  simulatorId: Scalars['ID']['input'];
  trigger: Scalars['ID']['input'];
};


export type MutationAddViriiToComputerCoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApplyClientSetArgs = {
  flightId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  stationSetId: Scalars['ID']['input'];
  templateId: Scalars['ID']['input'];
};


export type MutationApproveLongRangeMessageArgs = {
  id: Scalars['ID']['input'];
  message: Scalars['ID']['input'];
};


export type MutationAssignPatientArgs = {
  bunkId: Scalars['ID']['input'];
  crewId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationAssignSpaceEdventuresBadgeArgs = {
  badgeId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAssignSpaceEdventuresFlightRecordArgs = {
  flightId: Scalars['ID']['input'];
};


export type MutationAssignSpaceEdventuresFlightTypeArgs = {
  flightId: Scalars['ID']['input'];
  flightType: Scalars['ID']['input'];
};


export type MutationAssignSpaceEdventuresMissionArgs = {
  badgeId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAssignTaskReportStepArgs = {
  id: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
  stepId: Scalars['ID']['input'];
};


export type MutationAutoAdvanceArgs = {
  limited?: InputMaybe<Scalars['Boolean']['input']>;
  prev?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationBatchIsochipUpdateArgs = {
  chips?: InputMaybe<Array<InputMaybe<IsochipInput>>>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationBeginTransportScanArgs = {
  transporter: Scalars['ID']['input'];
};


export type MutationBreakSystemArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type MutationCancelDeconProgramArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCancelHailArgs = {
  core?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCancelLoopingSoundsArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCancelSensorScanArgs = {
  id: Scalars['ID']['input'];
  scan: Scalars['ID']['input'];
};


export type MutationCancelSickbayBunkScanArgs = {
  bunkId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCancelTransportScanArgs = {
  transporter: Scalars['ID']['input'];
};


export type MutationChangePowerArgs = {
  power: Scalars['Int']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationChangeRoomDeckArgs = {
  deckId: Scalars['ID']['input'];
  roomId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorAlertLevelArgs = {
  alertLevel: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorBridgeCrewArgs = {
  crew: Scalars['Int']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorCapsArgs = {
  caps: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorExocompsArgs = {
  exocomps: Scalars['Int']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorExtraPeopleArgs = {
  crew: Scalars['Int']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorLayoutArgs = {
  layout: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSimulatorRadiationArgs = {
  radiation: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationChangeSystemDefaultPowerLevelArgs = {
  id: Scalars['ID']['input'];
  level: Scalars['Int']['input'];
};


export type MutationChangeSystemPowerLevelsArgs = {
  powerLevels: Array<InputMaybe<Scalars['Int']['input']>>;
  systemId: Scalars['ID']['input'];
};


export type MutationChargePhaserBeamArgs = {
  beamId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationChargeThxArgs = {
  charge: Scalars['Float']['input'];
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationClearAllTargetingContactsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationClearPdfArgs = {
  id: Scalars['ID']['input'];
};


export type MutationClearTaskReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationClearTransportTargetsArgs = {
  transporter: Scalars['ID']['input'];
};


export type MutationClientActivateLightsArgs = {
  clientId: Scalars['ID']['input'];
  dmxSetId: Scalars['ID']['input'];
};


export type MutationClientAddCacheArgs = {
  cacheItem: Scalars['String']['input'];
  client?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  viewscreen?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientAddExtraArgs = {
  flightId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationClientConnectArgs = {
  cards?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  client: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationClientCrackArgs = {
  crack: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationClientDiagnosticArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientDisconnectArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientLockScreenArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientLoginArgs = {
  client: Scalars['ID']['input'];
  loginName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationClientLogoutArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientMovieStateArgs = {
  client: Scalars['ID']['input'];
  movie: Scalars['String']['input'];
};


export type MutationClientOfflineStateArgs = {
  client: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};


export type MutationClientPingArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientRemoveCacheArgs = {
  cacheItem: Scalars['String']['input'];
  client: Scalars['ID']['input'];
};


export type MutationClientResetArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClientSetCardArgs = {
  card: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationClientSetEmailArgs = {
  client: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type MutationClientSetFlightArgs = {
  client: Scalars['ID']['input'];
  flightId: Scalars['ID']['input'];
};


export type MutationClientSetSimulatorArgs = {
  client: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationClientSetSoundPlayerArgs = {
  client: Scalars['ID']['input'];
  soundPlayer: Scalars['Boolean']['input'];
};


export type MutationClientSetStationArgs = {
  client: Scalars['ID']['input'];
  stationName: Scalars['ID']['input'];
};


export type MutationClientSetTrainingArgs = {
  client: Scalars['ID']['input'];
  training: Scalars['Boolean']['input'];
};


export type MutationClientUnlockScreenArgs = {
  client: Scalars['ID']['input'];
};


export type MutationClockSyncArgs = {
  clientId: Scalars['ID']['input'];
};


export type MutationCommAddArrowArgs = {
  commArrowInput: CommArrowInput;
  id: Scalars['ID']['input'];
};


export type MutationCommAddSignalArgs = {
  commSignalInput: CommSignalInput;
  id: Scalars['ID']['input'];
};


export type MutationCommConnectArrowArgs = {
  arrowId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCommDisconnectArrowArgs = {
  arrowId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCommHailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommRemoveArrowArgs = {
  arrowId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCommRemoveSignalArgs = {
  id: Scalars['ID']['input'];
  signalId: Scalars['ID']['input'];
};


export type MutationCommUpdateArgs = {
  commUpdateInput: CommUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationCommUpdateSignalArgs = {
  commSignalInput: CommSignalInput;
  id: Scalars['ID']['input'];
};


export type MutationCommUpdateSignalsArgs = {
  id: Scalars['ID']['input'];
  signals: Array<InputMaybe<CommSignalInput>>;
};


export type MutationCompleteDeconProgramArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteObjectiveArgs = {
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCompleteTaskReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteTransportArgs = {
  target: Scalars['ID']['input'];
  transporter: Scalars['ID']['input'];
};


export type MutationComputerCoreActivateHackingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationComputerCoreAddFileArgs = {
  file: ComputerCoreFileInput;
  id: Scalars['ID']['input'];
};


export type MutationComputerCoreAddHackerArgs = {
  id: Scalars['ID']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationComputerCoreAppendLogArgs = {
  id: Scalars['ID']['input'];
  log: Scalars['String']['input'];
};


export type MutationComputerCoreDeactivateHackingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationComputerCoreDeleteLogArgs = {
  id: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
};


export type MutationComputerCoreHackingPresetArgs = {
  id: Scalars['ID']['input'];
  presetId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationComputerCoreSetHackingFrequencyArgs = {
  frequency: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationComputerCoreSetHackingStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationComputerCoreUpdateHackingFilesArgs = {
  files: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
};


export type MutationConnectHailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCoolPhaserBeamArgs = {
  beamId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationCountermeasuresActivateCountermeasureArgs = {
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresAddModuleArgs = {
  id: Scalars['ID']['input'];
  moduleType: Scalars['String']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresBuildCountermeasureArgs = {
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresConfigureModuleArgs = {
  config: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
  moduleId: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresCreateCountermeasureArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresDeactivateCountermeasureArgs = {
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresLaunchCountermeasureArgs = {
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresLaunchUnlockedCountermeasuresArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCountermeasuresRemoveCountermeasureArgs = {
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresRemoveModuleArgs = {
  id: Scalars['ID']['input'];
  moduleId: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
};


export type MutationCountermeasuresSetFdNoteArgs = {
  countermeasureId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCountermeasuresSetResourceArgs = {
  id: Scalars['ID']['input'];
  resource: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};


export type MutationCreateDockingPortArgs = {
  port: DockingPortInput;
};


export type MutationCreateFirebaseUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateFlightSetArgs = {
  flightSet: FlightSetInput;
};


export type MutationCreateHackingPresetArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateMissionArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateSensorArmyContactArgs = {
  contact: SensorContactInput;
  id: Scalars['ID']['input'];
};


export type MutationCreateSensorContactArgs = {
  contact: SensorContactInput;
  id: Scalars['ID']['input'];
};


export type MutationCreateSensorContactsArgs = {
  contacts: Array<SensorContactInput>;
  id: Scalars['ID']['input'];
};


export type MutationCreateSetArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateSimulatorArgs = {
  name: Scalars['String']['input'];
  template?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSoftwarePanelArgs = {
  panel: SoftwarePanelInput;
};


export type MutationCreateStationSetArgs = {
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationCreateSurveyFormArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateTargetingContactArgs = {
  id: Scalars['ID']['input'];
  targetClass: Scalars['ID']['input'];
};


export type MutationCreateTeamArgs = {
  team: TeamInput;
};


export type MutationCrewImportArgs = {
  crew: Array<InputMaybe<CrewInput>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationCrmAddEnemyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCrmDestroyUndockedFightersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCrmFirePhaserArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  target: Scalars['ID']['input'];
};


export type MutationCrmFireTorpedoArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  target: Scalars['ID']['input'];
};


export type MutationCrmLoadTorpedoArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmRestockTorpedosArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmRestoreFighterArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmRestoreFightersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCrmSetAccelerationArgs = {
  acceleration: CoordinatesInput;
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmSetActivatedArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCrmSetAttackingArgs = {
  attacking: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmSetEnemyCountArgs = {
  count: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmSetEnemyIconArgs = {
  id: Scalars['ID']['input'];
  image: Scalars['String']['input'];
};


export type MutationCrmSetEnemyStrengthArgs = {
  id: Scalars['ID']['input'];
  strength: Scalars['Float']['input'];
};


export type MutationCrmSetFighterDockedArgs = {
  clientId: Scalars['ID']['input'];
  docked: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCrmSetFighterIconArgs = {
  id: Scalars['ID']['input'];
  image: Scalars['String']['input'];
};


export type MutationCrmSetFighterImageArgs = {
  id: Scalars['ID']['input'];
  image: Scalars['String']['input'];
};


export type MutationCrmSetFighterStrengthArgs = {
  id: Scalars['ID']['input'];
  strength: Scalars['Float']['input'];
};


export type MutationCrmSetPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


export type MutationCrmSetPhaserChargeArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  phaser: Scalars['Float']['input'];
};


export type MutationCrmSetShieldStateArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  shield: Scalars['Boolean']['input'];
};


export type MutationCrmStopPhaserArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDamageReportArgs = {
  report: Scalars['String']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationDamageSystemArgs = {
  destroyed?: InputMaybe<Scalars['Boolean']['input']>;
  report?: InputMaybe<Scalars['String']['input']>;
  systemId: Scalars['ID']['input'];
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeactivateStealthArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeactivateThxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeckDoorsArgs = {
  deckId: Scalars['ID']['input'];
  doors?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeckEvacArgs = {
  deckId: Scalars['ID']['input'];
  evac?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteComputerCoreVirusArgs = {
  id: Scalars['ID']['input'];
  virusId: Scalars['ID']['input'];
};


export type MutationDeleteFlightArgs = {
  flightId: Scalars['ID']['input'];
};


export type MutationDeleteFlightSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHackingPresetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLongRangeMessageArgs = {
  id: Scalars['ID']['input'];
  message: Scalars['ID']['input'];
};


export type MutationDenyTaskVerifyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeployExocompArgs = {
  exocomp: ExocompInput;
};


export type MutationDestroyAllProbeNetworkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyAllProbesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDestroyProbeArgs = {
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationDestroySensorContactArgs = {
  contact?: InputMaybe<Scalars['ID']['input']>;
  contacts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
};


export type MutationDirectionUpdateArgs = {
  direction?: InputMaybe<DirectionInput>;
  id: Scalars['ID']['input'];
};


export type MutationDischargePatientArgs = {
  bunkId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDischargePhaserBeamArgs = {
  beamId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDismissVerifiedTasksArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type MutationDmxConfigCreateArgs = {
  name: Scalars['String']['input'];
};


export type MutationDmxConfigDuplicateArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxConfigRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDmxConfigSetActionStrengthArgs = {
  actionStrength: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDmxConfigSetConfigArgs = {
  config: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDmxConfigSetNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxDeviceCreateArgs = {
  name: Scalars['String']['input'];
};


export type MutationDmxDeviceRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDmxDeviceSetChannelsArgs = {
  channels: Array<DmxChannelProperty>;
  id: Scalars['ID']['input'];
};


export type MutationDmxDeviceSetNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxFixtureAddTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  newTag: Scalars['String']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxFixtureCreateArgs = {
  DMXDeviceId: Scalars['ID']['input'];
  DMXSetId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxFixtureRemoveArgs = {
  DMXSetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDmxFixtureRemoveTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  removeTag: Scalars['String']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxFixtureSetActiveArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxFixtureSetChannelArgs = {
  channel: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDmxFixtureSetDmxDeviceArgs = {
  DMXDeviceID: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDmxFixtureSetModeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  mode: DmxFixtureMode;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tag?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxFixtureSetNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxFixtureSetPassiveChannelsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  passiveChannels: DmxPassiveChannelsInput;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxFixtureSetTagsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  newTags: Array<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDmxSetCreateArgs = {
  name: Scalars['String']['input'];
};


export type MutationDmxSetDuplicateArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxSetRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDmxSetSetNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDmxSetSimulatorConfigArgs = {
  dmxConfigId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationDocumentAddArgs = {
  asset: Scalars['String']['input'];
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationDocumentRemoveArgs = {
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationDownloadRemoteAssetsArgs = {
  files: Array<RemoteAsset>;
  folderPath: Scalars['String']['input'];
};


export type MutationDuplicateCommandLineArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDuplicateMacroArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDuplicateMacroActionArgs = {
  actionId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDuplicateStationSetArgs = {
  name: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationDuplicateTacticalMapArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDuplicateTimelineStepArgs = {
  missionId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
};


export type MutationEditCardInStationSetArgs = {
  cardComponent?: InputMaybe<Scalars['String']['input']>;
  cardIcon?: InputMaybe<Scalars['String']['input']>;
  cardName: Scalars['String']['input'];
  newCardName?: InputMaybe<Scalars['String']['input']>;
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationEditMissionArgs = {
  aux?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  missionId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  simulators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationEditSimulatorStationCardArgs = {
  cardComponent?: InputMaybe<Scalars['String']['input']>;
  cardName: Scalars['String']['input'];
  newCardName?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationEditStationInStationSetArgs = {
  newStationName: Scalars['String']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationEncryptLongRangeMessageArgs = {
  id: Scalars['ID']['input'];
  message: Scalars['ID']['input'];
};


export type MutationEndSurveyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEngineCoolArgs = {
  id: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEntitiesSetPositionArgs = {
  entities: Array<EntitiesLocationInput>;
};


export type MutationEntityCreateArgs = {
  flightId: Scalars['ID']['input'];
  template?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEntityRemoveArgs = {
  id: Array<Scalars['ID']['input']>;
};


export type MutationEntityRemoveAppearanceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveBehaviorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveEngineArgs = {
  id: Scalars['ID']['input'];
  type: EntityEngineEnum;
};


export type MutationEntityRemoveGlowArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveIdentityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveLightArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveLocationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveStageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveStageChildArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntityRemoveThrustersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEntitySetAppearanceArgs = {
  cloudMapAsset?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  emissiveColor?: InputMaybe<Scalars['String']['input']>;
  emissiveIntensity?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  materialMapAsset?: InputMaybe<Scalars['String']['input']>;
  meshType?: InputMaybe<MeshTypeEnum>;
  modelAsset?: InputMaybe<Scalars['String']['input']>;
  ringMapAsset?: InputMaybe<Scalars['String']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationEntitySetBehaviorArgs = {
  behavior: Behaviors;
  destination?: InputMaybe<EntityCoordinatesInput>;
  id: Scalars['ID']['input'];
  targetId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEntitySetEngineArgs = {
  coolant?: InputMaybe<Scalars['Float']['input']>;
  cooling?: InputMaybe<Scalars['Boolean']['input']>;
  currentSpeed?: InputMaybe<Scalars['Float']['input']>;
  heat?: InputMaybe<Scalars['Float']['input']>;
  heatRate?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  type: EntityEngineEnum;
};


export type MutationEntitySetGlowArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  glowMode?: InputMaybe<GlowModeEnum>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEntitySetIdentityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEntitySetLightArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  decay?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  intensity?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationEntitySetLocationArgs = {
  acceleration?: InputMaybe<EntityCoordinatesInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<EntityCoordinatesInput>;
  rotation?: InputMaybe<QuaternionInput>;
  rotationAcceleration?: InputMaybe<EntityCoordinatesInput>;
  rotationVelocity?: InputMaybe<EntityCoordinatesInput>;
  velocity?: InputMaybe<EntityCoordinatesInput>;
};


export type MutationEntitySetRotationVelocityMagnitudeArgs = {
  id: Scalars['ID']['input'];
  rotationVelocity: CoordinatesInput;
};


export type MutationEntitySetStageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  scaleLabel?: InputMaybe<Scalars['String']['input']>;
  scaleLabelShort?: InputMaybe<Scalars['String']['input']>;
  skyboxKey?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEntitySetStageChildArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  parentId: Scalars['ID']['input'];
};


export type MutationEntitySetTemplateArgs = {
  category: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEntitySetThrustersArgs = {
  direction?: InputMaybe<CoordinatesInput>;
  id: Scalars['ID']['input'];
  movementSpeed?: InputMaybe<Scalars['Float']['input']>;
  rotationDelta?: InputMaybe<CoordinatesInput>;
  rotationSpeed?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationExecuteCommandLineArgs = {
  arg?: InputMaybe<Scalars['String']['input']>;
  command: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationExecuteFirebasePushArgs = {
  eventId: Scalars['ID']['input'];
  flightId: Scalars['ID']['input'];
};


export type MutationExocompCompleteUpgradeArgs = {
  exocomp: Scalars['ID']['input'];
};


export type MutationFirePhaserBeamArgs = {
  beamId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationFireProbeArgs = {
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationFireRailgunArgs = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationFixSystemArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type MutationFlightSetBaseUniverseArgs = {
  flightId?: InputMaybe<Scalars['ID']['input']>;
  procGenKey?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFlipSimulatorArgs = {
  flip: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationFluxDilithiumStressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFluxJumpdriveSectorArgs = {
  id: Scalars['ID']['input'];
  sector?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFluxSignalJammerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationFluxStealthQuadrantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationFluxSubspaceFieldArgs = {
  id: Scalars['ID']['input'];
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFluxSystemPowerArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFluxTranswarpArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quad?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFreezeTacticalMapArgs = {
  freeze: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationGenerateDamageReportArgs = {
  steps?: InputMaybe<Scalars['Int']['input']>;
  systemId: Scalars['ID']['input'];
};


export type MutationGenerateTaskReportArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  stepCount?: InputMaybe<Scalars['Int']['input']>;
  systemId?: InputMaybe<Scalars['ID']['input']>;
  type: Scalars['String']['input'];
};


export type MutationGenericArgs = {
  key: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationGetSpaceEdventuresLoginArgs = {
  token: Scalars['String']['input'];
};


export type MutationGoogleSheetsAppendDataArgs = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  sheetId?: InputMaybe<Scalars['String']['input']>;
  spreadsheetId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGoogleSheetsCompleteAuthorizeArgs = {
  token: Scalars['String']['input'];
};


export type MutationGoogleSheetsFileSearchArgs = {
  searchText: Scalars['String']['input'];
};


export type MutationHandheldScannerCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHandheldScannerResponseArgs = {
  id: Scalars['ID']['input'];
  response: Scalars['String']['input'];
};


export type MutationHandheldScannerScanArgs = {
  id: Scalars['ID']['input'];
  request: Scalars['String']['input'];
};


export type MutationHandleAddFlightSetToNavigationArgs = {
  flightSetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationHandleAddProbeAssignmentArgs = {
  id: Scalars['ID']['input'];
  poiId: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationHandleCommandLineFeedbackArgs = {
  clientId: Scalars['ID']['input'];
  feedbackId: Scalars['ID']['input'];
  ignore?: InputMaybe<Scalars['Boolean']['input']>;
  isApproved: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationHandleCoolantFlushArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHandleEmergencyStopArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHandleEngageFlightPathArgs = {
  id: Scalars['ID']['input'];
  path: NavigationRouteInput;
};


export type MutationHandleEngineFluxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHandleOnAssignProbeArgs = {
  id: Scalars['ID']['input'];
  poiId: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationHandleOverrideLocationArgs = {
  currentLocationName?: InputMaybe<Scalars['String']['input']>;
  currentLocationUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location: BasicCoordinateInput;
};


export type MutationHandleResumePathArgs = {
  id: Scalars['ID']['input'];
};


export type MutationHandleSaveFlightPathArgs = {
  id: Scalars['ID']['input'];
  path: NamedNavigationRouteInput;
};


export type MutationHandleSetCoolantLevelArgs = {
  id: Scalars['ID']['input'];
  level: Scalars['Float']['input'];
};


export type MutationHandleSetHeatLevelArgs = {
  id: Scalars['ID']['input'];
  level: Scalars['Float']['input'];
};


export type MutationHandleShowEtaArgs = {
  id: Scalars['ID']['input'];
  show: Scalars['Boolean']['input'];
};


export type MutationHandleShowFlightSetArgs = {
  id: Scalars['ID']['input'];
  show: Scalars['Boolean']['input'];
};


export type MutationHandleUpdateCurrentFlightPathArgs = {
  id: Scalars['ID']['input'];
  route: NavigationRouteInput;
};


export type MutationHandleUpdateCurrentFlightSetArgs = {
  flightSetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationHandleUpdateEtaArgs = {
  eta: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationHandleUpdateProbeAssignmentsArgs = {
  id: Scalars['ID']['input'];
  probeAssignments: Scalars['String']['input'];
};


export type MutationHideSimulatorCardArgs = {
  cardName: Scalars['String']['input'];
  delay?: InputMaybe<Scalars['Int']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationHitJumpDriveStressArgs = {
  id: Scalars['ID']['input'];
  sector: Scalars['String']['input'];
};


export type MutationHitShieldsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationIgnoreCoreFeedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImportLibraryEntryArgs = {
  entries: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationImportMissionArgs = {
  jsonString: Scalars['String']['input'];
};


export type MutationImportMissionFromUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationImportRoomsArgs = {
  rooms: Array<InputMaybe<RoomInput>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationImportSimulatorFromUrlArgs = {
  url: Scalars['String']['input'];
};


export type MutationInsertIsochipArgs = {
  chip?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInternalCommCallIncomingArgs = {
  id: Scalars['ID']['input'];
  incoming?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInternalCommCallOutgoingArgs = {
  id: Scalars['ID']['input'];
  outgoing?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInternalCommCancelIncomingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInternalCommCancelOutgoingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInternalCommConnectIncomingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInternalCommConnectOutgoingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLaunchProbeArgs = {
  id: Scalars['ID']['input'];
  probe: ProbeInput;
};


export type MutationLightingFadeLightsArgs = {
  duration: Scalars['Float']['input'];
  endIntensity: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
  startIntensity?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationLightingSetEffectArgs = {
  duration?: InputMaybe<Scalars['Float']['input']>;
  effect: Lighting_Action;
  simulatorId: Scalars['ID']['input'];
  strength?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationLightingSetIntensityArgs = {
  intensity: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationLightingShakeLightsArgs = {
  duration?: InputMaybe<Scalars['Float']['input']>;
  simulatorId: Scalars['ID']['input'];
  strength?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationLoadRailgunArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoadTacticalMapArgs = {
  flightId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationLockThxArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationLongRangeMessageSendArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['ID']['input'];
};


export type MutationMidiSetControlArgs = {
  control: MidiControlInput;
  id: Scalars['ID']['input'];
};


export type MutationMidiSetCreateArgs = {
  deviceName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationMidiSetRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMidiSetRenameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationMissionSetExtraRequirementsArgs = {
  missionId: Scalars['ID']['input'];
  requirements: RequirementInput;
};


export type MutationMotuAddArgs = {
  address: Scalars['String']['input'];
};


export type MutationMotuRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMotuSetSendMuteArgs = {
  id: Scalars['ID']['input'];
  inputId: Scalars['ID']['input'];
  mute: Scalars['Boolean']['input'];
  outputId: Scalars['ID']['input'];
};


export type MutationMotuUpdateChannelArgs = {
  channel: MotuChannelInput;
  channelId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationMoveInventoryArgs = {
  count: Scalars['Int']['input'];
  fromRoom: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  toRoom: Scalars['ID']['input'];
  toSimulator?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMoveSensorContactArgs = {
  contact: SensorContactInput;
  id: Scalars['ID']['input'];
};


export type MutationMuteShortRangeCommArgs = {
  arrowId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  mute: Scalars['Boolean']['input'];
};


export type MutationNavCalculateCourseArgs = {
  destination: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationNavCancelCalculationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationNavCourseEntryArgs = {
  id: Scalars['ID']['input'];
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  z?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNavCourseResponseArgs = {
  id: Scalars['ID']['input'];
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  z?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNavSetDestinationArgs = {
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNavSetDestinationsArgs = {
  destinations?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNavSetPresetsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  presets?: InputMaybe<NavPresetInput>;
};


export type MutationNavSetScanningArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  scanning?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNavSetThrustersArgs = {
  id: Scalars['ID']['input'];
  thrusters?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNavToggleCalculateArgs = {
  id: Scalars['ID']['input'];
  which: Scalars['Boolean']['input'];
};


export type MutationNewRandomCrewmemberArgs = {
  position?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNewSensorScanArgs = {
  id: Scalars['ID']['input'];
  scan: SensorScanInput;
};


export type MutationNewTacticalMapArgs = {
  flightId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};


export type MutationNormalSubspaceFieldArgs = {
  id: Scalars['ID']['input'];
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNormalTranswarpArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  quad?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNotifyArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<NotifyColors>;
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNudgeSensorContactsArgs = {
  amount?: InputMaybe<CoordinatesInput>;
  id: Scalars['ID']['input'];
  speed: Scalars['Float']['input'];
  yaw?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationObjectiveSetCrewCompleteArgs = {
  crewComplete: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationObjectiveSetOrderArgs = {
  id: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};


export type MutationPauseFlightArgs = {
  flightId: Scalars['ID']['input'];
};


export type MutationPhaserArcArgs = {
  arc: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationPingSensorsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPlaySoundArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  sound: SoundInput;
  station?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPrintPdfArgs = {
  asset: Scalars['String']['input'];
};


export type MutationProbeProcessedDataArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  flash?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationProbeQueryArgs = {
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProbeQueryResponseArgs = {
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
  response?: InputMaybe<Scalars['String']['input']>;
};


export type MutationProcessedDataArgs = {
  data: Scalars['String']['input'];
  domain?: InputMaybe<Scalars['String']['input']>;
  flash?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationReactorAckWingRequestArgs = {
  ack: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
};


export type MutationReactorBatteryChargeLevelArgs = {
  id: Scalars['ID']['input'];
  level: Scalars['Float']['input'];
};


export type MutationReactorBatteryChargeRateArgs = {
  id: Scalars['ID']['input'];
  rate: Scalars['Float']['input'];
};


export type MutationReactorChangeEfficiencyArgs = {
  efficiency?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationReactorChangeModelArgs = {
  id: Scalars['ID']['input'];
  model: Scalars['String']['input'];
};


export type MutationReactorChangeOutputArgs = {
  id: Scalars['ID']['input'];
  output: Scalars['Int']['input'];
};


export type MutationReactorEjectArgs = {
  id: Scalars['ID']['input'];
  tf: Scalars['Boolean']['input'];
};


export type MutationReactorRequestWingPowerArgs = {
  id: Scalars['ID']['input'];
  power: Scalars['Int']['input'];
  wing: Scalars['String']['input'];
};


export type MutationReactorRequireBalanceArgs = {
  balance: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationReactorSetHasWingsArgs = {
  hasWings: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationReactorSetWingPowerArgs = {
  id: Scalars['ID']['input'];
  power: Scalars['Int']['input'];
  wing: Scalars['String']['input'];
};


export type MutationRecallExocompArgs = {
  exocomp: Scalars['ID']['input'];
};


export type MutationRecordTemplateAddToSnippetArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents: Scalars['String']['input'];
  modified?: InputMaybe<Scalars['Boolean']['input']>;
  snippetId: Scalars['ID']['input'];
  timestamp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRecordTemplateCreateSnippetArgs = {
  name: Scalars['String']['input'];
};


export type MutationRecordTemplateDeleteSnippetArgs = {
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordTemplateRemoveFromSnippetArgs = {
  recordId: Scalars['ID']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordTemplateRenameArgs = {
  name: Scalars['String']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordTemplateUpdateRecordArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Scalars['String']['input']>;
  modified?: InputMaybe<Scalars['Boolean']['input']>;
  recordId?: InputMaybe<Scalars['ID']['input']>;
  snippetId: Scalars['ID']['input'];
  timestamp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRecordsAddToSnippetArgs = {
  recordIds: Array<Scalars['ID']['input']>;
  simulatorId: Scalars['ID']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordsCreateArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  timestamp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRecordsCreateOnSnippetArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  contents: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  snippetId?: InputMaybe<Scalars['ID']['input']>;
  snippetName?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRecordsCreateSnippetArgs = {
  name: Scalars['String']['input'];
  recordIds: Array<Scalars['ID']['input']>;
  simulatorId: Scalars['ID']['input'];
  type?: InputMaybe<RecordSnippetType>;
};


export type MutationRecordsDeleteRecordArgs = {
  recordId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationRecordsGenerateRecordsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecordsHideSnippetArgs = {
  simulatorId: Scalars['ID']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordsRemoveFromSnippetArgs = {
  recordId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRecordsShowSnippetArgs = {
  simulatorId: Scalars['ID']['input'];
  snippetId: Scalars['ID']['input'];
};


export type MutationRemoteAccessSendCodeArgs = {
  code: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationRemoteAccessUpdateCodeArgs = {
  codeId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationRemoveAllCrewArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type MutationRemoveAllSensorContactsArgs = {
  id: Scalars['ID']['input'];
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationRemoveAssetFolderArgs = {
  fullPath: Scalars['String']['input'];
};


export type MutationRemoveAssetObjectArgs = {
  fullPath: Scalars['String']['input'];
};


export type MutationRemoveCardFromStationArgs = {
  cardName: Scalars['String']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationRemoveClientFromSetArgs = {
  clientId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveCommandLineArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCommandLineFromSimulatorArgs = {
  commandLine: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationRemoveComputerCoreUserArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationRemoveCoreLayoutArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRemoveCrewFromTeamArgs = {
  crewId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type MutationRemoveCrewInventoryArgs = {
  crewId: Scalars['ID']['input'];
  inventory: Array<InputMaybe<InventoryCount>>;
  roomId: Scalars['ID']['input'];
};


export type MutationRemoveCrewmemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRemoveDeckArgs = {
  deckId: Scalars['ID']['input'];
};


export type MutationRemoveDockingPortArgs = {
  port: Scalars['ID']['input'];
};


export type MutationRemoveInterceptionSignalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveInterfaceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveInterfaceDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveInterfaceFromSimulatorArgs = {
  interfaceId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationRemoveInventoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRemoveKeyboardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveLibraryEntryArgs = {
  entry?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveMacroArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveMacroButtonArgs = {
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveMacroButtonConfigArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveMissionArgs = {
  missionId: Scalars['ID']['input'];
};


export type MutationRemoveProcessedDataArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  time: Scalars['String']['input'];
};


export type MutationRemoveRoomArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationRemoveSensorArmyContactArgs = {
  contact: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveSensorContactArgs = {
  contact: SensorContactInput;
  id: Scalars['ID']['input'];
};


export type MutationRemoveSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveShortRangeCommArgs = {
  frequency?: InputMaybe<Scalars['Float']['input']>;
  signalName?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationRemoveSickbayCrewArgs = {
  crewId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveSimulatorArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type MutationRemoveSimulatorAmbianceArgs = {
  ambianceId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveSimulatorDamageStepArgs = {
  simulatorId: Scalars['ID']['input'];
  step: Scalars['ID']['input'];
};


export type MutationRemoveSimulatorDamageTaskArgs = {
  simulatorId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationRemoveSimulatorStationCardArgs = {
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationRemoveSoftwarePanelArgs = {
  panel: Scalars['ID']['input'];
};


export type MutationRemoveSpaceEdventuresClientArgs = {
  clientId: Scalars['ID']['input'];
  flightId: Scalars['ID']['input'];
};


export type MutationRemoveStationFromStationSetArgs = {
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationRemoveStationSetArgs = {
  stationSetID: Scalars['ID']['input'];
};


export type MutationRemoveSurveyFormArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveSystemDamageStepArgs = {
  step: Scalars['ID']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationRemoveSystemDamageTaskArgs = {
  systemId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationRemoveSystemFromSimulatorArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  systemId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveTacticalMapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTacticalMapItemArgs = {
  itemId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
};


export type MutationRemoveTacticalMapLayerArgs = {
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
};


export type MutationRemoveTacticalMapPathArgs = {
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
  pathId: Scalars['ID']['input'];
};


export type MutationRemoveTargetArgs = {
  id: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
};


export type MutationRemoveTargetClassArgs = {
  classId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveTaskTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTeamArgs = {
  teamId: Scalars['ID']['input'];
};


export type MutationRemoveTimelineStepArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
};


export type MutationRemoveTimelineStepItemArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineItemId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
};


export type MutationRemoveTractorTargetArgs = {
  beamId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationRemoveTriggerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTriggerFromSimulatorArgs = {
  simulatorId: Scalars['ID']['input'];
  trigger: Scalars['ID']['input'];
};


export type MutationRemoveViewscreenPictureInPictureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRenameCommandLineArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameInterfaceArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameInterfaceDeviceArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameKeyboardArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameMacroArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameMacroButtonArgs = {
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameMacroButtonConfigArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameRoomArgs = {
  name: Scalars['String']['input'];
  roomId: Scalars['ID']['input'];
};


export type MutationRenameSetArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameSimulatorArgs = {
  name: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationRenameStationSetArgs = {
  name: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationRenameTaskTemplateArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationRenameTriggerArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationReorderCoreLayoutsArgs = {
  layouts: Array<Scalars['ID']['input']>;
};


export type MutationReorderMacroActionArgs = {
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  newIndex: Scalars['Int']['input'];
  oldIndex: Scalars['Int']['input'];
};


export type MutationReorderMacroButtonArgs = {
  configId: Scalars['ID']['input'];
  newIndex: Scalars['Int']['input'];
  oldIndex: Scalars['Int']['input'];
};


export type MutationReorderStationWidgetsArgs = {
  order: Scalars['Int']['input'];
  stationName: Scalars['String']['input'];
  stationSetId: Scalars['ID']['input'];
  widget: Scalars['String']['input'];
};


export type MutationReorderTacticalMapLayerArgs = {
  layer: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};


export type MutationReorderTimelineItemArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  order: Scalars['Int']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineItemId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
};


export type MutationReorderTimelineStepArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  order: Scalars['Int']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
};


export type MutationRepairSystemArgs = {
  systemId: Scalars['ID']['input'];
};


export type MutationRequestDamageReportArgs = {
  systemId: Scalars['ID']['input'];
};


export type MutationRequestTaskVerifyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRequestVerifyTaskReportStepArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationRequiredRotationSetArgs = {
  id: Scalars['ID']['input'];
  rotation?: InputMaybe<RotationInput>;
};


export type MutationResetFlightArgs = {
  flightId: Scalars['ID']['input'];
  full?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetKeypadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetThxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRestartComputerCoreTerminalArgs = {
  id: Scalars['ID']['input'];
  terminalId: Scalars['ID']['input'];
};


export type MutationRestoreComputerCoreFileArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRestoreShieldsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationResumeFlightArgs = {
  flightId: Scalars['ID']['input'];
};


export type MutationRoomGasArgs = {
  gas?: InputMaybe<Scalars['Boolean']['input']>;
  roomId: Scalars['ID']['input'];
};


export type MutationRotationSetArgs = {
  id: Scalars['ID']['input'];
  rotation?: InputMaybe<RotationInput>;
};


export type MutationRotationUpdateArgs = {
  id: Scalars['ID']['input'];
  on?: InputMaybe<Scalars['Boolean']['input']>;
  rotation?: InputMaybe<RotationInput>;
};


export type MutationScanSickbayBunkArgs = {
  bunkId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  request: Scalars['String']['input'];
};


export type MutationSelectCurrentFlightSetArgs = {
  flightSetId: Scalars['String']['input'];
  show?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationSendLongRangeMessageArgs = {
  crew?: InputMaybe<Scalars['Boolean']['input']>;
  decoded?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
  sender?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSendMessageArgs = {
  message: MessageInput;
};


export type MutationSensorScanCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSensorScanRequestArgs = {
  id: Scalars['ID']['input'];
  request: Scalars['String']['input'];
};


export type MutationSensorScanResultArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  result: Scalars['String']['input'];
};


export type MutationSensorsFireProjectileArgs = {
  contactId: Scalars['ID']['input'];
  hitpoints: Scalars['Int']['input'];
  miss?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
  speed: Scalars['Float']['input'];
};


export type MutationSensorsSetHasPingArgs = {
  id: Scalars['ID']['input'];
  ping: Scalars['Boolean']['input'];
};


export type MutationSetAlertConditionLockArgs = {
  lock: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetArmyContactsArgs = {
  armyContacts: Array<InputMaybe<SensorContactInput>>;
  domain: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetAutoMovementArgs = {
  id: Scalars['ID']['input'];
  movement: CoordinatesInput;
};


export type MutationSetAuxTimelineStepArgs = {
  simulatorId: Scalars['ID']['input'];
  step: Scalars['Int']['input'];
  timelineId: Scalars['ID']['input'];
};


export type MutationSetBridgeMessagingArgs = {
  id: Scalars['ID']['input'];
  messaging: Scalars['Boolean']['input'];
};


export type MutationSetClientHypercardArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  component?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetClientOverlayArgs = {
  id: Scalars['ID']['input'];
  overlay: Scalars['Boolean']['input'];
};


export type MutationSetCodeLengthArgs = {
  id: Scalars['ID']['input'];
  len: Scalars['Int']['input'];
};


export type MutationSetCoolantTankArgs = {
  coolant: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetCoordinateTargetingArgs = {
  id: Scalars['ID']['input'];
  which: Scalars['Boolean']['input'];
};


export type MutationSetDamageStepValidationArgs = {
  id: Scalars['ID']['input'];
  validation: Scalars['Boolean']['input'];
};


export type MutationSetDeconAutoFinishArgs = {
  finish: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetDilithiumStressRateArgs = {
  id: Scalars['ID']['input'];
  rate: Scalars['Float']['input'];
};


export type MutationSetEngineAccelerationArgs = {
  acceleration: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetEngineSpeedFactorArgs = {
  id: Scalars['ID']['input'];
  speedFactor: Scalars['Float']['input'];
};


export type MutationSetEngineSpeedsArgs = {
  id: Scalars['ID']['input'];
  speeds: Array<InputMaybe<SpeedInput>>;
};


export type MutationSetEngineUseAccelerationArgs = {
  id: Scalars['ID']['input'];
  useAcceleration: Scalars['Boolean']['input'];
};


export type MutationSetFirebaseAwardsArgs = {
  awards: Array<FbAwardInput>;
};


export type MutationSetFirebaseMissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetFirebaseSimulatorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetHeatRateArgs = {
  id: Scalars['ID']['input'];
  rate?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationSetHullPlatingEngagedArgs = {
  engaged?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationSetHullPlatingModeArgs = {
  id: Scalars['ID']['input'];
  mode?: InputMaybe<Hull_Plating_Mode>;
};


export type MutationSetHullPlatingPulseArgs = {
  id: Scalars['ID']['input'];
  pulse?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSetInterceptionDifficultyArgs = {
  difficulty: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetJumpDriveEnabledArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationSetJumpDriveRingsExtendedArgs = {
  id: Scalars['ID']['input'];
  ringsExtended: Scalars['Boolean']['input'];
};


export type MutationSetJumpdriveActivatedArgs = {
  activated: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetJumpdriveEnvsArgs = {
  envs: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetJumpdriveSectorLevelArgs = {
  id: Scalars['ID']['input'];
  level: Scalars['Int']['input'];
  sector: Scalars['String']['input'];
};


export type MutationSetJumpdriveSectorOffsetArgs = {
  id: Scalars['ID']['input'];
  offset: Scalars['Float']['input'];
  sector: Scalars['String']['input'];
};


export type MutationSetKeypadAllowedAttemptsArgs = {
  attempts: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetKeypadCodeArgs = {
  code?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id: Scalars['ID']['input'];
};


export type MutationSetKeypadEnteredCodeArgs = {
  code?: InputMaybe<Array<Scalars['Int']['input']>>;
  id: Scalars['ID']['input'];
};


export type MutationSetKeypadHintArgs = {
  hint: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetKeypadLockedArgs = {
  id: Scalars['ID']['input'];
  locked: Scalars['Boolean']['input'];
};


export type MutationSetLongRangePresetMessagesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  messages?: InputMaybe<Array<InputMaybe<PresetAnswerInput>>>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetLongRangeSatellitesArgs = {
  id: Scalars['ID']['input'];
  num: Scalars['Int']['input'];
};


export type MutationSetMacroButtonCategoryArgs = {
  category: Scalars['String']['input'];
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetMacroButtonColorArgs = {
  color: NotifyColors;
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetPhaserBeamChargeArgs = {
  beamId: Scalars['ID']['input'];
  charge: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetPhaserBeamCountArgs = {
  beamCount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetPhaserBeamHeatArgs = {
  beamId: Scalars['ID']['input'];
  heat: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetPhaserChargeSpeedArgs = {
  id: Scalars['ID']['input'];
  speed: Scalars['Float']['input'];
};


export type MutationSetPhaserHoldToChargeArgs = {
  holdToCharge: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetPresetAnswersArgs = {
  domain: Scalars['String']['input'];
  presetAnswers: Array<InputMaybe<PresetAnswerInput>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetProbeChargeArgs = {
  charge: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
};


export type MutationSetProbeTorpedoArgs = {
  id: Scalars['ID']['input'];
  torpedo: Scalars['Boolean']['input'];
};


export type MutationSetRailgunAmmoArgs = {
  ammo?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationSetRailgunAvailableAmmoArgs = {
  ammo: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetRailgunMaxAmmoArgs = {
  ammo: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetReactorEffcicienciesArgs = {
  efficiencies: Array<InputMaybe<ReactorEfficiencyInput>>;
  id: Scalars['ID']['input'];
};


export type MutationSetSelfDestructAutoArgs = {
  auto?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSelfDestructCodeArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSelfDestructTimeArgs = {
  simulatorId: Scalars['ID']['input'];
  time?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationSetSensorPingModeArgs = {
  id: Scalars['ID']['input'];
  mode?: InputMaybe<Ping_Modes>;
};


export type MutationSetSensorsDefaultHitpointsArgs = {
  hp: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetSensorsDefaultSpeedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  speed: Scalars['Float']['input'];
};


export type MutationSetSensorsHistoryArgs = {
  history: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetSensorsInterferenceArgs = {
  id: Scalars['ID']['input'];
  interference: Scalars['Float']['input'];
};


export type MutationSetSensorsMissPercentArgs = {
  id: Scalars['ID']['input'];
  miss: Scalars['Float']['input'];
};


export type MutationSetSensorsSegmentArgs = {
  id: Scalars['ID']['input'];
  line: Scalars['Int']['input'];
  ring: Scalars['Int']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationSetSickbayBunksArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationSetSignalJammerSensorsInterferenceArgs = {
  id: Scalars['ID']['input'];
  interference: Scalars['Boolean']['input'];
};


export type MutationSetSimulatorAssetsArgs = {
  assets: SimulatorAssetsInput;
  id: Scalars['ID']['input'];
};


export type MutationSetSimulatorExocompsArgs = {
  count: Scalars['Int']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorHasLegsArgs = {
  hasLegs: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorHasPrinterArgs = {
  hasPrinter: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorHeliumArgs = {
  helium: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorHeliumRateArgs = {
  heliumRate: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorMissionArgs = {
  missionId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  stepId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetSimulatorMissionConfigArgs = {
  actionId: Scalars['ID']['input'];
  args: Scalars['JSON']['input'];
  missionId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  stationSetId: Scalars['ID']['input'];
};


export type MutationSetSimulatorShowHeliumArgs = {
  showHelium: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSimulatorSoundEffectsArgs = {
  id: Scalars['ID']['input'];
  soundEffects: Scalars['JSON']['input'];
};


export type MutationSetSimulatorSpaceEdventuresIdArgs = {
  simulatorId: Scalars['ID']['input'];
  spaceEdventuresId: Scalars['String']['input'];
};


export type MutationSetSimulatorStationExecutiveArgs = {
  exec: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationSetSimulatorStationLayoutArgs = {
  layout: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationSetSimulatorStationLoginArgs = {
  login: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type MutationSetSimulatorStationMessageGroupArgs = {
  group: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
  station: Scalars['String']['input'];
};


export type MutationSetSimulatorStationWidgetArgs = {
  simulatorId: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
  station: Scalars['String']['input'];
  widget: Scalars['String']['input'];
};


export type MutationSetSimulatorTimelineStepArgs = {
  simulatorId: Scalars['ID']['input'];
  step: Scalars['Int']['input'];
  timelineId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetSimulatorTriggersPausedArgs = {
  paused: Scalars['Boolean']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSetSpaceEdventuresTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationSetSpeedArgs = {
  id: Scalars['ID']['input'];
  on?: InputMaybe<Scalars['Boolean']['input']>;
  speed: Scalars['Int']['input'];
};


export type MutationSetStationAmbianceArgs = {
  ambiance?: InputMaybe<Scalars['String']['input']>;
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationDescriptionArgs = {
  description: Scalars['String']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationExecutiveArgs = {
  exec: Scalars['Boolean']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationLayoutArgs = {
  layout: Scalars['String']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationLoginArgs = {
  login: Scalars['Boolean']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationSetCrewCountArgs = {
  crewCount: Scalars['Int']['input'];
  stationSetID: Scalars['ID']['input'];
};


export type MutationSetStationTagsArgs = {
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
  tags: Array<Scalars['String']['input']>;
};


export type MutationSetStationTrainingArgs = {
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
  training?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSetStealthActivatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSetStealthChargeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSetStealthQuadrantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSetStepDamageArgs = {
  simulatorId: Scalars['ID']['input'];
  stepDamage: Scalars['Boolean']['input'];
};


export type MutationSetSubspaceFieldSectorValueArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value: Scalars['Int']['input'];
  which: Scalars['String']['input'];
};


export type MutationSetSurveyFormGoogleSheetArgs = {
  id: Scalars['ID']['input'];
  sheetId?: InputMaybe<Scalars['ID']['input']>;
  spreadsheetId?: InputMaybe<Scalars['ID']['input']>;
  spreadsheetName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSetTargetClassCountArgs = {
  classId: Scalars['ID']['input'];
  count: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetTargetingCalculatedTargetArgs = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  coordinates?: InputMaybe<CoordinatesInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetTargetingClassesArgs = {
  classInput: Array<InputMaybe<TargetClassInput>>;
  id: Scalars['ID']['input'];
};


export type MutationSetTargetingEnteredTargetArgs = {
  coordinates?: InputMaybe<StringCoordinatesInput>;
  id: Scalars['ID']['input'];
};


export type MutationSetTargetingRangeArgs = {
  id: Scalars['ID']['input'];
  range: Scalars['Float']['input'];
};


export type MutationSetTaskTemplateMacrosArgs = {
  id: Scalars['ID']['input'];
  macros: Array<InputMaybe<ActionInput>>;
};


export type MutationSetTaskTemplatePreMacrosArgs = {
  id: Scalars['ID']['input'];
  macros: Array<InputMaybe<ActionInput>>;
};


export type MutationSetTaskTemplateReportTypesArgs = {
  id: Scalars['ID']['input'];
  reportTypes: Array<InputMaybe<Scalars['String']['input']>>;
};


export type MutationSetTaskTemplateValuesArgs = {
  id: Scalars['ID']['input'];
  values: Scalars['JSON']['input'];
};


export type MutationSetThrusterMovementSpeedArgs = {
  id: Scalars['ID']['input'];
  speed?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationSetThrusterRotationSpeedArgs = {
  id: Scalars['ID']['input'];
  speed: Scalars['Float']['input'];
};


export type MutationSetTrackingPreferenceArgs = {
  pref: Scalars['Boolean']['input'];
};


export type MutationSetTractorBeamCountArgs = {
  beams: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetTractorBeamScanningArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  scanning: Scalars['Boolean']['input'];
};


export type MutationSetTractorBeamStateArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationSetTractorBeamStrengthArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  strength: Scalars['Float']['input'];
};


export type MutationSetTractorBeamStressArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  stress: Scalars['Float']['input'];
};


export type MutationSetTractorBeamTargetArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  target: Scalars['Boolean']['input'];
};


export type MutationSetTractorBeamTargetLabelArgs = {
  beam: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  label: Scalars['String']['input'];
};


export type MutationSetTransportChargeArgs = {
  charge: Scalars['Float']['input'];
  transporter: Scalars['ID']['input'];
};


export type MutationSetTransportDestinationArgs = {
  destination: Scalars['String']['input'];
  transporter: Scalars['ID']['input'];
};


export type MutationSetTransportTargetArgs = {
  target: Scalars['String']['input'];
  transporter: Scalars['ID']['input'];
};


export type MutationSetTransporterChargeSpeedArgs = {
  chargeSpeed: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetTransporterTargetsArgs = {
  targets: Scalars['Int']['input'];
  transporter: Scalars['ID']['input'];
};


export type MutationSetTranswarpActiveArgs = {
  active: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetTranswarpSectorValueArgs = {
  field: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  quad: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};


export type MutationSetVerifyDamageArgs = {
  simulatorId: Scalars['ID']['input'];
  verifyStep: Scalars['Boolean']['input'];
};


export type MutationSetViewscreenPictureInPictureArgs = {
  component: Scalars['String']['input'];
  data?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Pip_Position>;
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Pip_Size>;
};


export type MutationSetViewscreenToAutoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationShieldFrequencySetArgs = {
  frequency?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationShieldFrequencySetAllArgs = {
  frequency: Scalars['Float']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationShieldIntegritySetArgs = {
  id: Scalars['ID']['input'];
  integrity?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationShieldLoweredArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShieldRaisedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShipDockingChangeArgs = {
  simulatorId: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
  which: Scalars['String']['input'];
};


export type MutationShipSetDockingArgs = {
  airlock?: InputMaybe<Scalars['Boolean']['input']>;
  clamps?: InputMaybe<Scalars['Boolean']['input']>;
  legs?: InputMaybe<Scalars['Boolean']['input']>;
  ramps?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationShowPoiInformationOnCurrentFlightSetArgs = {
  infoType: Scalars['String']['input'];
  poiId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationShowPoiOnCurrentFlightSetArgs = {
  flightSetId: Scalars['ID']['input'];
  poiId: Scalars['ID']['input'];
  showName?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationShowViewscreenTacticalArgs = {
  mapId: Scalars['ID']['input'];
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  viewscreenId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSickbayBunkScanResponseArgs = {
  bunkId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  response: Scalars['String']['input'];
};


export type MutationSignalJammerSignalsArgs = {
  id: Scalars['ID']['input'];
  signals: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};


export type MutationSimulatorAddMidiSetArgs = {
  midiSet: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationSimulatorRemoveMidiSetArgs = {
  midiSet: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationStartAuxTimelineArgs = {
  missionId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationStartDeconProgramArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  location: Scalars['String']['input'];
  program: Scalars['String']['input'];
};


export type MutationStartFlightArgs = {
  flightType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  simulators: Array<SimulatorInput>;
};


export type MutationStationAssignCardArgs = {
  assignedToStation: Scalars['String']['input'];
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationStationUnassignCardArgs = {
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationStealthChangeAlertArgs = {
  change: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationStealthSensorsSonarArgs = {
  id: Scalars['ID']['input'];
  sonar: Scalars['Boolean']['input'];
};


export type MutationStopAllSensorContactsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStopAllSoundsArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStopChargingPhasersArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStopPhaserBeamsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSurveyFormResponseArgs = {
  id: Scalars['ID']['input'];
  response?: InputMaybe<FormResultsInput>;
};


export type MutationSyncTimerArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
  time?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSystemReactivationCodeArgs = {
  code: Scalars['String']['input'];
  station: Scalars['String']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationSystemReactivationCodeResponseArgs = {
  response: Scalars['Boolean']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationSystemSetWingArgs = {
  systemId: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
};


export type MutationTargetSystemArgs = {
  id: Scalars['ID']['input'];
  system: Scalars['String']['input'];
  targetId: Scalars['ID']['input'];
};


export type MutationTargetTargetingContactArgs = {
  id: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
};


export type MutationTaskFlowActivateArgs = {
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationTaskFlowAddArgs = {
  name: Scalars['String']['input'];
};


export type MutationTaskFlowAddStepArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationTaskFlowAdvanceArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type MutationTaskFlowRemoveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTaskFlowRemoveStepArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationTaskFlowRenameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationTaskFlowRenameStepArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationTaskFlowReorderStepArgs = {
  id: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationTaskFlowSetCategoryArgs = {
  category: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationTaskFlowStepAddTaskArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  task: TaskInput;
};


export type MutationTaskFlowStepEditTaskArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  task: TaskInput;
  taskId: Scalars['ID']['input'];
};


export type MutationTaskFlowStepRemoveTaskArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationTaskFlowStepSetCompleteAllArgs = {
  completeAll: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationTaskFlowStepSetDelayArgs = {
  delay: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
};


export type MutationTestArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTimelineDuplicateItemArgs = {
  missionId: Scalars['ID']['input'];
  timelineItemId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
};


export type MutationToggleInterfaceObjectHiddenArgs = {
  hidden: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  objectId: Scalars['ID']['input'];
};


export type MutationToggleInterfaceObjectPlayingArgs = {
  id: Scalars['ID']['input'];
  objectId: Scalars['ID']['input'];
};


export type MutationToggleSensorsAutoTargetArgs = {
  id: Scalars['ID']['input'];
  target: Scalars['Boolean']['input'];
};


export type MutationToggleSensorsAutoThrustersArgs = {
  id: Scalars['ID']['input'];
  thrusters: Scalars['Boolean']['input'];
};


export type MutationToggleSimulatorCardHiddenArgs = {
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
  toggle: Scalars['Boolean']['input'];
};


export type MutationToggleStationMessageGroupArgs = {
  group: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
  station: Scalars['String']['input'];
  stationSetId: Scalars['ID']['input'];
};


export type MutationToggleStationWidgetsArgs = {
  state: Scalars['Boolean']['input'];
  stationName: Scalars['String']['input'];
  stationSetID: Scalars['ID']['input'];
  widget: Scalars['String']['input'];
};


export type MutationToggleViewscreenVideoArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  viewscreenId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationTorpedoAddWarheadArgs = {
  id: Scalars['ID']['input'];
  warhead: WarheadInput;
};


export type MutationTorpedoFireArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTorpedoLoadWarheadArgs = {
  id: Scalars['ID']['input'];
  warheadId: Scalars['ID']['input'];
};


export type MutationTorpedoRemoveWarheadArgs = {
  id: Scalars['ID']['input'];
  warheadId: Scalars['ID']['input'];
};


export type MutationTorpedoSetWarheadCountArgs = {
  count: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  warheadType: Scalars['String']['input'];
};


export type MutationTorpedoUnloadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTrainingModeArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type MutationTransferCargoArgs = {
  fromRoom: Scalars['ID']['input'];
  inventory?: InputMaybe<Array<InputMaybe<InventoryCountInput>>>;
  toRoom: Scalars['ID']['input'];
};


export type MutationTransferCoolantArgs = {
  coolantId: Scalars['ID']['input'];
  systemId?: InputMaybe<Scalars['ID']['input']>;
  which?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTriggerActionArgs = {
  action: Scalars['String']['input'];
  clientId?: InputMaybe<Scalars['ID']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
  stationId?: InputMaybe<Scalars['String']['input']>;
  voice?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTriggerInterfaceObjectArgs = {
  id: Scalars['ID']['input'];
  objectId: Scalars['ID']['input'];
};


export type MutationTriggerKeyboardActionArgs = {
  id: Scalars['ID']['input'];
  key: Scalars['String']['input'];
  keyCode: Scalars['String']['input'];
  meta: Array<InputMaybe<Scalars['String']['input']>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationTriggerMacroActionArgs = {
  macroId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationTriggerMacroButtonArgs = {
  buttonId: Scalars['ID']['input'];
  configId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationTriggerMacrosArgs = {
  macros: Array<InputMaybe<MacroInput>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationTriggerSurveyArgs = {
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationUnhideSimulatorCardArgs = {
  cardName: Scalars['String']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type MutationUntargetTargetingContactArgs = {
  id: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
};


export type MutationUpdateAdvNavFlightSetArgs = {
  flightSet: FlightSetInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAdvNavFlightSetDataArgs = {
  flightSet: FlightSetInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommandLineArgs = {
  components?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  connections?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  values?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationUpdateComputerCoreUserArgs = {
  hacker?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationUpdateCoreLayoutArgs = {
  layout?: InputMaybe<CoreLayoutInput>;
};


export type MutationUpdateCrewInventoryArgs = {
  crewId: Scalars['ID']['input'];
  inventory: Array<InputMaybe<InventoryCount>>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateCrewmemberArgs = {
  crew?: InputMaybe<CrewInput>;
};


export type MutationUpdateCurrentDamageStepArgs = {
  step: Scalars['Int']['input'];
  systemId: Scalars['ID']['input'];
};


export type MutationUpdateDeckSvgArgs = {
  deckId: Scalars['ID']['input'];
  svg: Scalars['String']['input'];
};


export type MutationUpdateDeconOffsetArgs = {
  id: Scalars['ID']['input'];
  offset: Scalars['Float']['input'];
};


export type MutationUpdateDilithiumStressArgs = {
  alphaLevel?: InputMaybe<Scalars['Float']['input']>;
  alphaTarget?: InputMaybe<Scalars['Float']['input']>;
  betaLevel?: InputMaybe<Scalars['Float']['input']>;
  betaTarget?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDockingPortArgs = {
  port: DockingPortInput;
};


export type MutationUpdateEnvironmentArgs = {
  deckID: Scalars['ID']['input'];
  environment?: InputMaybe<EnvironmentInput>;
};


export type MutationUpdateExocompDifficultyArgs = {
  difficulty: Scalars['Float']['input'];
  exocomp: Scalars['ID']['input'];
};


export type MutationUpdateFirebaseUserStationArgs = {
  email: Scalars['String']['input'];
  station: Scalars['String']['input'];
};


export type MutationUpdateFlightSetArgs = {
  flightSet: FlightSetInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateHackingPresetArgs = {
  id: Scalars['ID']['input'];
  preset: Scalars['JSON']['input'];
};


export type MutationUpdateHallwaySvgArgs = {
  deckId: Scalars['ID']['input'];
  svg?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateInterfaceArgs = {
  components?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  connections?: InputMaybe<Scalars['JSON']['input']>;
  deviceType?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  values?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationUpdateInterfaceDeviceArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateInventoryCountArgs = {
  count: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  room: Scalars['ID']['input'];
};


export type MutationUpdateInventoryMetadataArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<InventoryMetadataInput>;
};


export type MutationUpdateIsochipArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isochip?: InputMaybe<IsochipInput>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateKeyboardKeyArgs = {
  id: Scalars['ID']['input'];
  key: KeyboardKeyInput;
};


export type MutationUpdateLibraryEntryArgs = {
  entry: LibraryInput;
};


export type MutationUpdateLongRangeCommArgs = {
  longRangeComm: LongRangeCommInput;
};


export type MutationUpdateLongRangeDecodedMessageArgs = {
  a?: InputMaybe<Scalars['Int']['input']>;
  decodedMessage?: InputMaybe<Scalars['String']['input']>;
  f?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  messageId: Scalars['ID']['input'];
};


export type MutationUpdateMacroActionsArgs = {
  actions?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMacroButtonActionsArgs = {
  actions?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  configId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdatePatientChartArgs = {
  chart: ChartInput;
  crewId: Scalars['ID']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateProbeEquipmentArgs = {
  id: Scalars['ID']['input'];
  probeEquipment: ProbeEquipmentInput;
};


export type MutationUpdateProbeTypeArgs = {
  id: Scalars['ID']['input'];
  probeType: ProbeTypeInput;
};


export type MutationUpdateRoomRolesArgs = {
  roles?: InputMaybe<Array<InputMaybe<RoomRoles>>>;
  roomId: Scalars['ID']['input'];
};


export type MutationUpdateRoomSvgArgs = {
  roomId: Scalars['ID']['input'];
  svg: Scalars['String']['input'];
};


export type MutationUpdateSensorArmyContactArgs = {
  contact: SensorContactInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSensorContactArgs = {
  contact: SensorContactInput;
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateSensorContactsArgs = {
  contacts: Array<InputMaybe<SensorContactInput>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSensorGridArgs = {
  contacts: Array<InputMaybe<SensorContactInput>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationUpdateSensorScanArgs = {
  id: Scalars['ID']['input'];
  scan: SensorScanInput;
};


export type MutationUpdateSetClientArgs = {
  client: SetClientInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSickbayCrewArgs = {
  crew: CrewInput;
  crewId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateSignalJammerArgs = {
  jammer: SignalJammerInput;
};


export type MutationUpdateSimulatorAmbianceArgs = {
  ambiance: AmbianceInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSimulatorCommandLinesArgs = {
  commandLines: Array<InputMaybe<Scalars['ID']['input']>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationUpdateSimulatorDamageStepArgs = {
  simulatorId: Scalars['ID']['input'];
  step: DamageStepInput;
};


export type MutationUpdateSimulatorDamageTaskArgs = {
  simulatorId: Scalars['ID']['input'];
  task: DamageTaskInput;
};


export type MutationUpdateSimulatorInterfacesArgs = {
  interfaces: Array<InputMaybe<Scalars['ID']['input']>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationUpdateSimulatorLightingArgs = {
  id: Scalars['ID']['input'];
  lighting: LightingInput;
};


export type MutationUpdateSimulatorPanelsArgs = {
  panels: Array<InputMaybe<Scalars['ID']['input']>>;
  simulatorId: Scalars['ID']['input'];
};


export type MutationUpdateSimulatorTriggersArgs = {
  simulatorId: Scalars['ID']['input'];
  triggers: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdateSoftwarePanelArgs = {
  panel: SoftwarePanelInput;
};


export type MutationUpdateSurveyFormArgs = {
  form: Array<InputMaybe<FormFieldsInput>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSystemDamageStepArgs = {
  step: DamageStepInput;
  systemId: Scalars['ID']['input'];
};


export type MutationUpdateSystemDamageTaskArgs = {
  systemId: Scalars['ID']['input'];
  task: DamageTaskInput;
};


export type MutationUpdateSystemNameArgs = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  systemId: Scalars['ID']['input'];
  upgradeName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSystemRoomsArgs = {
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  systemId: Scalars['ID']['input'];
};


export type MutationUpdateSystemUpgradeBoardArgs = {
  systemId: Scalars['ID']['input'];
  upgradeBoard?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateSystemUpgradeMacrosArgs = {
  systemId: Scalars['ID']['input'];
  upgradeMacros?: InputMaybe<Array<InputMaybe<TimelineItemInput>>>;
};


export type MutationUpdateTacticalMapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateTacticalMapItemArgs = {
  item: TacticalItemInput;
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
};


export type MutationUpdateTacticalMapLayerArgs = {
  layer: TacticalLayerInput;
  mapId: Scalars['ID']['input'];
};


export type MutationUpdateTacticalMapPathArgs = {
  layerId: Scalars['ID']['input'];
  mapId: Scalars['ID']['input'];
  path: TacticalPathInput;
};


export type MutationUpdateTargetClassArgs = {
  classInput: TargetClassInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeamArgs = {
  team: TeamInput;
};


export type MutationUpdateTimelineStepArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
};


export type MutationUpdateTimelineStepItemArgs = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  timelineItemId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
  updateTimelineItem: TimelineItemInput;
};


export type MutationUpdateTriggerArgs = {
  components?: InputMaybe<Scalars['JSON']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  connections?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  values?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationUpdateViewscreenAutoArgs = {
  auto: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateViewscreenComponentArgs = {
  component: Scalars['String']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateViewscreenDataArgs = {
  data: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateViewscreenNameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateViewscreenSecondaryArgs = {
  id: Scalars['ID']['input'];
  secondary: Scalars['Boolean']['input'];
};


export type MutationUpgradeSystemArgs = {
  systemId: Scalars['ID']['input'];
};


export type MutationValidateDamageStepArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVerifyTaskArgs = {
  dismiss?: InputMaybe<Scalars['Boolean']['input']>;
  taskId: Scalars['ID']['input'];
};


export type MutationVerifyTaskReportStepArgs = {
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
};

export type NamedCoordinate = {
  __typename?: 'NamedCoordinate';
  name: Scalars['String']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type NamedCoordinateInput = {
  name: Scalars['String']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type NamedNavigationRoute = {
  __typename?: 'NamedNavigationRoute';
  exitOption: NavigationExitOptions;
  id: Scalars['ID']['output'];
  isBorder: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  secondaryRouteOptions: Array<SecondaryNavigationRouteOption>;
  speedOption: NavigationSpeedOptions;
  startOption: NavigationStartOptions;
  targetLocationId: Scalars['ID']['output'];
};

export type NamedNavigationRouteInput = {
  exitOption: NavigationExitOptionsInput;
  id: Scalars['ID']['input'];
  isBorder: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  secondaryRouteOptions: Array<SecondaryNavigationRouteOptionInput>;
  speedOption: NavigationSpeedOptionsInput;
  startOption: NavigationStartOptionsInput;
  targetLocationId: Scalars['ID']['input'];
};

export type NamedObject = {
  __typename?: 'NamedObject';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NavLoc = {
  __typename?: 'NavLoc';
  x?: Maybe<Scalars['String']['output']>;
  y?: Maybe<Scalars['String']['output']>;
  z?: Maybe<Scalars['String']['output']>;
};

export type NavLocInput = {
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  z?: InputMaybe<Scalars['String']['input']>;
};

export type NavPreset = {
  __typename?: 'NavPreset';
  course?: Maybe<NavLoc>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NavPresetInput = {
  course?: InputMaybe<NavLocInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Navigation = SystemInterface & {
  __typename?: 'Navigation';
  calculate?: Maybe<Scalars['Boolean']['output']>;
  calculatedCourse?: Maybe<NavLoc>;
  currentCourse?: Maybe<NavLoc>;
  damage?: Maybe<Damage>;
  destination?: Maybe<Scalars['String']['output']>;
  destinations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  presets?: Maybe<Array<Maybe<NavPreset>>>;
  scanning?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  thrusters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type NavigationExitOptions = {
  __typename?: 'NavigationExitOptions';
  id: Scalars['ID']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  riskModifier: Scalars['Float']['output'];
};

export type NavigationExitOptionsInput = {
  id: Scalars['ID']['input'];
  imgUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  riskModifier: Scalars['Float']['input'];
};

export type NavigationHazard = {
  __typename?: 'NavigationHazard';
  description: Scalars['String']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  navOptions: Array<NavigationHazardNavOptions>;
};

export type NavigationHazardInput = {
  description: Scalars['String']['input'];
  imgUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  navOptions: Array<NavigationHazardNavOptionsInput>;
};

export type NavigationHazardNavOptions = {
  __typename?: 'NavigationHazardNavOptions';
  action: Scalars['String']['output'];
  imgUrl: Scalars['String']['output'];
  isArrivalOnly: Scalars['Boolean']['output'];
  riskModifier: Scalars['Float']['output'];
  speedModifier: Scalars['Float']['output'];
};

export type NavigationHazardNavOptionsInput = {
  action: Scalars['String']['input'];
  imgUrl: Scalars['String']['input'];
  isArrivalOnly: Scalars['Boolean']['input'];
  riskModifier: Scalars['Float']['input'];
  speedModifier: Scalars['Float']['input'];
};

export type NavigationRoute = {
  __typename?: 'NavigationRoute';
  exitOption: NavigationExitOptions;
  isBorder: Scalars['Boolean']['output'];
  secondaryRouteOptions: Array<SecondaryNavigationRouteOption>;
  speedOption: NavigationSpeedOptions;
  startOption: NavigationStartOptions;
  targetLocationId: Scalars['ID']['output'];
};

export type NavigationRouteInput = {
  exitOption: NavigationExitOptionsInput;
  isBorder: Scalars['Boolean']['input'];
  secondaryRouteOptions: Array<SecondaryNavigationRouteOptionInput>;
  speedOption: NavigationSpeedOptionsInput;
  startOption: NavigationStartOptionsInput;
  targetLocationId: Scalars['ID']['input'];
};

export type NavigationSpeedOptions = {
  __typename?: 'NavigationSpeedOptions';
  id: Scalars['ID']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  requiresMaxEngines: Scalars['Boolean']['output'];
  riskModifier: Scalars['Float']['output'];
  speedModifier: Scalars['Float']['output'];
};

export type NavigationSpeedOptionsInput = {
  id: Scalars['ID']['input'];
  imgUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  requiresMaxEngines: Scalars['Boolean']['input'];
  riskModifier: Scalars['Float']['input'];
  speedModifier: Scalars['Float']['input'];
};

export type NavigationStartOptions = {
  __typename?: 'NavigationStartOptions';
  id: Scalars['ID']['output'];
  imgUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  riskModifier: Scalars['Float']['output'];
  secondsForStartup: Scalars['Float']['output'];
};

export type NavigationStartOptionsInput = {
  id: Scalars['ID']['input'];
  imgUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  riskModifier: Scalars['Float']['input'];
  secondsForStartup: Scalars['Float']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  body?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  relevantCards?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum NotifyColors {
  Danger = 'danger',
  Dark = 'dark',
  Info = 'info',
  Light = 'light',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning'
}

export type Objective = {
  __typename?: 'Objective';
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  crewComplete?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  station?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ObjectiveInput = {
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  crewComplete?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum Ping_Modes {
  Active = 'active',
  Manual = 'manual',
  Passive = 'passive'
}

export enum Pip_Position {
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
  Center = 'center',
  TopLeft = 'topLeft',
  TopRight = 'topRight'
}

export enum Pip_Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export enum Priorities {
  Critical = 'critical',
  Emergency = 'emergency',
  Low = 'low',
  Normal = 'normal'
}

export type PainPoint = {
  __typename?: 'PainPoint';
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type PainPointInput = {
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type PanelCable = {
  __typename?: 'PanelCable';
  color?: Maybe<Scalars['String']['output']>;
  components?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PanelCableInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PanelComponent = {
  __typename?: 'PanelComponent';
  color?: Maybe<Scalars['String']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  scale?: Maybe<Scalars['Float']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type PanelComponentInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  component?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
  x?: InputMaybe<Scalars['Float']['input']>;
  y?: InputMaybe<Scalars['Float']['input']>;
};

export type PanelConnection = {
  __typename?: 'PanelConnection';
  from?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  to?: Maybe<Scalars['ID']['output']>;
};

export type PanelConnectionInput = {
  from?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  to?: InputMaybe<Scalars['ID']['input']>;
};

export enum ParticleTypes {
  Anomaly = 'Anomaly',
  AntiMatter = 'AntiMatter',
  Carbon = 'Carbon',
  Dilithium = 'Dilithium',
  Graviton = 'Graviton',
  Helium = 'Helium',
  Hydrogen = 'Hydrogen',
  Lithium = 'Lithium',
  Magnetic = 'Magnetic',
  Neutrino = 'Neutrino',
  Oxygen = 'Oxygen',
  Radiation = 'Radiation',
  Resonance = 'Resonance',
  Tachyon = 'Tachyon'
}

export type Phaser = SystemInterface & {
  __typename?: 'Phaser';
  arc?: Maybe<Scalars['Float']['output']>;
  beams?: Maybe<Array<Maybe<PhaserBeam>>>;
  chargeSpeed?: Maybe<Scalars['Float']['output']>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  holdToCharge?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type PhaserBeam = {
  __typename?: 'PhaserBeam';
  charge?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  heat?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  power?: Maybe<Power>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PointOfInterest = {
  __typename?: 'PointOfInterest';
  arrivalMacros?: Maybe<Array<MacroAction>>;
  fullImageUrl: Scalars['String']['output'];
  iconUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  information: PointOfInterestInformation;
  isFogOfWar: Scalars['Boolean']['output'];
  isVisible: Scalars['Boolean']['output'];
  leaveMacros?: Maybe<Array<MacroAction>>;
  location: XyLocation;
  name: Scalars['String']['output'];
  riskIndex: Scalars['Float']['output'];
  showName?: Maybe<Scalars['Boolean']['output']>;
  speedIndex: Scalars['Float']['output'];
  transitMacros?: Maybe<Array<MacroAction>>;
  transitOptions?: Maybe<Array<SecondaryStopTransitOption>>;
  type: PointOfInterestType;
};

export type PointOfInterestInformation = {
  __typename?: 'PointOfInterestInformation';
  basicInformation: Scalars['String']['output'];
  detailedInformation: Scalars['String']['output'];
  hasBasicInformation: Scalars['Boolean']['output'];
  hasDetailedInformation: Scalars['Boolean']['output'];
  hasSecretInformation: Scalars['Boolean']['output'];
  secretInformation: Scalars['String']['output'];
};

export type PointOfInterestInformationInput = {
  basicInformation: Scalars['String']['input'];
  detailedInformation: Scalars['String']['input'];
  hasBasicInformation: Scalars['Boolean']['input'];
  hasDetailedInformation: Scalars['Boolean']['input'];
  hasSecretInformation: Scalars['Boolean']['input'];
  secretInformation: Scalars['String']['input'];
};

export type PointOfInterestInput = {
  arrivalMacros?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  fullImageUrl: Scalars['String']['input'];
  iconUrl: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  information: PointOfInterestInformationInput;
  isFogOfWar: Scalars['Boolean']['input'];
  isVisible: Scalars['Boolean']['input'];
  leaveMacros?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  location: LocationInput;
  name: Scalars['String']['input'];
  riskIndex: Scalars['Float']['input'];
  showName?: InputMaybe<Scalars['Boolean']['input']>;
  speedIndex: Scalars['Float']['input'];
  transitMacros?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  transitOptions?: InputMaybe<Array<InputMaybe<SecondaryStopTransitOptionInput>>>;
  type: PointOfInterestTypeInput;
};

export type PointOfInterestObject = {
  __typename?: 'PointOfInterestObject';
  category: Scalars['String']['output'];
  imageUri: Scalars['String']['output'];
};

export type PointOfInterestType = {
  __typename?: 'PointOfInterestType';
  category: Scalars['String']['output'];
  imageUri: Scalars['String']['output'];
};

export type PointOfInterestTypeInput = {
  category: Scalars['String']['input'];
  imageUri: Scalars['String']['input'];
};

export type Power = {
  __typename?: 'Power';
  defaultLevel?: Maybe<Scalars['Int']['output']>;
  power?: Maybe<Scalars['Int']['output']>;
  powerLevels?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type PresetAnswer = {
  __typename?: 'PresetAnswer';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PresetAnswerInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PrintQueue = {
  __typename?: 'PrintQueue';
  asset: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  simulatorId: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
};

export type Probe = {
  __typename?: 'Probe';
  charge?: Maybe<Scalars['Float']['output']>;
  engine?: Maybe<Engine>;
  equipment?: Maybe<Array<Maybe<ProbeEquipment>>>;
  history?: Maybe<Array<Maybe<History>>>;
  id: Scalars['ID']['output'];
  launched?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  navigation?: Maybe<Navigation>;
  phaser?: Maybe<Phaser>;
  query?: Maybe<Scalars['String']['output']>;
  querying?: Maybe<Scalars['Boolean']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['ID']['output']>;
};

export type ProbeAssignment = {
  __typename?: 'ProbeAssignment';
  completed: Scalars['Boolean']['output'];
  currentEta: Scalars['Float']['output'];
  currentLocation: BasicCoordinate;
  data: Array<Scalars['String']['output']>;
  flightPathCoords: Array<BasicCoordinate>;
  hasBeenViewed: Scalars['Boolean']['output'];
  probeId: Scalars['ID']['output'];
  remainingFuelCellCount: Scalars['Float']['output'];
  targetLocationName: Scalars['String']['output'];
  totalEta: Scalars['Float']['output'];
};

export type ProbeAssignmentInput = {
  completed: Scalars['Boolean']['input'];
  currentEta: Scalars['Float']['input'];
  currentLocation: BasicCoordinateInput;
  data: Array<Scalars['String']['input']>;
  flightPathCoords: Array<BasicCoordinateInput>;
  hasBeenViewed: Scalars['Boolean']['input'];
  probeId: Scalars['ID']['input'];
  remainingFuelCellCount: Scalars['Float']['input'];
  targetLocationName: Scalars['String']['input'];
  totalEta: Scalars['Float']['input'];
};

export type ProbeEquipment = {
  __typename?: 'ProbeEquipment';
  availableProbes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  count?: Maybe<Scalars['Int']['output']>;
  damage?: Maybe<Damage>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

export type ProbeEquipmentInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
};

export type ProbeInput = {
  equipment?: InputMaybe<Array<InputMaybe<EquipmentInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  launched?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['ID']['input']>;
};

export type ProbeType = {
  __typename?: 'ProbeType';
  availableEquipment?: Maybe<Array<Maybe<ProbeEquipment>>>;
  count?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

export type ProbeTypeInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
};

export type Probes = SystemInterface & {
  __typename?: 'Probes';
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Array<Maybe<ProbeEquipment>>>;
  id: Scalars['ID']['output'];
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  probes?: Maybe<Array<Maybe<Probe>>>;
  processedData?: Maybe<Scalars['String']['output']>;
  scienceTypes?: Maybe<Array<Maybe<ScienceType>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  torpedo?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<ProbeType>>>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};


export type ProbesProbesArgs = {
  network?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProcessedData = {
  __typename?: 'ProcessedData';
  time: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Quaternion = {
  __typename?: 'Quaternion';
  w: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type QuaternionInput = {
  w: Scalars['Float']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
  z: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  _template?: Maybe<Template>;
  actions?: Maybe<Action>;
  advancedNavAndAstrometric?: Maybe<AdvancedNavigationAndAstrometrics>;
  advancedNavAndAstrometrics?: Maybe<Array<Maybe<AdvancedNavigationAndAstrometrics>>>;
  advancedNavStars?: Maybe<AdvancedNavStarsData>;
  allSystems: Array<Scalars['String']['output']>;
  asset?: Maybe<Asset>;
  assetFolders?: Maybe<Array<Maybe<AssetFolder>>>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  auxTimelines?: Maybe<Array<Maybe<TimelineInstance>>>;
  clients?: Maybe<Array<Maybe<Client>>>;
  commandLine?: Maybe<Array<Maybe<CommandLine>>>;
  commandLineCommands?: Maybe<Array<Maybe<CommandLineCommand>>>;
  computerCore?: Maybe<Array<Maybe<ComputerCore>>>;
  coolant?: Maybe<Array<Maybe<CoolantTank>>>;
  coreFeed?: Maybe<Array<Maybe<CoreFeed>>>;
  coreLayouts?: Maybe<Array<Maybe<CoreLayout>>>;
  countermeasureModuleType: Array<CountermeasureModule>;
  countermeasures?: Maybe<Countermeasures>;
  crew?: Maybe<Array<Maybe<Crew>>>;
  crewCount?: Maybe<Scalars['Int']['output']>;
  crm?: Maybe<Crm>;
  crmFighter?: Maybe<CrmFighter>;
  damagePositions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  decks?: Maybe<Array<Maybe<Deck>>>;
  dmxConfig?: Maybe<DmxConfig>;
  dmxConfigs: Array<DmxConfig>;
  dmxDevices: Array<DmxDevice>;
  dmxFixtures: Array<DmxFixture>;
  dmxSets: Array<DmxSet>;
  docking?: Maybe<Array<Maybe<DockingPort>>>;
  engine?: Maybe<Engine>;
  engines?: Maybe<Array<Maybe<Engine>>>;
  entities: Array<Maybe<Entity>>;
  entity?: Maybe<Entity>;
  events?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  exocompParts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  exocomps?: Maybe<Array<Maybe<Exocomp>>>;
  externals?: Maybe<Externals>;
  flights: Array<Flight>;
  getAllFlightSets: Array<Maybe<FlightSet>>;
  getCurrentFirebaseSelections?: Maybe<FbCurrentSelections>;
  getFirebaseAwards?: Maybe<Array<FbAwards>>;
  getFirebaseEventId?: Maybe<Scalars['ID']['output']>;
  getFirebaseLogoSrc?: Maybe<Scalars['String']['output']>;
  getFirebasePageText?: Maybe<FbPageText>;
  getFirebaseSimulators?: Maybe<Array<FbFullSimulator>>;
  getFirebaseUser?: Maybe<Scalars['Boolean']['output']>;
  getFirebaseWebsiteQRCode?: Maybe<Scalars['String']['output']>;
  getFlightSet?: Maybe<FlightSet>;
  googleSheets?: Maybe<Scalars['String']['output']>;
  googleSheetsGetSpreadsheet?: Maybe<GoogleSpreadsheet>;
  hackingPresets: Array<HackingPreset>;
  hasFirebaseConnection: Scalars['Boolean']['output'];
  hullPlating?: Maybe<HullPlating>;
  hullPlatings?: Maybe<Array<Maybe<HullPlating>>>;
  interfaceDevices?: Maybe<Array<Maybe<InterfaceDevice>>>;
  interfaces?: Maybe<Array<Maybe<Interface>>>;
  internalComm?: Maybe<Array<Maybe<InternalComm>>>;
  inventory?: Maybe<Array<Maybe<InventoryItem>>>;
  isochips?: Maybe<Array<Maybe<Isochip>>>;
  jumpDrive?: Maybe<Array<Maybe<JumpDrive>>>;
  keyboard?: Maybe<Array<Maybe<Keyboard>>>;
  keypad?: Maybe<Keypad>;
  keypads?: Maybe<Array<Maybe<Keypad>>>;
  libraryEntries?: Maybe<Array<Maybe<LibraryEntry>>>;
  longRangeCommunications?: Maybe<Array<Maybe<LrCommunications>>>;
  macroButtons?: Maybe<Array<Maybe<MacroButtonConfig>>>;
  macros?: Maybe<Array<Maybe<Macro>>>;
  messages?: Maybe<Array<Maybe<Message>>>;
  midiSets?: Maybe<Array<Maybe<MidiSet>>>;
  missions: Array<Mission>;
  motu?: Maybe<Motu>;
  motuChannel?: Maybe<MotuChannel>;
  motuSend?: Maybe<MotuPatch>;
  motus?: Maybe<Array<Maybe<Motu>>>;
  navigate?: Maybe<Navigation>;
  navigation?: Maybe<Array<Maybe<Navigation>>>;
  objective?: Maybe<Array<Maybe<Objective>>>;
  officerLogs?: Maybe<Array<Maybe<Log>>>;
  oneComputerCore?: Maybe<ComputerCore>;
  phaser?: Maybe<Phaser>;
  phasers?: Maybe<Array<Maybe<Phaser>>>;
  probe?: Maybe<Probes>;
  probeEquipment: Array<ProbeEquipment>;
  probes: Array<Probes>;
  railgun?: Maybe<Array<Maybe<Railgun>>>;
  reactor?: Maybe<Reactor>;
  reactors?: Maybe<Array<Maybe<Reactor>>>;
  recordSnippets?: Maybe<Array<Maybe<RecordSnippet>>>;
  recordTemplates?: Maybe<Array<Maybe<RecordSnippet>>>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  scanner?: Maybe<Scanner>;
  scanners?: Maybe<Array<Maybe<Scanner>>>;
  sensor?: Maybe<Sensors>;
  sensorContacts?: Maybe<Array<Maybe<SensorContact>>>;
  sensors: Array<Sensors>;
  sets?: Maybe<Array<Maybe<Set>>>;
  shields?: Maybe<Array<Maybe<Shield>>>;
  shipLogs?: Maybe<Array<Maybe<Log>>>;
  shortRangeComm?: Maybe<Array<Maybe<ShortRangeComm>>>;
  sickbay?: Maybe<Array<Maybe<Sickbay>>>;
  sickbaySingle?: Maybe<Sickbay>;
  signalJammers?: Maybe<Array<Maybe<SignalJammer>>>;
  simulators: Array<Simulator>;
  softwarePanels?: Maybe<Array<Maybe<SoftwarePanel>>>;
  station?: Maybe<Station>;
  stations?: Maybe<Array<Maybe<StationSet>>>;
  stealth?: Maybe<StealthField>;
  stealthField?: Maybe<Array<Maybe<StealthField>>>;
  subspaceField?: Maybe<Array<Maybe<SubspaceField>>>;
  surveyform?: Maybe<Array<Maybe<SurveyForm>>>;
  symptoms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  system?: Maybe<System>;
  systemCoolant?: Maybe<Array<Maybe<SystemCoolant>>>;
  systems?: Maybe<Array<Maybe<System>>>;
  tacticalMap?: Maybe<TacticalMap>;
  tacticalMaps?: Maybe<Array<Maybe<TacticalMap>>>;
  targeting?: Maybe<Array<Maybe<Targeting>>>;
  taskDefinitions: Array<TaskDefinition>;
  taskFlows: Array<TaskFlow>;
  taskInstructions?: Maybe<Scalars['String']['output']>;
  taskReport?: Maybe<Array<Maybe<TaskReport>>>;
  taskTemplates: Array<TaskTemplate>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
  thorium?: Maybe<Thorium>;
  thruster?: Maybe<Thruster>;
  thrusters?: Maybe<Array<Maybe<Thruster>>>;
  thx?: Maybe<Array<Maybe<Thx>>>;
  torpedo?: Maybe<Torpedo>;
  torpedos?: Maybe<Array<Maybe<Torpedo>>>;
  tractorBeam?: Maybe<Array<Maybe<TractorBeam>>>;
  transporters?: Maybe<Array<Maybe<Transporter>>>;
  transwarp?: Maybe<Array<Maybe<Transwarp>>>;
  triggers?: Maybe<Array<Maybe<Trigger>>>;
  viewscreens?: Maybe<Array<Maybe<Viewscreen>>>;
};


export type Query_TemplateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryActionsArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  stationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAdvancedNavAndAstrometricArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdvancedNavAndAstrometricsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryAdvancedNavStarsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryAssetArgs = {
  assetKey: Scalars['String']['input'];
};


export type QueryAssetFoldersArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAssetsArgs = {
  assetKeys: Array<Scalars['String']['input']>;
};


export type QueryAuxTimelinesArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryClientsArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  flightId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  stationName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCommandLineArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommandLineCommandsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryComputerCoreArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCoolantArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryCoreFeedArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCoreLayoutsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountermeasuresArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryCrewArgs = {
  killed?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCrewCountArgs = {
  killed?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type QueryCrmArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCrmFighterArgs = {
  clientId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type QueryDecksArgs = {
  number?: InputMaybe<Scalars['Int']['input']>;
  simulatorId: Scalars['ID']['input'];
};


export type QueryDmxConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDmxFixturesArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDockingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Docking_Types>;
};


export type QueryEngineArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEnginesArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEntitiesArgs = {
  flightId: Scalars['ID']['input'];
  inert?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExocompsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFlightsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetFirebaseUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFlightSetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGoogleSheetsGetSpreadsheetArgs = {
  spreadsheetId: Scalars['ID']['input'];
};


export type QueryHullPlatingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHullPlatingsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryInterfacesArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInternalCommArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryInventoryArgs = {
  deck?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIsochipsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJumpDriveArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryKeypadArgs = {
  client: Scalars['ID']['input'];
};


export type QueryKeypadsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryLibraryEntriesArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLongRangeCommunicationsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMessagesArgs = {
  group?: InputMaybe<Scalars['ID']['input']>;
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMidiSetsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMissionsArgs = {
  aux?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMotuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMotuChannelArgs = {
  channelId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type QueryMotuSendArgs = {
  id: Scalars['ID']['input'];
  inputId: Scalars['ID']['input'];
  outputId: Scalars['ID']['input'];
};


export type QueryNavigateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNavigationArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryObjectiveArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOfficerLogsArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  flightId: Scalars['ID']['input'];
};


export type QueryOneComputerCoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhaserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhasersArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProbeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProbesArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryRailgunArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReactorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReactorsArgs = {
  model?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRecordSnippetsArgs = {
  simulatorId: Scalars['ID']['input'];
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoomsArgs = {
  deck?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<RoomRoles>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryScannerArgs = {
  client: Scalars['ID']['input'];
};


export type QueryScannersArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QuerySensorArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySensorContactsArgs = {
  hostile?: InputMaybe<Scalars['Boolean']['input']>;
  sensorsId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySensorsArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShieldsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShipLogsArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QueryShortRangeCommArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QuerySickbayArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySickbaySingleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySignalJammersArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type QuerySimulatorsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  template?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySoftwarePanelsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStationArgs = {
  simulatorId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
};


export type QueryStealthArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStealthFieldArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubspaceFieldArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySurveyformArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySystemArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySystemCoolantArgs = {
  simulatorId: Scalars['ID']['input'];
  systemId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySystemsArgs = {
  damageWhich?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['Boolean']['input']>;
  heat?: InputMaybe<Scalars['Boolean']['input']>;
  power?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTacticalMapArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTacticalMapsArgs = {
  flightId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTargetingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTaskDefinitionsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTaskFlowsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTaskInstructionsArgs = {
  definition: Scalars['String']['input'];
  requiredValues: Scalars['JSON']['input'];
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  task?: InputMaybe<TaskInput>;
};


export type QueryTaskReportArgs = {
  cleared?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTasksArgs = {
  definitions?: InputMaybe<Array<Scalars['String']['input']>>;
  isCore?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamsArgs = {
  cleared?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThrusterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThrustersArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryThxArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTorpedoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTorpedosArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTractorBeamArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransportersArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTranswarpArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTriggersArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryViewscreensArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};

export enum Reactor_Models {
  Battery = 'battery',
  Reactor = 'reactor'
}

export type Railgun = SystemInterface & {
  __typename?: 'Railgun';
  ammo?: Maybe<Scalars['Int']['output']>;
  availableAmmo?: Maybe<Scalars['Int']['output']>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  maxAmmo?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type RangeInput = {
  lower?: InputMaybe<Scalars['Float']['input']>;
  upper?: InputMaybe<Scalars['Float']['input']>;
};

export type Reactor = SystemInterface & {
  __typename?: 'Reactor';
  alphaLevel?: Maybe<Scalars['Float']['output']>;
  alphaTarget?: Maybe<Scalars['Float']['output']>;
  batteryChargeLevel?: Maybe<Scalars['Float']['output']>;
  batteryChargeRate?: Maybe<Scalars['Float']['output']>;
  betaLevel?: Maybe<Scalars['Float']['output']>;
  betaTarget?: Maybe<Scalars['Float']['output']>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  depletion?: Maybe<Scalars['Float']['output']>;
  dilithiumRate?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  efficiencies?: Maybe<Array<ReactorEfficiency>>;
  efficiency?: Maybe<Scalars['Float']['output']>;
  ejected?: Maybe<Scalars['Boolean']['output']>;
  externalPower?: Maybe<Scalars['Boolean']['output']>;
  hasWings?: Maybe<Scalars['Boolean']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  heatRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  leftWingPower?: Maybe<Scalars['Int']['output']>;
  leftWingRequest?: Maybe<Scalars['Int']['output']>;
  leftWingRequested?: Maybe<Scalars['Boolean']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  model?: Maybe<Reactor_Models>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  powerOutput?: Maybe<Scalars['Int']['output']>;
  requireBalance?: Maybe<Scalars['Boolean']['output']>;
  rightWingPower?: Maybe<Scalars['Int']['output']>;
  rightWingRequest?: Maybe<Scalars['Int']['output']>;
  rightWingRequested?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type ReactorEfficiency = {
  __typename?: 'ReactorEfficiency';
  color: Scalars['String']['output'];
  efficiency?: Maybe<Scalars['Float']['output']>;
  label: Scalars['String']['output'];
};

export type ReactorEfficiencyInput = {
  color: Scalars['String']['input'];
  efficiency: Scalars['Float']['input'];
  label: Scalars['String']['input'];
};

export type RecordEntry = {
  __typename?: 'RecordEntry';
  category?: Maybe<Scalars['String']['output']>;
  contents?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  modified?: Maybe<Scalars['Boolean']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type RecordSnippet = {
  __typename?: 'RecordSnippet';
  id?: Maybe<Scalars['ID']['output']>;
  launched?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  records?: Maybe<Array<Maybe<RecordEntry>>>;
  sensorContactId?: Maybe<Scalars['ID']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  templateRecords?: Maybe<Array<Maybe<RecordEntry>>>;
  type?: Maybe<RecordSnippetType>;
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export enum RecordSnippetType {
  Buoy = 'buoy',
  External = 'external',
  Normal = 'normal'
}

export type RemoteAccessCode = {
  __typename?: 'RemoteAccessCode';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  station?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type RemoteAsset = {
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RequirementInput = {
  cards?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  systems?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Room = {
  __typename?: 'Room';
  deck?: Maybe<Deck>;
  gas?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inventory?: Maybe<Array<Maybe<InventoryItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<RoomRoles>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  svgPath?: Maybe<Scalars['String']['output']>;
  systems?: Maybe<Array<Maybe<System>>>;
};

export type RoomCount = {
  __typename?: 'RoomCount';
  count?: Maybe<Scalars['Int']['output']>;
  room?: Maybe<Room>;
};

export type RoomCountInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
};

export type RoomInput = {
  deck?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoomRoles>>>;
};

export enum RoomRoles {
  DamageTeam = 'damageTeam',
  MedicalTeam = 'medicalTeam',
  Probe = 'probe',
  SecurityTeam = 'securityTeam',
  Torpedo = 'torpedo'
}

export type Rotation = {
  __typename?: 'Rotation';
  pitch?: Maybe<Scalars['Float']['output']>;
  roll?: Maybe<Scalars['Float']['output']>;
  yaw?: Maybe<Scalars['Float']['output']>;
};

export type RotationInput = {
  pitch?: InputMaybe<Scalars['Float']['input']>;
  roll?: InputMaybe<Scalars['Float']['input']>;
  yaw?: InputMaybe<Scalars['Float']['input']>;
};

export enum Science_Burst_Detector {
  Burst = 'burst',
  Detector = 'detector'
}

export type Scanner = {
  __typename?: 'Scanner';
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  scanRequest?: Maybe<Scalars['String']['output']>;
  scanResults?: Maybe<Scalars['String']['output']>;
  scanning?: Maybe<Scalars['Boolean']['output']>;
};

export type ScienceProbeEvent = {
  __typename?: 'ScienceProbeEvent';
  charge: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  simulatorId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type ScienceType = {
  __typename?: 'ScienceType';
  description?: Maybe<Scalars['String']['output']>;
  equipment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Science_Burst_Detector>;
};

export type SecondaryNavigationRouteOption = {
  __typename?: 'SecondaryNavigationRouteOption';
  targetLocationId: Scalars['ID']['output'];
};

export type SecondaryNavigationRouteOptionInput = {
  targetLocationId: Scalars['ID']['input'];
};

export type SecondaryStopTransitOption = {
  __typename?: 'SecondaryStopTransitOption';
  iconUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  riskModifier: Scalars['Float']['output'];
  timeModifier: Scalars['Float']['output'];
};

export type SecondaryStopTransitOptionInput = {
  iconUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  riskModifier: Scalars['Float']['input'];
  timeModifier: Scalars['Float']['input'];
};

export type SensorContact = {
  __typename?: 'SensorContact';
  autoFire?: Maybe<Scalars['Boolean']['output']>;
  cloaked?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  destination?: Maybe<Coordinates>;
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  disabled?: Maybe<Scalars['Boolean']['output']>;
  endTime?: Maybe<Scalars['Float']['output']>;
  forceUpdate?: Maybe<Scalars['Boolean']['output']>;
  hitpoints?: Maybe<Scalars['Int']['output']>;
  hostile?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  infrared?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Coordinates>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  movementTime?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  particle?: Maybe<ParticleTypes>;
  picture?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Coordinates>;
  rotation?: Maybe<Scalars['Float']['output']>;
  selected?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  startTime?: Maybe<Scalars['Float']['output']>;
  targeted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SensorContactInput = {
  autoFire?: InputMaybe<Scalars['Boolean']['input']>;
  cloaked?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  destination?: InputMaybe<CoordinatesInput>;
  destroyed?: InputMaybe<Scalars['Boolean']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  hitpoints?: InputMaybe<Scalars['Int']['input']>;
  hostile?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  infrared?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<CoordinatesInput>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  particle?: InputMaybe<ParticleTypes>;
  picture?: InputMaybe<Scalars['String']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  sensorId?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  speed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SensorScan = {
  __typename?: 'SensorScan';
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  request?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['String']['output']>;
  scanning?: Maybe<Scalars['Boolean']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type SensorScanInput = {
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  request?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  scanning?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type Sensors = SystemInterface & {
  __typename?: 'Sensors';
  armyContacts?: Maybe<Array<Maybe<SensorContact>>>;
  autoTarget?: Maybe<Scalars['Boolean']['output']>;
  autoThrusters?: Maybe<Scalars['Boolean']['output']>;
  contacts?: Maybe<Array<Maybe<SensorContact>>>;
  damage?: Maybe<Damage>;
  defaultHitpoints?: Maybe<Scalars['Int']['output']>;
  defaultSpeed?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  domain: Scalars['String']['output'];
  frozen?: Maybe<Scalars['Boolean']['output']>;
  history?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  interference?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  missPercent?: Maybe<Scalars['Float']['output']>;
  movement?: Maybe<Coordinates>;
  name?: Maybe<Scalars['String']['output']>;
  pingMode?: Maybe<Ping_Modes>;
  pings?: Maybe<Scalars['Boolean']['output']>;
  power?: Maybe<Power>;
  presetAnswers?: Maybe<Array<Maybe<PresetAnswer>>>;
  processedData?: Maybe<Array<ProcessedData>>;
  scanRequest?: Maybe<Scalars['String']['output']>;
  scanResults?: Maybe<Scalars['String']['output']>;
  scanning?: Maybe<Scalars['Boolean']['output']>;
  scans?: Maybe<Array<Maybe<SensorScan>>>;
  segments?: Maybe<Array<Maybe<SensorsSegment>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  timeSincePing?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type SensorsSegment = {
  __typename?: 'SensorsSegment';
  line?: Maybe<Scalars['Int']['output']>;
  ring?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['Boolean']['output']>;
};

export type Set = {
  __typename?: 'Set';
  clients: Array<SetClient>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SetClient = {
  __typename?: 'SetClient';
  client?: Maybe<Client>;
  id?: Maybe<Scalars['ID']['output']>;
  secondary?: Maybe<Scalars['Boolean']['output']>;
  simulator?: Maybe<Simulator>;
  soundPlayer?: Maybe<Scalars['Boolean']['output']>;
  station?: Maybe<Scalars['String']['output']>;
  stationSet?: Maybe<StationSet>;
};

export type SetClientInput = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  soundPlayer?: InputMaybe<Scalars['Boolean']['input']>;
  station?: InputMaybe<Scalars['ID']['input']>;
  stationSet?: InputMaybe<Scalars['ID']['input']>;
};

export type Shield = SystemInterface & {
  __typename?: 'Shield';
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['Float']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  integrity?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['Boolean']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type Ship = {
  __typename?: 'Ship';
  airlock?: Maybe<Scalars['Boolean']['output']>;
  bridgeCrew?: Maybe<Scalars['Int']['output']>;
  clamps?: Maybe<Scalars['Boolean']['output']>;
  extraPeople?: Maybe<Scalars['Int']['output']>;
  helium?: Maybe<Scalars['Float']['output']>;
  heliumRate?: Maybe<Scalars['Float']['output']>;
  inventoryLogs?: Maybe<Array<Maybe<InventoryLog>>>;
  legs?: Maybe<Scalars['Boolean']['output']>;
  radiation?: Maybe<Scalars['Float']['output']>;
  ramps?: Maybe<Scalars['Boolean']['output']>;
  remoteAccessCodes?: Maybe<Array<Maybe<RemoteAccessCode>>>;
  selfDestructAuto?: Maybe<Scalars['Boolean']['output']>;
  selfDestructCode?: Maybe<Scalars['String']['output']>;
  selfDestructTime?: Maybe<Scalars['Float']['output']>;
  showHelium?: Maybe<Scalars['Float']['output']>;
  velocity?: Maybe<Scalars['Float']['output']>;
};

export type ShortRangeComm = SystemInterface & {
  __typename?: 'ShortRangeComm';
  amplitude?: Maybe<Scalars['Float']['output']>;
  arrows?: Maybe<Array<Maybe<CommArrow>>>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['Float']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  signals?: Maybe<Array<Maybe<CommSignal>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type ShortRangeCommExtended = {
  __typename?: 'ShortRangeCommExtended';
  amplitude?: Maybe<Scalars['Float']['output']>;
  arrows?: Maybe<Array<Maybe<CommArrow>>>;
  damage?: Maybe<Damage>;
  frequency?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  signals?: Maybe<Array<Maybe<CommSignal>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ShownCoordinate = {
  __typename?: 'ShownCoordinate';
  name: Scalars['String']['output'];
  showName?: Maybe<Scalars['Boolean']['output']>;
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type ShownCoordinateInput = {
  name: Scalars['String']['input'];
  showName?: InputMaybe<Scalars['Boolean']['input']>;
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type Sickbay = SystemInterface & {
  __typename?: 'Sickbay';
  autoFinishDecon?: Maybe<Scalars['Boolean']['output']>;
  bunks?: Maybe<Array<Maybe<SickbayBunk>>>;
  damage?: Maybe<Damage>;
  deconActive?: Maybe<Scalars['Boolean']['output']>;
  deconLocation?: Maybe<Scalars['String']['output']>;
  deconOffset?: Maybe<Scalars['Float']['output']>;
  deconProgram?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  sickbayRoster?: Maybe<Array<Maybe<Crew>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type SickbayBunk = {
  __typename?: 'SickbayBunk';
  id?: Maybe<Scalars['ID']['output']>;
  patient?: Maybe<Crew>;
  scanRequest?: Maybe<Scalars['String']['output']>;
  scanResults?: Maybe<Scalars['String']['output']>;
  scanning?: Maybe<Scalars['Boolean']['output']>;
  sickbayId?: Maybe<Scalars['ID']['output']>;
};

export type Signal = {
  __typename?: 'Signal';
  id?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  power?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SignalJammer = SystemInterface & {
  __typename?: 'SignalJammer';
  active?: Maybe<Scalars['Boolean']['output']>;
  addsSensorsInterference?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  signals?: Maybe<Array<Maybe<Signal>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  strength?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type SignalJammerInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Scalars['Float']['input']>;
  strength?: InputMaybe<Scalars['Float']['input']>;
};

export type Simulator = {
  __typename?: 'Simulator';
  alertLevelLock?: Maybe<Scalars['Boolean']['output']>;
  alertlevel?: Maybe<Scalars['String']['output']>;
  ambiance?: Maybe<Array<Ambiance>>;
  assets?: Maybe<SimulatorAssets>;
  bridgeOfficerMessaging?: Maybe<Scalars['Boolean']['output']>;
  capabilities?: Maybe<SimulatorCapabilities>;
  caps?: Maybe<Scalars['Boolean']['output']>;
  commandLines?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  currentTimelineStep?: Maybe<Scalars['Int']['output']>;
  damageTasks?: Maybe<Array<Maybe<DamageTask>>>;
  decks?: Maybe<Array<Maybe<Deck>>>;
  documents?: Maybe<Array<Document>>;
  executedTimelineSteps?: Maybe<Array<Scalars['ID']['output']>>;
  exocomps?: Maybe<Scalars['Int']['output']>;
  flipped?: Maybe<Scalars['Boolean']['output']>;
  hasLegs?: Maybe<Scalars['Boolean']['output']>;
  hasPrinter?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  interfaces?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  layout?: Maybe<Scalars['String']['output']>;
  lighting?: Maybe<Lighting>;
  midiSets?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  mission?: Maybe<Mission>;
  missionConfigs?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  optionalDamageSteps?: Maybe<Array<Maybe<DamageStep>>>;
  panels?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  requiredDamageSteps?: Maybe<Array<Maybe<DamageStep>>>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  ship?: Maybe<Ship>;
  soundEffects?: Maybe<Scalars['JSON']['output']>;
  spaceEdventuresId?: Maybe<Scalars['String']['output']>;
  stationSet?: Maybe<StationSet>;
  stationSets?: Maybe<Array<Maybe<StationSet>>>;
  stations?: Maybe<Array<Station>>;
  stepDamage?: Maybe<Scalars['Boolean']['output']>;
  systems?: Maybe<Array<System>>;
  template?: Maybe<Scalars['Boolean']['output']>;
  templateId?: Maybe<Scalars['ID']['output']>;
  timelines?: Maybe<Array<TimelineInstance>>;
  training?: Maybe<Scalars['Boolean']['output']>;
  triggers?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  triggersPaused?: Maybe<Scalars['Boolean']['output']>;
  verifyStep?: Maybe<Scalars['Boolean']['output']>;
};

export type SimulatorAssets = {
  __typename?: 'SimulatorAssets';
  bridge?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  mesh?: Maybe<Scalars['String']['output']>;
  side?: Maybe<Scalars['String']['output']>;
  texture?: Maybe<Scalars['String']['output']>;
  top?: Maybe<Scalars['String']['output']>;
};

export type SimulatorAssetsInput = {
  bridge?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mesh?: InputMaybe<Scalars['String']['input']>;
  side?: InputMaybe<Scalars['String']['input']>;
  texture?: InputMaybe<Scalars['String']['input']>;
  top?: InputMaybe<Scalars['String']['input']>;
};

export type SimulatorCapabilities = {
  __typename?: 'SimulatorCapabilities';
  cards: Array<Scalars['String']['output']>;
  docking?: Maybe<Scalars['Boolean']['output']>;
  spaceEdventures?: Maybe<Scalars['Boolean']['output']>;
  systems: Array<Scalars['String']['output']>;
};

export type SimulatorInput = {
  missionId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId: Scalars['ID']['input'];
  stationSet: Scalars['ID']['input'];
};

export type SoftwarePanel = {
  __typename?: 'SoftwarePanel';
  cables?: Maybe<Array<Maybe<PanelCable>>>;
  components?: Maybe<Array<Maybe<PanelComponent>>>;
  connections?: Maybe<Array<Maybe<PanelConnection>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SoftwarePanelInput = {
  cables?: InputMaybe<Array<InputMaybe<PanelCableInput>>>;
  components?: InputMaybe<Array<InputMaybe<PanelComponentInput>>>;
  connections?: InputMaybe<Array<InputMaybe<PanelConnectionInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Sound = {
  __typename?: 'Sound';
  asset?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  clients?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  looping?: Maybe<Scalars['Boolean']['output']>;
  playbackRate?: Maybe<Scalars['Float']['output']>;
  preserveChannels?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};

export type SoundInput = {
  asset?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  clients?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  looping?: InputMaybe<Scalars['Boolean']['input']>;
  playbackRate?: InputMaybe<Scalars['Float']['input']>;
  preserveChannels?: InputMaybe<Scalars['Boolean']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};

export type SpaceEdventuresCenter = {
  __typename?: 'SpaceEdventuresCenter';
  badges?: Maybe<Array<Maybe<NamedObject>>>;
  flightTypes?: Maybe<Array<Maybe<FlightType>>>;
  id?: Maybe<Scalars['ID']['output']>;
  missions?: Maybe<Array<Maybe<NamedObject>>>;
  name?: Maybe<Scalars['String']['output']>;
  simulators?: Maybe<Array<Maybe<NamedObject>>>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SpaceEdventuresClient = {
  __typename?: 'SpaceEdventuresClient';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Speed = {
  __typename?: 'Speed';
  number?: Maybe<Scalars['Float']['output']>;
  optimal?: Maybe<Scalars['Boolean']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  velocity?: Maybe<Scalars['Float']['output']>;
};

export type SpeedInput = {
  number?: InputMaybe<Scalars['Float']['input']>;
  optimal?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  velocity?: InputMaybe<Scalars['Float']['input']>;
};

export type StageChildComponent = {
  __typename?: 'StageChildComponent';
  parent?: Maybe<Entity>;
  parentId: Scalars['ID']['output'];
};

export type StageComponent = {
  __typename?: 'StageComponent';
  childrenAsSprites?: Maybe<Scalars['Boolean']['output']>;
  scaleLabel?: Maybe<Scalars['String']['output']>;
  scaleLabelShort?: Maybe<Scalars['String']['output']>;
  skyboxKey?: Maybe<Scalars['String']['output']>;
};

export type Station = {
  __typename?: 'Station';
  ambiance?: Maybe<Scalars['String']['output']>;
  cards?: Maybe<Array<Card>>;
  description?: Maybe<Scalars['String']['output']>;
  executive?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['Boolean']['output']>;
  messageGroups?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  training?: Maybe<Scalars['String']['output']>;
  widgets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type StationCardsArgs = {
  showHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StationSet = {
  __typename?: 'StationSet';
  crewCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  simulator?: Maybe<Simulator>;
  stations: Array<Station>;
};

export type StealthField = SystemInterface & {
  __typename?: 'StealthField';
  activated?: Maybe<Scalars['Boolean']['output']>;
  changeAlert?: Maybe<Scalars['Boolean']['output']>;
  charge?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  quadrants?: Maybe<StealthQuad>;
  sensorsSonar?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['Boolean']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type StealthQuad = {
  __typename?: 'StealthQuad';
  aft?: Maybe<Scalars['Float']['output']>;
  fore?: Maybe<Scalars['Float']['output']>;
  port?: Maybe<Scalars['Float']['output']>;
  starboard?: Maybe<Scalars['Float']['output']>;
};

export type StringCoordinates = {
  __typename?: 'StringCoordinates';
  x?: Maybe<Scalars['String']['output']>;
  y?: Maybe<Scalars['String']['output']>;
  z?: Maybe<Scalars['String']['output']>;
};

export type StringCoordinatesInput = {
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  z?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
  _templateUpdate?: Maybe<Template>;
  actionsUpdate?: Maybe<Action>;
  advancedNavAndAstrometricsUpdate: Array<AdvancedNavigationAndAstrometrics>;
  advancedNavStarsUpdate: AdvancedNavStarsData;
  assetFolderChange: Array<AssetFolder>;
  auxTimelinesUpdate?: Maybe<Array<Maybe<TimelineInstance>>>;
  cancelAllSounds?: Maybe<Scalars['Boolean']['output']>;
  cancelLoopingSounds?: Maybe<Scalars['Boolean']['output']>;
  cancelSound?: Maybe<Scalars['ID']['output']>;
  clearCache?: Maybe<Scalars['Boolean']['output']>;
  clientChanged?: Maybe<Array<Maybe<Client>>>;
  clientPing?: Maybe<Scalars['Boolean']['output']>;
  clockSync?: Maybe<Scalars['String']['output']>;
  commandLineOutputUpdate?: Maybe<Scalars['String']['output']>;
  commandLineUpdate?: Maybe<Array<Maybe<CommandLine>>>;
  commandLinesOutputUpdate?: Maybe<Array<Maybe<Client>>>;
  computerCoreUpdate?: Maybe<Array<Maybe<ComputerCore>>>;
  coolantSystemUpdate?: Maybe<Array<Maybe<SystemCoolant>>>;
  coolantUpdate?: Maybe<Array<Maybe<CoolantTank>>>;
  coreFeedUpdate?: Maybe<Array<Maybe<CoreFeed>>>;
  coreLayoutChange?: Maybe<Array<Maybe<CoreLayout>>>;
  countermeasuresUpdate?: Maybe<Countermeasures>;
  crewCountUpdate?: Maybe<Scalars['Int']['output']>;
  crewUpdate?: Maybe<Array<Maybe<Crew>>>;
  crmFighterUpdate?: Maybe<CrmFighter>;
  crmMovementUpdate?: Maybe<Crm>;
  crmUpdate?: Maybe<Crm>;
  decksUpdate?: Maybe<Array<Maybe<Deck>>>;
  dmxConfigs: Array<DmxConfig>;
  dmxDevices: Array<DmxDevice>;
  dmxFixtures: Array<DmxFixture>;
  dmxSets: Array<DmxSet>;
  dockingUpdate?: Maybe<Array<Maybe<DockingPort>>>;
  engineUpdate?: Maybe<Engine>;
  entities?: Maybe<Array<Maybe<Entity>>>;
  entity?: Maybe<Entity>;
  events?: Maybe<Scalars['JSON']['output']>;
  exocompsUpdate?: Maybe<Array<Maybe<Exocomp>>>;
  firebaseCurrentSelectionsUpdate?: Maybe<FbCurrentSelections>;
  flightsUpdate?: Maybe<Array<Maybe<Flight>>>;
  googleSheetsUpdate?: Maybe<Array<Maybe<GoogleSheets>>>;
  heatChange?: Maybe<Engine>;
  hullPlatingUpdate: Array<HullPlating>;
  interfaceUpdate?: Maybe<Array<Maybe<Interface>>>;
  internalCommUpdate?: Maybe<Array<Maybe<InternalComm>>>;
  inventoryUpdate?: Maybe<Array<Maybe<InventoryItem>>>;
  isochipsUpdate?: Maybe<Array<Maybe<Isochip>>>;
  jumpDriveUpdate?: Maybe<Array<Maybe<JumpDrive>>>;
  keyboardUpdate?: Maybe<Array<Maybe<Keyboard>>>;
  keypadUpdate?: Maybe<Keypad>;
  keypadsUpdate?: Maybe<Array<Maybe<Keypad>>>;
  libraryEntriesUpdate?: Maybe<Array<Maybe<LibraryEntry>>>;
  longRangeCommunicationsUpdate?: Maybe<Array<Maybe<LrCommunications>>>;
  macroButtonsUpdate?: Maybe<Array<Maybe<MacroButtonConfig>>>;
  macrosUpdate?: Maybe<Array<Maybe<Macro>>>;
  messageUpdates?: Maybe<Array<Maybe<Message>>>;
  midiSets?: Maybe<Array<Maybe<MidiSet>>>;
  missionsUpdate: Array<Mission>;
  motu?: Maybe<Motu>;
  motuChannel?: Maybe<MotuChannel>;
  motuSend?: Maybe<MotuPatch>;
  motus?: Maybe<Array<Maybe<Motu>>>;
  navigationUpdate?: Maybe<Array<Maybe<Navigation>>>;
  notify?: Maybe<Notification>;
  objectiveUpdate?: Maybe<Array<Maybe<Objective>>>;
  officerLogsUpdate?: Maybe<Array<Maybe<Log>>>;
  phasersUpdate?: Maybe<Array<Maybe<Phaser>>>;
  printQueue?: Maybe<Array<Maybe<PrintQueue>>>;
  probesUpdate: Array<Probes>;
  railgunUpdate?: Maybe<Array<Maybe<Railgun>>>;
  reactorUpdate: Array<Reactor>;
  recordSnippetsUpdate?: Maybe<Array<Maybe<RecordSnippet>>>;
  recordTemplatesUpdate?: Maybe<Array<Maybe<RecordSnippet>>>;
  roomsUpdate?: Maybe<Array<Maybe<Room>>>;
  rotationChange?: Maybe<Thruster>;
  scannerUpdate?: Maybe<Scanner>;
  scannersUpdate?: Maybe<Array<Maybe<Scanner>>>;
  scienceProbeEmitter?: Maybe<ScienceProbeEvent>;
  sendMessage?: Maybe<Message>;
  sensorContactUpdate: Array<SensorContact>;
  sensorsPing?: Maybe<Scalars['String']['output']>;
  sensorsUpdate: Array<Sensors>;
  setsUpdate?: Maybe<Array<Maybe<Set>>>;
  shieldsUpdate?: Maybe<Array<Maybe<Shield>>>;
  shipLogsUpdate?: Maybe<Array<Maybe<Log>>>;
  shortRangeCommUpdate?: Maybe<Array<Maybe<ShortRangeComm>>>;
  sickbayUpdate?: Maybe<Array<Maybe<Sickbay>>>;
  signalJammersUpdate?: Maybe<Array<Maybe<SignalJammer>>>;
  simulatorsUpdate?: Maybe<Array<Maybe<Simulator>>>;
  softwarePanelsUpdate?: Maybe<Array<Maybe<SoftwarePanel>>>;
  soundSub?: Maybe<Sound>;
  speedChange?: Maybe<Engine>;
  stationSetUpdate?: Maybe<Array<Maybe<StationSet>>>;
  stealthFieldUpdate?: Maybe<Array<Maybe<StealthField>>>;
  subspaceFieldUpdate?: Maybe<Array<Maybe<SubspaceField>>>;
  surveyformUpdate?: Maybe<Array<Maybe<SurveyForm>>>;
  syncTime?: Maybe<Timer>;
  systemsUpdate: Array<System>;
  tacticalMapUpdate?: Maybe<TacticalMap>;
  tacticalMapsUpdate?: Maybe<Array<Maybe<TacticalMap>>>;
  targetingUpdate?: Maybe<Array<Maybe<Targeting>>>;
  taskFlows: Array<TaskFlow>;
  taskReportUpdate?: Maybe<Array<Maybe<TaskReport>>>;
  taskTemplatesUpdate: Array<TaskTemplate>;
  tasksUpdate?: Maybe<Array<Maybe<Task>>>;
  teamsUpdate?: Maybe<Array<Maybe<Team>>>;
  thoriumUpdate?: Maybe<Thorium>;
  thxUpdate?: Maybe<Array<Maybe<Thx>>>;
  torpedosUpdate?: Maybe<Array<Maybe<Torpedo>>>;
  tractorBeamUpdate?: Maybe<Array<Maybe<TractorBeam>>>;
  transporterUpdate?: Maybe<Transporter>;
  transwarpUpdate?: Maybe<Array<Maybe<Transwarp>>>;
  triggersUpdate?: Maybe<Array<Maybe<Trigger>>>;
  viewscreenVideoToggle?: Maybe<Scalars['Boolean']['output']>;
  viewscreensUpdate?: Maybe<Array<Maybe<Viewscreen>>>;
  widgetNotify?: Maybe<Scalars['String']['output']>;
};


export type Subscription_TemplateUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionActionsUpdateArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId: Scalars['ID']['input'];
  stationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionAdvancedNavAndAstrometricsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionAdvancedNavStarsUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionAuxTimelinesUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionCancelAllSoundsArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCancelLoopingSoundsArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCancelSoundArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionClearCacheArgs = {
  client?: InputMaybe<Scalars['ID']['input']>;
  flight?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionClientChangedArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
  flightId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  stationName?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionClientPingArgs = {
  clientId: Scalars['ID']['input'];
};


export type SubscriptionClockSyncArgs = {
  clientId: Scalars['ID']['input'];
};


export type SubscriptionCommandLineOutputUpdateArgs = {
  clientId: Scalars['ID']['input'];
};


export type SubscriptionCommandLineUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCommandLinesOutputUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionComputerCoreUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCoolantSystemUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
  systemId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCoolantUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionCoreFeedUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCountermeasuresUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionCrewCountUpdateArgs = {
  killed?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCrewUpdateArgs = {
  killed?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCrmFighterUpdateArgs = {
  clientId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionCrmMovementUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionCrmUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionDecksUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionDmxFixturesArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionDockingUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Docking_Types>;
};


export type SubscriptionEngineUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionEntitiesArgs = {
  flightId: Scalars['ID']['input'];
  stageId?: InputMaybe<Scalars['ID']['input']>;
  template?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionEntityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionEventsArgs = {
  includeEvents?: InputMaybe<Array<Scalars['String']['input']>>;
  omitEvents?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type SubscriptionExocompsUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionFlightsUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  running?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionGoogleSheetsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionHeatChangeArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionHullPlatingUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionInterfaceUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionInternalCommUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionInventoryUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionIsochipsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionJumpDriveUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionKeypadUpdateArgs = {
  client: Scalars['ID']['input'];
};


export type SubscriptionKeypadsUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionLibraryEntriesUpdateArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionLongRangeCommunicationsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionMessageUpdatesArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionMidiSetsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionMissionsUpdateArgs = {
  aux?: InputMaybe<Scalars['Boolean']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionMotuArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionMotuChannelArgs = {
  channelId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type SubscriptionMotuSendArgs = {
  id: Scalars['ID']['input'];
  inputId: Scalars['ID']['input'];
  outputId: Scalars['ID']['input'];
};


export type SubscriptionNavigationUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionNotifyArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionObjectiveUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionOfficerLogsUpdateArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
  flightId: Scalars['ID']['input'];
};


export type SubscriptionPhasersUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionPrintQueueArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionProbesUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionRailgunUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionReactorUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionRecordSnippetsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionRoomsUpdateArgs = {
  role?: InputMaybe<RoomRoles>;
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionRotationChangeArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionScannerUpdateArgs = {
  client: Scalars['ID']['input'];
};


export type SubscriptionScannersUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionScienceProbeEmitterArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionSendMessageArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionSensorContactUpdateArgs = {
  hostile?: InputMaybe<Scalars['Boolean']['input']>;
  sensorId?: InputMaybe<Scalars['ID']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionSensorsPingArgs = {
  sensorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSensorsUpdateArgs = {
  domain?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionShieldsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionShipLogsUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionShortRangeCommUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionSickbayUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSignalJammersUpdateArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionSimulatorsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  template?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionSoftwarePanelsUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSoundSubArgs = {
  clientId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSpeedChangeArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionStealthFieldUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSubspaceFieldUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSurveyformUpdateArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionSyncTimeArgs = {
  simulatorId: Scalars['ID']['input'];
};


export type SubscriptionSystemsUpdateArgs = {
  damageWhich?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['Boolean']['input']>;
  heat?: InputMaybe<Scalars['Boolean']['input']>;
  power?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionTacticalMapUpdateArgs = {
  id: Scalars['ID']['input'];
  lowInterval?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionTacticalMapsUpdateArgs = {
  flightId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTargetingUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTaskFlowsArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTaskReportUpdateArgs = {
  cleared?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionTasksUpdateArgs = {
  definitions?: InputMaybe<Array<Scalars['String']['input']>>;
  isCore?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionTeamsUpdateArgs = {
  cleared?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionThxUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTorpedosUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTractorBeamUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTransporterUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTranswarpUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionTriggersUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionViewscreenVideoToggleArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  viewscreenId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionViewscreensUpdateArgs = {
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionWidgetNotifyArgs = {
  simulatorId: Scalars['ID']['input'];
  station?: InputMaybe<Scalars['String']['input']>;
};

export type SubspaceField = SystemInterface & {
  __typename?: 'SubspaceField';
  aft?: Maybe<SubspaceFieldSector>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  dorsal?: Maybe<SubspaceFieldSector>;
  fore?: Maybe<SubspaceFieldSector>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  port?: Maybe<SubspaceFieldSector>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  starboard?: Maybe<SubspaceFieldSector>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  totalPower?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
  ventral?: Maybe<SubspaceFieldSector>;
};

export type SubspaceFieldSector = {
  __typename?: 'SubspaceFieldSector';
  required?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type SurveyForm = {
  __typename?: 'SurveyForm';
  active?: Maybe<Scalars['Boolean']['output']>;
  form?: Maybe<Array<Maybe<FormFields>>>;
  googleSheet?: Maybe<Scalars['String']['output']>;
  googleSpreadsheet?: Maybe<Scalars['ID']['output']>;
  googleSpreadsheetName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  results?: Maybe<Array<Maybe<FormResults>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type System = SystemInterface & {
  __typename?: 'System';
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  damageTasks?: Maybe<Array<Maybe<DamageTask>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['Boolean']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  heatRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isochips?: Maybe<Array<Maybe<Isochip>>>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  optionalDamageSteps?: Maybe<Array<Maybe<DamageStep>>>;
  power?: Maybe<Power>;
  requiredDamageSteps?: Maybe<Array<Maybe<DamageStep>>>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeBoard?: Maybe<Scalars['ID']['output']>;
  upgradeMacros?: Maybe<Array<Maybe<TimelineItem>>>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
  wing?: Maybe<Scalars['String']['output']>;
};

export type SystemCoolant = {
  __typename?: 'SystemCoolant';
  coolant?: Maybe<Scalars['Float']['output']>;
  coolantRate?: Maybe<Scalars['Float']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  systemId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemInterface = {
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export enum Tactical_Types {
  Grid = 'grid',
  Image = 'image',
  Objects = 'objects',
  Path = 'path',
  Video = 'video'
}

export enum Team_Types {
  Damage = 'damage',
  Medical = 'medical',
  Security = 'security'
}

export enum Terminal_Status {
  F = 'F',
  O = 'O',
  R = 'R',
  S = 'S'
}

export enum Timeline_Item_Config_Type {
  Client = 'client',
  Station = 'station'
}

export type TacticalItem = {
  __typename?: 'TacticalItem';
  destination?: Maybe<Coordinates>;
  flash?: Maybe<Scalars['Boolean']['output']>;
  font?: Maybe<Scalars['String']['output']>;
  fontColor?: Maybe<Scalars['String']['output']>;
  fontSize?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ijkl?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  layerId?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Coordinates>;
  locationJson?: Maybe<Scalars['String']['output']>;
  opacity?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  rotationMatch?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  thrusterControls?: Maybe<ThrusterControls>;
  thrusters?: Maybe<Scalars['Boolean']['output']>;
  velocity?: Maybe<Coordinates>;
  wasd?: Maybe<Scalars['Boolean']['output']>;
};

export type TacticalItemInput = {
  destination?: InputMaybe<CoordinatesInput>;
  flash?: InputMaybe<Scalars['Boolean']['input']>;
  font?: InputMaybe<Scalars['String']['input']>;
  fontColor?: InputMaybe<Scalars['String']['input']>;
  fontSize?: InputMaybe<Scalars['Float']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ijkl?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<CoordinatesInput>;
  opacity?: InputMaybe<Scalars['Float']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  rotationMatch?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  speed?: InputMaybe<Scalars['Float']['input']>;
  thrusterControls?: InputMaybe<ThrusterControlsInput>;
  thrusters?: InputMaybe<Scalars['Boolean']['input']>;
  velocity?: InputMaybe<CoordinatesInput>;
  wasd?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TacticalLayer = {
  __typename?: 'TacticalLayer';
  advance?: Maybe<Scalars['Boolean']['output']>;
  asset?: Maybe<Scalars['String']['output']>;
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  gridCols?: Maybe<Scalars['Int']['output']>;
  gridRows?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<TacticalItem>>>;
  labels?: Maybe<Scalars['Boolean']['output']>;
  loop?: Maybe<Scalars['Boolean']['output']>;
  mute?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  opacity?: Maybe<Scalars['Float']['output']>;
  paths?: Maybe<Array<Maybe<TacticalPath>>>;
  playbackSpeed?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Tactical_Types>;
};

export type TacticalLayerInput = {
  advance?: InputMaybe<Scalars['Boolean']['input']>;
  asset?: InputMaybe<Scalars['String']['input']>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  gridCols?: InputMaybe<Scalars['Int']['input']>;
  gridRows?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Scalars['Boolean']['input']>;
  loop?: InputMaybe<Scalars['Boolean']['input']>;
  mute?: InputMaybe<Scalars['Boolean']['input']>;
  opacity?: InputMaybe<Scalars['Float']['input']>;
  playbackSpeed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Tactical_Types>;
};

export type TacticalMap = {
  __typename?: 'TacticalMap';
  flight?: Maybe<Flight>;
  frozen?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  interval?: Maybe<Scalars['Float']['output']>;
  layers?: Maybe<Array<Maybe<TacticalLayer>>>;
  name?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['Boolean']['output']>;
};

export type TacticalPath = {
  __typename?: 'TacticalPath';
  arrow?: Maybe<Scalars['Boolean']['output']>;
  c1?: Maybe<Coordinates>;
  c2?: Maybe<Coordinates>;
  color?: Maybe<Scalars['String']['output']>;
  end?: Maybe<Coordinates>;
  id?: Maybe<Scalars['ID']['output']>;
  layerId?: Maybe<Scalars['ID']['output']>;
  start?: Maybe<Coordinates>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type TacticalPathInput = {
  arrow?: InputMaybe<Scalars['Boolean']['input']>;
  c1?: InputMaybe<CoordinatesInput>;
  c2?: InputMaybe<CoordinatesInput>;
  color?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<CoordinatesInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  start?: InputMaybe<CoordinatesInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type TargetClassInput = {
  clickToTarget?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  moving?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  quadrant?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  speed?: InputMaybe<Scalars['Float']['input']>;
};

export type Targeting = SystemInterface & {
  __typename?: 'Targeting';
  calculatedTarget?: Maybe<StringCoordinates>;
  classes?: Maybe<Array<Maybe<TargetingClass>>>;
  contacts?: Maybe<Array<Maybe<TargetingContact>>>;
  coordinateTargeting?: Maybe<Scalars['Boolean']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  enteredTarget?: Maybe<StringCoordinates>;
  id?: Maybe<Scalars['ID']['output']>;
  interference?: Maybe<Scalars['Float']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  quadrants?: Maybe<Scalars['Boolean']['output']>;
  range?: Maybe<Scalars['Float']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  targetedSensorContact?: Maybe<SensorContact>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type TargetingClass = {
  __typename?: 'TargetingClass';
  clickToTarget?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  moving?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  quadrant?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
};

export type TargetingContact = {
  __typename?: 'TargetingContact';
  class?: Maybe<Scalars['ID']['output']>;
  clickToTarget?: Maybe<Scalars['Boolean']['output']>;
  destroyed?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  moving?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  quadrant?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  speed?: Maybe<Scalars['Float']['output']>;
  system?: Maybe<Scalars['String']['output']>;
  targeted?: Maybe<Scalars['Boolean']['output']>;
};

export type Task = {
  __typename?: 'Task';
  assigned?: Maybe<Scalars['Boolean']['output']>;
  deck?: Maybe<Deck>;
  definition: Scalars['String']['output'];
  dismissed?: Maybe<Scalars['Boolean']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instructions?: Maybe<Scalars['String']['output']>;
  macros?: Maybe<Array<MacroAction>>;
  preMacros: Array<MacroAction>;
  private?: Maybe<Scalars['Boolean']['output']>;
  room?: Maybe<Room>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  startTime?: Maybe<Scalars['String']['output']>;
  station?: Maybe<Scalars['String']['output']>;
  stationTags?: Maybe<Array<Scalars['String']['output']>>;
  systemId?: Maybe<Scalars['ID']['output']>;
  timeElapsedInMS?: Maybe<Scalars['Int']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
  verifyRequested?: Maybe<Scalars['Boolean']['output']>;
};

export type TaskDefinition = {
  __typename?: 'TaskDefinition';
  active: Scalars['Boolean']['output'];
  class: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  stations?: Maybe<Array<Maybe<Station>>>;
  valuesInput: Scalars['JSON']['output'];
  valuesValue: Scalars['JSON']['output'];
};

export type TaskFlow = {
  __typename?: 'TaskFlow';
  category: Scalars['String']['output'];
  completed: Scalars['Boolean']['output'];
  currentStep: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  steps: Array<TaskFlowStep>;
};

export type TaskFlowStep = {
  __typename?: 'TaskFlowStep';
  activeTasks: Array<Task>;
  completeAll: Scalars['Boolean']['output'];
  completed: Scalars['Boolean']['output'];
  delay: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tasks: Array<Task>;
};

export type TaskInput = {
  definition?: InputMaybe<Scalars['String']['input']>;
  macros?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  preMacros?: InputMaybe<Array<InputMaybe<ActionInput>>>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  stationTags?: InputMaybe<Array<Scalars['String']['input']>>;
  values?: InputMaybe<Scalars['JSON']['input']>;
};

export type TaskReport = {
  __typename?: 'TaskReport';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stepCount?: Maybe<Scalars['Int']['output']>;
  system?: Maybe<System>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TaskTemplate = {
  __typename?: 'TaskTemplate';
  definition: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  macros?: Maybe<Array<MacroAction>>;
  name: Scalars['String']['output'];
  preMacros?: Maybe<Array<MacroAction>>;
  reportTypes?: Maybe<Array<Scalars['String']['output']>>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type Team = {
  __typename?: 'Team';
  cleared?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']['output']>;
  officers?: Maybe<Array<Maybe<Crew>>>;
  orders?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Priorities>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Team_Types>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  count?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<Team>;
};

export type TeamCountInput = {
  __typename?: 'TeamCountInput';
  count?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<Scalars['ID']['output']>;
};

export type TeamInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orders?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Priorities>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Team_Types>;
};

export type Template = {
  __typename?: 'Template';
  id?: Maybe<Scalars['ID']['output']>;
};

export type TemplateComponent = {
  __typename?: 'TemplateComponent';
  category?: Maybe<Scalars['String']['output']>;
};

export type Thorium = {
  __typename?: 'Thorium';
  addedTaskTemplates?: Maybe<Scalars['Boolean']['output']>;
  askedToTrack?: Maybe<Scalars['Boolean']['output']>;
  doTrack?: Maybe<Scalars['Boolean']['output']>;
  httpOnly?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  spaceEdventuresCenter?: Maybe<SpaceEdventuresCenter>;
  spaceEdventuresToken?: Maybe<Scalars['String']['output']>;
  thoriumId?: Maybe<Scalars['String']['output']>;
};

export type Thruster = SystemInterface & {
  __typename?: 'Thruster';
  damage?: Maybe<Damage>;
  direction?: Maybe<Coordinates>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  manualThrusters?: Maybe<Scalars['Boolean']['output']>;
  movementSpeed?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  rotation?: Maybe<Rotation>;
  rotationDelta?: Maybe<Rotation>;
  rotationRequired?: Maybe<Rotation>;
  rotationSpeed?: Maybe<Scalars['Float']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type ThrusterControls = {
  __typename?: 'ThrusterControls';
  down?: Maybe<Scalars['String']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  matchRotation?: Maybe<Scalars['Boolean']['output']>;
  reversed?: Maybe<Scalars['Boolean']['output']>;
  right?: Maybe<Scalars['String']['output']>;
  rotation?: Maybe<Scalars['String']['output']>;
  up?: Maybe<Scalars['String']['output']>;
};

export type ThrusterControlsInput = {
  down?: InputMaybe<Scalars['String']['input']>;
  left?: InputMaybe<Scalars['String']['input']>;
  matchRotation?: InputMaybe<Scalars['Boolean']['input']>;
  reversed?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['String']['input']>;
  rotation?: InputMaybe<Scalars['String']['input']>;
  up?: InputMaybe<Scalars['String']['input']>;
};

export type ThrustersComponent = {
  __typename?: 'ThrustersComponent';
  direction?: Maybe<Coordinates>;
  movementSpeed?: Maybe<Scalars['Float']['output']>;
  rotationDelta?: Maybe<Coordinates>;
  rotationSpeed?: Maybe<Scalars['Float']['output']>;
};

export type Thx = SystemInterface & {
  __typename?: 'Thx';
  activated?: Maybe<Scalars['Boolean']['output']>;
  clients?: Maybe<Array<Maybe<ThxClient>>>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type ThxClient = {
  __typename?: 'ThxClient';
  charge?: Maybe<Scalars['Float']['output']>;
  connected?: Maybe<Scalars['Boolean']['output']>;
  executive?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lock?: Maybe<Scalars['Boolean']['output']>;
  station?: Maybe<Station>;
};

export type TimelineInstance = {
  __typename?: 'TimelineInstance';
  currentTimelineStep?: Maybe<Scalars['Int']['output']>;
  executedTimelineSteps?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  mission?: Maybe<Mission>;
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  args?: Maybe<Scalars['String']['output']>;
  delay?: Maybe<Scalars['Int']['output']>;
  event: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  needsConfig?: Maybe<Scalars['Boolean']['output']>;
  noCancelOnReset?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TimelineItemInput = {
  args?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  noCancelOnReset?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineStep = {
  __typename?: 'TimelineStep';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  timelineItems: Array<TimelineItem>;
};

export type Timer = {
  __typename?: 'Timer';
  active?: Maybe<Scalars['Boolean']['output']>;
  time?: Maybe<Scalars['String']['output']>;
};

export type Torpedo = SystemInterface & {
  __typename?: 'Torpedo';
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inventory?: Maybe<Array<Maybe<Warhead>>>;
  loaded?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type TractorBeam = SystemInterface & {
  __typename?: 'TractorBeam';
  beams: Array<TractorBeamBeam>;
  damage: Damage;
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locations?: Maybe<Array<Maybe<Room>>>;
  name: Scalars['String']['output'];
  power: Power;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type TractorBeamBeam = {
  __typename?: 'TractorBeamBeam';
  id: Scalars['ID']['output'];
  scanning: Scalars['Boolean']['output'];
  state: Scalars['Boolean']['output'];
  strength: Scalars['Float']['output'];
  stress: Scalars['Float']['output'];
  target: Scalars['Boolean']['output'];
  targetLabel: Scalars['String']['output'];
};

export type Transporter = SystemInterface & {
  __typename?: 'Transporter';
  charge?: Maybe<Scalars['Float']['output']>;
  chargeSpeed?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  destination?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  requestedTarget?: Maybe<Scalars['String']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  targets?: Maybe<Array<Maybe<TransporterTarget>>>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type TransporterInput = {
  charge?: InputMaybe<Scalars['Float']['input']>;
  destination?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  requestedTarget?: InputMaybe<Scalars['String']['input']>;
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type TransporterTarget = {
  __typename?: 'TransporterTarget';
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  moving?: Maybe<Scalars['Boolean']['output']>;
  position?: Maybe<Coordinates>;
};

export type Transwarp = SystemInterface & {
  __typename?: 'Transwarp';
  active?: Maybe<Scalars['Boolean']['output']>;
  coolant?: Maybe<Scalars['Float']['output']>;
  damage?: Maybe<Damage>;
  displayName?: Maybe<Scalars['String']['output']>;
  heat?: Maybe<Scalars['Float']['output']>;
  heatRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locations?: Maybe<Array<Maybe<Room>>>;
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Power>;
  quad1?: Maybe<TranswarpQuad>;
  quad2?: Maybe<TranswarpQuad>;
  quad3?: Maybe<TranswarpQuad>;
  quad4?: Maybe<TranswarpQuad>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
  stealthFactor?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  upgradeName?: Maybe<Scalars['String']['output']>;
  upgraded?: Maybe<Scalars['Boolean']['output']>;
};

export type TranswarpQuad = {
  __typename?: 'TranswarpQuad';
  core?: Maybe<SubspaceFieldSector>;
  field?: Maybe<SubspaceFieldSector>;
  warp?: Maybe<SubspaceFieldSector>;
};

export type Trigger = {
  __typename?: 'Trigger';
  components?: Maybe<Scalars['JSON']['output']>;
  config?: Maybe<Scalars['JSON']['output']>;
  connections?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type Viewscreen = {
  __typename?: 'Viewscreen';
  auto?: Maybe<Scalars['Boolean']['output']>;
  component?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overlay?: Maybe<Scalars['Boolean']['output']>;
  pictureInPicture?: Maybe<ViewscreenPictureInPicture>;
  secondary?: Maybe<Scalars['Boolean']['output']>;
  simulatorId?: Maybe<Scalars['ID']['output']>;
};

export type ViewscreenPictureInPicture = {
  __typename?: 'ViewscreenPictureInPicture';
  component?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  position?: Maybe<Pip_Position>;
  size?: Maybe<Pip_Size>;
};

export type Warhead = {
  __typename?: 'Warhead';
  id?: Maybe<Scalars['ID']['output']>;
  probe?: Maybe<Probe>;
  type?: Maybe<Scalars['String']['output']>;
};

export type WarheadInput = {
  probe?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type XyLocation = {
  __typename?: 'XYLocation';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isRepeatable: Scalars['Boolean']['output'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description?: Maybe<Scalars['String']['output']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  specifiedByUrl?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type ActivateLightingMutationVariables = Exact<{
  clientId: Scalars['ID']['input'];
  dmxSetId: Scalars['ID']['input'];
}>;


export type ActivateLightingMutation = { __typename?: 'Mutation', clientActivateLights?: string | null };

export type AmbianceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AmbianceQuery = { __typename?: 'Query', simulators: Array<{ __typename?: 'Simulator', id: string, ambiance?: Array<{ __typename?: 'Ambiance', id: string, name: string, asset: string, volume: number, channel: Array<number>, playbackRate: number }> | null }> };

export type ClientDataFragment = { __typename?: 'Client', id: string, token?: string | null, email?: string | null, cracked?: boolean | null, loginName?: string | null, loginState?: string | null, offlineState?: string | null, hypercard?: string | null, movie?: string | null, training?: boolean | null, caches?: Array<string | null> | null, overlay?: boolean | null, soundPlayer?: boolean | null, flight?: { __typename?: 'Flight', id: string, name?: string | null, date?: string | null } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null } | null, station?: { __typename?: 'Station', name: string } | null, currentCard?: { __typename?: 'Card', name: string, component: string } | null };

export type ClientQueryVariables = Exact<{
  clientId: Scalars['ID']['input'];
}>;


export type ClientQuery = { __typename?: 'Query', clients?: Array<{ __typename?: 'Client', id: string, token?: string | null, email?: string | null, cracked?: boolean | null, loginName?: string | null, loginState?: string | null, offlineState?: string | null, hypercard?: string | null, movie?: string | null, training?: boolean | null, caches?: Array<string | null> | null, overlay?: boolean | null, soundPlayer?: boolean | null, flight?: { __typename?: 'Flight', id: string, name?: string | null, date?: string | null } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null } | null, station?: { __typename?: 'Station', name: string } | null, currentCard?: { __typename?: 'Card', name: string, component: string } | null } | null> | null };

export type ClientUpdateSubscriptionVariables = Exact<{
  clientId: Scalars['ID']['input'];
}>;


export type ClientUpdateSubscription = { __typename?: 'Subscription', clientChanged?: Array<{ __typename?: 'Client', id: string, token?: string | null, email?: string | null, cracked?: boolean | null, loginName?: string | null, loginState?: string | null, offlineState?: string | null, hypercard?: string | null, movie?: string | null, training?: boolean | null, caches?: Array<string | null> | null, overlay?: boolean | null, soundPlayer?: boolean | null, flight?: { __typename?: 'Flight', id: string, name?: string | null, date?: string | null } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null } | null, station?: { __typename?: 'Station', name: string } | null, currentCard?: { __typename?: 'Card', name: string, component: string } | null } | null> | null };

export type ClientPingMutationVariables = Exact<{
  clientId: Scalars['ID']['input'];
}>;


export type ClientPingMutation = { __typename?: 'Mutation', clientPing?: string | null };

export type LightingControlSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type LightingControlSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, alertlevel?: string | null, training?: boolean | null, lighting?: { __typename?: 'Lighting', intensity: number, action: Lighting_Action, actionStrength: number, transitionDuration: number, dmxConfig?: { __typename?: 'DMXConfig', id: string, config: {[key: string]: any}, actionStrength: number } | null } | null } | null> | null };

export type RegisterClientMutationVariables = Exact<{
  client: Scalars['ID']['input'];
}>;


export type RegisterClientMutation = { __typename?: 'Mutation', clientConnect?: string | null };

export type RemoveClientMutationVariables = Exact<{
  client: Scalars['ID']['input'];
}>;


export type RemoveClientMutation = { __typename?: 'Mutation', clientDisconnect?: string | null };

export type SimulatorDataFragment = { __typename?: 'Simulator', id: string, name?: string | null, caps?: boolean | null, alertlevel?: string | null, layout?: string | null, bridgeOfficerMessaging?: boolean | null, training?: boolean | null, hasPrinter?: boolean | null, hasLegs?: boolean | null, panels?: Array<string | null> | null, flipped?: boolean | null, soundEffects?: {[key: string]: any} | null, assets?: { __typename?: 'SimulatorAssets', mesh?: string | null, texture?: string | null, side?: string | null, top?: string | null, logo?: string | null, bridge?: string | null } | null, stations?: Array<{ __typename?: 'Station', name: string, login?: boolean | null, training?: string | null, ambiance?: string | null, executive?: boolean | null, layout?: string | null, messageGroups?: Array<string | null> | null, widgets?: Array<string | null> | null, cards?: Array<{ __typename?: 'Card', name: string, component: string, hidden?: boolean | null, assigned?: boolean | null, newStation?: boolean | null }> | null }> | null };

export type SimulatorQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type SimulatorQuery = { __typename?: 'Query', simulators: Array<{ __typename?: 'Simulator', id: string, name?: string | null, caps?: boolean | null, alertlevel?: string | null, layout?: string | null, bridgeOfficerMessaging?: boolean | null, training?: boolean | null, hasPrinter?: boolean | null, hasLegs?: boolean | null, panels?: Array<string | null> | null, flipped?: boolean | null, soundEffects?: {[key: string]: any} | null, assets?: { __typename?: 'SimulatorAssets', mesh?: string | null, texture?: string | null, side?: string | null, top?: string | null, logo?: string | null, bridge?: string | null } | null, stations?: Array<{ __typename?: 'Station', name: string, login?: boolean | null, training?: string | null, ambiance?: string | null, executive?: boolean | null, layout?: string | null, messageGroups?: Array<string | null> | null, widgets?: Array<string | null> | null, cards?: Array<{ __typename?: 'Card', name: string, component: string, hidden?: boolean | null, assigned?: boolean | null, newStation?: boolean | null }> | null }> | null }> };

export type SimulatorUpdateSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type SimulatorUpdateSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, name?: string | null, caps?: boolean | null, alertlevel?: string | null, layout?: string | null, bridgeOfficerMessaging?: boolean | null, training?: boolean | null, hasPrinter?: boolean | null, hasLegs?: boolean | null, panels?: Array<string | null> | null, flipped?: boolean | null, soundEffects?: {[key: string]: any} | null, assets?: { __typename?: 'SimulatorAssets', mesh?: string | null, texture?: string | null, side?: string | null, top?: string | null, logo?: string | null, bridge?: string | null } | null, stations?: Array<{ __typename?: 'Station', name: string, login?: boolean | null, training?: string | null, ambiance?: string | null, executive?: boolean | null, layout?: string | null, messageGroups?: Array<string | null> | null, widgets?: Array<string | null> | null, cards?: Array<{ __typename?: 'Card', name: string, component: string, hidden?: boolean | null, assigned?: boolean | null, newStation?: boolean | null }> | null }> | null } | null> | null };

export type MacroDmxConfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type MacroDmxConfigsQuery = { __typename?: 'Query', dmxConfigs: Array<{ __typename?: 'DMXConfig', id: string, name: string }> };

export type DockingShuttleConfigQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type DockingShuttleConfigQuery = { __typename?: 'Query', docking?: Array<{ __typename?: 'DockingPort', id?: string | null, name?: string | null, type?: Docking_Types | null, image?: string | null, shipName?: string | null, clamps?: boolean | null, compress?: boolean | null, doors?: boolean | null, docked?: boolean | null, direction?: Docking_Direction | null } | null> | null, assetFolders?: Array<{ __typename?: 'AssetFolder', id: string, name: string, objects: Array<{ __typename?: 'AssetObject', id: string, name: string, fullPath: string }> } | null> | null };

export type MissionMacrosQueryVariables = Exact<{ [key: string]: never; }>;


export type MissionMacrosQuery = { __typename?: 'Query', missions: Array<{ __typename?: 'Mission', id: string, name?: string | null, category?: string | null, timeline: Array<{ __typename?: 'TimelineStep', id: string, name: string }> }> };

export type RemoteAssetLoadMutationVariables = Exact<{
  folderPath: Scalars['String']['input'];
  files: Array<RemoteAsset> | RemoteAsset;
}>;


export type RemoteAssetLoadMutation = { __typename?: 'Mutation', downloadRemoteAssets?: string | null };

export type HandleAddFlightSetToNavigationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightSetId: Scalars['ID']['input'];
}>;


export type HandleAddFlightSetToNavigationMutation = { __typename?: 'Mutation', handleAddFlightSetToNavigation?: string | null };

export type GetAdvancedNavAndAstrometricsQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type GetAdvancedNavAndAstrometricsQuery = { __typename?: 'Query', advancedNavAndAstrometrics?: Array<{ __typename?: 'AdvancedNavigationAndAstrometrics', id?: string | null, simulatorId?: string | null, type?: string | null, name?: string | null, displayName?: string | null, stealthFactor?: number | null, coolantLevel: number, heatLevel: number, engineStatus: string, hasEmergencyPower: boolean, startingStartupTime: number, remainingEta: number, totalEta: number, remainingStartupTime?: number | null, showEta: boolean, showFlightSet: boolean, currentLocationName?: string | null, currentLocationUrl?: string | null, flightSetPathMap: string, probeAssignments: string, power?: { __typename?: 'Power', power?: number | null, powerLevels?: Array<number | null> | null } | null, damage?: { __typename?: 'Damage', damaged?: boolean | null, report?: string | null } | null, flightSets: Array<{ __typename?: 'FlightSet', id: string, name: string, backgroundImg: string, pixelDistanceModifier?: number | null, imageMaxX: number, imageMaxY: number, pixelsPerSecond: number, label?: string | null, probeLaunchRangeRadius: number, addOnTraining?: boolean | null, startOptions: Array<{ __typename?: 'NavigationStartOptions', id: string, name: string, riskModifier: number, imgUrl: string, secondsForStartup: number }>, speedOptions: Array<{ __typename?: 'NavigationSpeedOptions', id: string, name: string, speedModifier: number, riskModifier: number, requiresMaxEngines: boolean, imgUrl: string }>, exitOptions: Array<{ __typename?: 'NavigationExitOptions', id: string, name: string, riskModifier: number, imgUrl: string }>, pointsOfInterest: Array<{ __typename?: 'PointOfInterest', id: string, name: string, isVisible: boolean, isFogOfWar: boolean, speedIndex: number, riskIndex: number, iconUrl: string, fullImageUrl: string, showName?: boolean | null, location: { __typename?: 'XYLocation', x: number, y: number }, type: { __typename?: 'PointOfInterestType', category: string, imageUri: string }, information: { __typename?: 'PointOfInterestInformation', basicInformation: string, hasBasicInformation: boolean, detailedInformation: string, hasDetailedInformation: boolean, secretInformation: string, hasSecretInformation: boolean }, transitOptions?: Array<{ __typename?: 'SecondaryStopTransitOption', name: string, timeModifier: number, riskModifier: number, iconUrl: string }> | null }>, defaultStartingLocation: { __typename?: 'BasicCoordinate', x: number, y: number }, borders: Array<{ __typename?: 'MapBorder', name: string, id: string, iconUrl: string, riskIndex: number, location: { __typename?: 'MapBorderLocation', side: string } }> }>, currentLocation: { __typename?: 'BasicCoordinate', x: number, y: number }, flightPaths: Array<{ __typename?: 'NamedNavigationRoute', name: string, id: string, targetLocationId: string, isBorder: boolean, secondaryRouteOptions: Array<{ __typename?: 'SecondaryNavigationRouteOption', targetLocationId: string }>, startOption: { __typename?: 'NavigationStartOptions', id: string, name: string, riskModifier: number, imgUrl: string, secondsForStartup: number }, speedOption: { __typename?: 'NavigationSpeedOptions', id: string, name: string, speedModifier: number, riskModifier: number, requiresMaxEngines: boolean, imgUrl: string }, exitOption: { __typename?: 'NavigationExitOptions', id: string, name: string, riskModifier: number, imgUrl: string } }>, flightPathCoords: Array<{ __typename?: 'FullCoordinate', speed: number, color: string, x: number, y: number }>, currentFlightSet?: { __typename?: 'FlightSet', id: string, name: string, backgroundImg: string, imageMaxX: number, imageMaxY: number, pixelsPerSecond: number, label?: string | null, probeLaunchRangeRadius: number, addOnTraining?: boolean | null, startOptions: Array<{ __typename?: 'NavigationStartOptions', id: string, name: string, riskModifier: number, imgUrl: string, secondsForStartup: number }>, speedOptions: Array<{ __typename?: 'NavigationSpeedOptions', id: string, name: string, speedModifier: number, riskModifier: number, requiresMaxEngines: boolean, imgUrl: string }>, exitOptions: Array<{ __typename?: 'NavigationExitOptions', id: string, name: string, riskModifier: number, imgUrl: string }>, pointsOfInterest: Array<{ __typename?: 'PointOfInterest', id: string, name: string, isVisible: boolean, isFogOfWar: boolean, speedIndex: number, riskIndex: number, iconUrl: string, fullImageUrl: string, showName?: boolean | null, location: { __typename?: 'XYLocation', x: number, y: number }, type: { __typename?: 'PointOfInterestType', category: string, imageUri: string }, information: { __typename?: 'PointOfInterestInformation', basicInformation: string, hasBasicInformation: boolean, detailedInformation: string, hasDetailedInformation: boolean, secretInformation: string, hasSecretInformation: boolean }, transitOptions?: Array<{ __typename?: 'SecondaryStopTransitOption', name: string, timeModifier: number, riskModifier: number, iconUrl: string }> | null }>, defaultStartingLocation: { __typename?: 'BasicCoordinate', x: number, y: number }, borders: Array<{ __typename?: 'MapBorder', name: string, id: string, iconUrl: string, riskIndex: number, location: { __typename?: 'MapBorderLocation', side: string } }> } | null, currentFlightPath?: { __typename?: 'NavigationRoute', targetLocationId: string, isBorder: boolean, secondaryRouteOptions: Array<{ __typename?: 'SecondaryNavigationRouteOption', targetLocationId: string }>, startOption: { __typename?: 'NavigationStartOptions', id: string, name: string, riskModifier: number, imgUrl: string, secondsForStartup: number }, speedOption: { __typename?: 'NavigationSpeedOptions', id: string, name: string, speedModifier: number, riskModifier: number, requiresMaxEngines: boolean, imgUrl: string }, exitOption: { __typename?: 'NavigationExitOptions', id: string, name: string, riskModifier: number, imgUrl: string } } | null, probes: Array<{ __typename?: 'FSProbe', id: string, name: string, type: string, equipment: Array<{ __typename?: 'Equipment', id: string, count: number }> }> } | null> | null };

export type GetBasicFlightSetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBasicFlightSetsQuery = { __typename?: 'Query', getAllFlightSets: Array<{ __typename?: 'FlightSet', id: string, name: string, label?: string | null } | null> };

export type HandleAddProbeAssignmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
  poiId: Scalars['ID']['input'];
}>;


export type HandleAddProbeAssignmentMutation = { __typename?: 'Mutation', handleAddProbeAssignment?: string | null };

export type HandleUpdateAdvNavFlightSetDataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightSet: FlightSetInput;
}>;


export type HandleUpdateAdvNavFlightSetDataMutation = { __typename?: 'Mutation', updateAdvNavFlightSetData?: string | null };

export type HandleAdvancedNavCoolantFlushMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HandleAdvancedNavCoolantFlushMutation = { __typename?: 'Mutation', handleCoolantFlush?: string | null };

export type HandleEmergencyStopMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HandleEmergencyStopMutation = { __typename?: 'Mutation', handleEmergencyStop?: string | null };

export type HandleEngageFlightPathMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  path: NavigationRouteInput;
}>;


export type HandleEngageFlightPathMutation = { __typename?: 'Mutation', handleEngageFlightPath?: string | null };

export type HandleEngineFluxMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HandleEngineFluxMutation = { __typename?: 'Mutation', handleEngineFlux?: string | null };

export type HandleOnAssignProbeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  probeId: Scalars['ID']['input'];
  poiId: Scalars['ID']['input'];
}>;


export type HandleOnAssignProbeMutation = { __typename?: 'Mutation', handleOnAssignProbe?: string | null };

export type HandleOverrideLocationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  location: BasicCoordinateInput;
  currentLocationUrl?: InputMaybe<Scalars['String']['input']>;
  currentLocationName?: InputMaybe<Scalars['String']['input']>;
}>;


export type HandleOverrideLocationMutation = { __typename?: 'Mutation', handleOverrideLocation?: string | null };

export type HandleResumePathMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HandleResumePathMutation = { __typename?: 'Mutation', handleResumePath?: string | null };

export type HandleSaveFlightPathMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  path: NamedNavigationRouteInput;
}>;


export type HandleSaveFlightPathMutation = { __typename?: 'Mutation', handleSaveFlightPath?: string | null };

export type HandleSetCoolantLevelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  level: Scalars['Float']['input'];
}>;


export type HandleSetCoolantLevelMutation = { __typename?: 'Mutation', handleSetCoolantLevel?: string | null };

export type HandleSetHeatLevelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  level: Scalars['Float']['input'];
}>;


export type HandleSetHeatLevelMutation = { __typename?: 'Mutation', handleSetHeatLevel?: string | null };

export type HandleShowEtaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  show: Scalars['Boolean']['input'];
}>;


export type HandleShowEtaMutation = { __typename?: 'Mutation', handleShowEta?: string | null };

export type HandleShowFlightSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  show: Scalars['Boolean']['input'];
}>;


export type HandleShowFlightSetMutation = { __typename?: 'Mutation', handleShowFlightSet?: string | null };

export type HandleUpdateAdvNavFlightSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightSet: FlightSetInput;
}>;


export type HandleUpdateAdvNavFlightSetMutation = { __typename?: 'Mutation', updateAdvNavFlightSet?: string | null };

export type HandleUpdateCurrentFlightPathMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  route: NavigationRouteInput;
}>;


export type HandleUpdateCurrentFlightPathMutation = { __typename?: 'Mutation', handleUpdateCurrentFlightPath?: string | null };

export type HandleUpdateCurrentFlightSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightSetId: Scalars['ID']['input'];
}>;


export type HandleUpdateCurrentFlightSetMutation = { __typename?: 'Mutation', handleUpdateCurrentFlightSet?: string | null };

export type HandleUpdateEtaMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  eta: Scalars['Float']['input'];
}>;


export type HandleUpdateEtaMutation = { __typename?: 'Mutation', handleUpdateEta?: string | null };

export type HandleUpdateProbeAssignmentsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  probeAssignments: Scalars['String']['input'];
}>;


export type HandleUpdateProbeAssignmentsMutation = { __typename?: 'Mutation', handleUpdateProbeAssignments: string };

export type CountermeasureModuleFragment = { __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> };

export type CountermeasureFragment = { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> };

export type CountermeasuresSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type CountermeasuresSubscription = { __typename?: 'Subscription', countermeasuresUpdate?: { __typename?: 'Countermeasures', id: string, name: string, displayName: string, damage: { __typename?: 'Damage', damaged?: boolean | null }, power: { __typename?: 'Power', power?: number | null, powerLevels?: Array<number | null> | null }, materials: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, launched: Array<{ __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> }>, slots: { __typename?: 'CountermeasureSlot', slot1?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot2?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot3?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot4?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot5?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot6?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot7?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null, slot8?: { __typename?: 'Countermeasure', id: string, name: string, locked: boolean, active: boolean, building: boolean, totalPowerUsed: number, readyToLaunch: boolean, powerUsage: number, availablePower: number, buildPercentage: number, note: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, buildProgress: number, activated: boolean, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null } } | null };

export type CountermeasuresCoreSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type CountermeasuresCoreSubscription = { __typename?: 'Subscription', countermeasuresUpdate?: { __typename?: 'Countermeasures', id: string, name: string, displayName: string, materials: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, launched: Array<{ __typename?: 'Countermeasure', id: string, name: string, powerUsage: number, availablePower: number, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, config: {[key: string]: any}, activated: boolean, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> }> } | null };

export type CountermeasureModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountermeasureModulesQuery = { __typename?: 'Query', countermeasureModuleType: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, description: string, powerRequirement: number, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, carbon: number, plastic: number, plasma: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> };

export type CountermeasureRemoveModuleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
  moduleId: Scalars['ID']['input'];
}>;


export type CountermeasureRemoveModuleMutation = { __typename?: 'Mutation', countermeasuresRemoveModule?: string | null };

export type CountermeasureSetResourceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  resource: Scalars['String']['input'];
  value: Scalars['Float']['input'];
}>;


export type CountermeasureSetResourceMutation = { __typename?: 'Mutation', countermeasuresSetResource?: string | null };

export type CountermeasuresActivateCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
}>;


export type CountermeasuresActivateCountermeasureMutation = { __typename?: 'Mutation', countermeasuresActivateCountermeasure?: string | null };

export type CountermeasuresAddModuleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
  moduleType: Scalars['String']['input'];
}>;


export type CountermeasuresAddModuleMutation = { __typename?: 'Mutation', countermeasuresAddModule?: { __typename?: 'Countermeasure', id: string, modules: Array<{ __typename?: 'CountermeasureModule', id: string, name: string, description: string, powerRequirement: number, config: {[key: string]: any}, buildProgress: number, activated: boolean, resourceRequirements: { __typename?: 'CountermeasureResources', copper: number, titanium: number, plasma: number, carbon: number }, configurationOptions: Array<{ __typename?: 'CountermeasureConfigOptions', type: string, label: string }> }> } | null };

export type CountermeasuresBuildCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
}>;


export type CountermeasuresBuildCountermeasureMutation = { __typename?: 'Mutation', countermeasuresBuildCountermeasure?: string | null };

export type CountermeasuresConfigureModuleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
  moduleId: Scalars['ID']['input'];
  config: Scalars['JSON']['input'];
}>;


export type CountermeasuresConfigureModuleMutation = { __typename?: 'Mutation', countermeasuresConfigureModule?: string | null };

export type CountermeasureCreateCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
  name: Scalars['String']['input'];
}>;


export type CountermeasureCreateCountermeasureMutation = { __typename?: 'Mutation', countermeasuresCreateCountermeasure?: { __typename?: 'Countermeasure', id: string } | null };

export type CountermeasuresDeactivateCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
}>;


export type CountermeasuresDeactivateCountermeasureMutation = { __typename?: 'Mutation', countermeasuresDeactivateCountermeasure?: string | null };

export type CountermeasuresLaunchCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
}>;


export type CountermeasuresLaunchCountermeasureMutation = { __typename?: 'Mutation', countermeasuresLaunchCountermeasure?: string | null };

export type CountermeasuresLaunchUnlockedCountermeasuresMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CountermeasuresLaunchUnlockedCountermeasuresMutation = { __typename?: 'Mutation', countermeasuresLaunchUnlockedCountermeasures?: string | null };

export type CountermeasureRemoveCountermeasureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
}>;


export type CountermeasureRemoveCountermeasureMutation = { __typename?: 'Mutation', countermeasuresRemoveCountermeasure?: string | null };

export type CountermeasuresRemoveModuleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  slot: CountermeasureSlotEnum;
  moduleId: Scalars['ID']['input'];
}>;


export type CountermeasuresRemoveModuleMutation = { __typename?: 'Mutation', countermeasuresRemoveModule?: string | null };

export type CountermeasuresSetFdNoteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  countermeasureId: Scalars['ID']['input'];
  note: Scalars['String']['input'];
}>;


export type CountermeasuresSetFdNoteMutation = { __typename?: 'Mutation', countermeasuresSetFDNote?: string | null };

export type SystemsCoreEnginesQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type SystemsCoreEnginesQuery = { __typename?: 'Query', engines?: Array<{ __typename?: 'Engine', id?: string | null, speeds?: Array<{ __typename?: 'Speed', number?: number | null } | null> | null } | null> | null };

export type SystemChangePowerMutationVariables = Exact<{
  systemId: Scalars['ID']['input'];
  power: Scalars['Int']['input'];
}>;


export type SystemChangePowerMutation = { __typename?: 'Mutation', changePower?: string | null };

export type SystemUpgradeMutationVariables = Exact<{
  systemId: Scalars['ID']['input'];
}>;


export type SystemUpgradeMutation = { __typename?: 'Mutation', upgradeSystem?: string | null };

export type AddDocumentMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  asset: Scalars['String']['input'];
}>;


export type AddDocumentMutation = { __typename?: 'Mutation', documentAdd?: string | null };

export type DocumentsSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type DocumentsSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, documents?: Array<{ __typename?: 'Document', id: string, name: string, asset: string }> | null } | null> | null };

export type RemoveDocumentMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type RemoveDocumentMutation = { __typename?: 'Mutation', documentRemove?: string | null };

export type HackingAllowHackingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
}>;


export type HackingAllowHackingMutation = { __typename?: 'Mutation', computerCoreSetHackingState?: string | null };

export type HackingAppendLogMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  log: Scalars['String']['input'];
}>;


export type HackingAppendLogMutation = { __typename?: 'Mutation', computerCoreAppendLog?: string | null };

export type HackingCopyFileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  file: ComputerCoreFileInput;
}>;


export type HackingCopyFileMutation = { __typename?: 'Mutation', computerCoreAddFile?: string | null };

export type HackingActivateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HackingActivateMutation = { __typename?: 'Mutation', computerCoreActivateHacking?: string | null };

export type HackingDeactivateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HackingDeactivateMutation = { __typename?: 'Mutation', computerCoreDeactivateHacking?: string | null };

export type ComputerCoreHackingSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type ComputerCoreHackingSubscription = { __typename?: 'Subscription', computerCoreUpdate?: Array<{ __typename?: 'ComputerCore', id?: string | null, hackingActive?: boolean | null, hackingState?: string | null, hackingLog: Array<string>, hackingPortScanFrequency?: number | null, activeHackingPreset?: { __typename?: 'HackingPreset', id: string, longRange: boolean, remoteControl: boolean, logs: boolean, commandLines: Array<string>, fileViewer: boolean, longRangeMessages: Array<{ __typename?: 'HackingLRM', id: string, title: string, message: string }>, files: Array<{ __typename?: 'ComputerCoreFile', id?: string | null, name?: string | null, level?: number | null, corrupted?: boolean | null }> } | null, hackingPorts: { __typename?: 'HackingPorts', logs?: number | null, longRange?: number | null, remoteControl?: number | null, fileViewer?: number | null } } | null> | null };

export type HackingRemoveLogMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
}>;


export type HackingRemoveLogMutation = { __typename?: 'Mutation', computerCoreDeleteLog?: string | null };

export type HackingTransferToLongRangeMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  sender?: InputMaybe<Scalars['String']['input']>;
}>;


export type HackingTransferToLongRangeMutation = { __typename?: 'Mutation', sendLongRangeMessage?: string | null };

export type HackingSetFrequencyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  frequency: Scalars['Float']['input'];
}>;


export type HackingSetFrequencyMutation = { __typename?: 'Mutation', computerCoreSetHackingFrequency?: string | null };

export type HackingSetPresetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  presetId: Scalars['ID']['input'];
}>;


export type HackingSetPresetMutation = { __typename?: 'Mutation', computerCoreHackingPreset?: string | null };

export type HackingUpdateFilesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  files: Scalars['JSON']['input'];
}>;


export type HackingUpdateFilesMutation = { __typename?: 'Mutation', computerCoreUpdateHackingFiles?: string | null };

export type LightingSetEffectMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  effect: Lighting_Action;
  duration: Scalars['Float']['input'];
}>;


export type LightingSetEffectMutation = { __typename?: 'Mutation', lightingSetEffect?: string | null };

export type LightingSetIntensityMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  intensity: Scalars['Float']['input'];
}>;


export type LightingSetIntensityMutation = { __typename?: 'Mutation', lightingSetIntensity?: string | null };

export type ShakeLightsMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  duration: Scalars['Float']['input'];
}>;


export type ShakeLightsMutation = { __typename?: 'Mutation', lightingShakeLights?: string | null };

export type UpdateLightingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  lighting: LightingInput;
}>;


export type UpdateLightingMutation = { __typename?: 'Mutation', updateSimulatorLighting?: string | null };

export type ClearPdfMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ClearPdfMutation = { __typename?: 'Mutation', clearPdf?: string | null };

export type PrintQueueSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type PrintQueueSubscription = { __typename?: 'Subscription', printQueue?: Array<{ __typename?: 'PrintQueue', id: string, asset: string, timestamp: number } | null> | null };

export type ReactorAckWingPowerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
  ack: Scalars['Boolean']['input'];
}>;


export type ReactorAckWingPowerMutation = { __typename?: 'Mutation', reactorAckWingRequest?: string | null };

export type BatteryChargeLevelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  e: Scalars['Float']['input'];
}>;


export type BatteryChargeLevelMutation = { __typename?: 'Mutation', reactorBatteryChargeLevel?: string | null };

export type BatteryChargeRateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  e: Scalars['Float']['input'];
}>;


export type BatteryChargeRateMutation = { __typename?: 'Mutation', reactorBatteryChargeRate?: string | null };

export type SetDilithiumRateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  rate: Scalars['Float']['input'];
}>;


export type SetDilithiumRateMutation = { __typename?: 'Mutation', setDilithiumStressRate?: string | null };

export type ReactorDockingSubscriptionVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReactorDockingSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, ship?: { __typename?: 'Ship', clamps?: boolean | null, ramps?: boolean | null, airlock?: boolean | null, legs?: boolean | null } | null } | null> | null };

export type FluxDilithiumMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FluxDilithiumMutation = { __typename?: 'Mutation', fluxDilithiumStress?: string | null };

export type ReactorPowerSubscriptionVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReactorPowerSubscription = { __typename?: 'Subscription', systemsUpdate: Array<{ __typename?: 'System', id?: string | null, name?: string | null, power?: { __typename?: 'Power', power?: number | null } | null }> };

export type ReactorCoolMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ReactorCoolMutation = { __typename?: 'Mutation', engineCool?: string | null };

export type ReactorHeatMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  heat?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ReactorHeatMutation = { __typename?: 'Mutation', addHeat?: string | null };

export type ReactorSetHeatRateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  rate: Scalars['Float']['input'];
}>;


export type ReactorSetHeatRateMutation = { __typename?: 'Mutation', setHeatRate?: string | null };

export type ReactorPowerLevelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  e: Scalars['Int']['input'];
}>;


export type ReactorPowerLevelMutation = { __typename?: 'Mutation', reactorChangeOutput?: string | null };

export type ReactorsSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type ReactorsSubscription = { __typename?: 'Subscription', reactorUpdate: Array<{ __typename?: 'Reactor', id: string, type?: string | null, name?: string | null, heat?: number | null, heatRate?: number | null, model?: Reactor_Models | null, coolant?: number | null, ejected?: boolean | null, externalPower?: boolean | null, efficiency?: number | null, displayName?: string | null, powerOutput?: number | null, batteryChargeRate?: number | null, batteryChargeLevel?: number | null, depletion?: number | null, alphaLevel?: number | null, betaLevel?: number | null, alphaTarget?: number | null, betaTarget?: number | null, dilithiumRate?: number | null, hasWings?: boolean | null, leftWingPower?: number | null, leftWingRequest?: number | null, leftWingRequested?: boolean | null, rightWingPower?: number | null, rightWingRequest?: number | null, rightWingRequested?: boolean | null, damage?: { __typename?: 'Damage', damaged?: boolean | null } | null, efficiencies?: Array<{ __typename?: 'ReactorEfficiency', label: string, color: string, efficiency?: number | null }> | null }> };

export type ReactorRequestWingPowerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
  power: Scalars['Int']['input'];
}>;


export type ReactorRequestWingPowerMutation = { __typename?: 'Mutation', reactorRequestWingPower?: string | null };

export type ReactorSetEfficiencyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  e?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ReactorSetEfficiencyMutation = { __typename?: 'Mutation', reactorChangeEfficiency?: string | null };

export type ReactorSetWingPowerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
  power: Scalars['Int']['input'];
}>;


export type ReactorSetWingPowerMutation = { __typename?: 'Mutation', reactorSetWingPower?: string | null };

export type SensorsPingSubSubscriptionVariables = Exact<{
  sensorsId: Scalars['ID']['input'];
}>;


export type SensorsPingSubSubscription = { __typename?: 'Subscription', sensorsPing?: string | null };

export type SensorsProbeDataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: Scalars['String']['input'];
  flash?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SensorsProbeDataMutation = { __typename?: 'Mutation', probeProcessedData?: string | null };

export type SensorsProcessedDataMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  data: Scalars['String']['input'];
  flash?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SensorsProcessedDataMutation = { __typename?: 'Mutation', processedData?: string | null };

export type SensorsRemoveProcessedDataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  time: Scalars['String']['input'];
}>;


export type SensorsRemoveProcessedDataMutation = { __typename?: 'Mutation', removeProcessedData?: string | null };

export type SensorsSendPingMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SensorsSendPingMutation = { __typename?: 'Mutation', pingSensors?: string | null };

export type SensorScanResponseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  scan: SensorScanInput;
}>;


export type SensorScanResponseMutation = { __typename?: 'Mutation', updateSensorScan?: string | null };

export type SensorScanResultMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  result: Scalars['String']['input'];
}>;


export type SensorScanResultMutation = { __typename?: 'Mutation', sensorScanResult?: string | null };

export type SensorsProbesQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type SensorsProbesQuery = { __typename?: 'Query', probes: Array<{ __typename?: 'Probes', id: string }> };

export type SensorsSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type SensorsSubscription = { __typename?: 'Subscription', sensorsUpdate: Array<{ __typename?: 'Sensors', id: string, scanResults?: string | null, scanRequest?: string | null, scanning?: boolean | null, pings?: boolean | null, pingMode?: Ping_Modes | null, timeSincePing?: number | null, domain: string, interference?: number | null, history?: boolean | null, processedData?: Array<{ __typename?: 'ProcessedData', value: string, time: string }> | null, movement?: { __typename?: 'Coordinates', x?: number | null, y?: number | null, z?: number | null } | null, segments?: Array<{ __typename?: 'SensorsSegment', ring?: number | null, line?: number | null, state?: boolean | null } | null> | null, presetAnswers?: Array<{ __typename?: 'PresetAnswer', label: string, value: string } | null> | null, scans?: Array<{ __typename?: 'SensorScan', id: string, request?: string | null, mode?: string | null, location?: string | null, response?: string | null, scanning?: boolean | null, timestamp?: string | null, cancelled?: boolean | null } | null> | null, damage?: { __typename?: 'Damage', damaged?: boolean | null } | null, power?: { __typename?: 'Power', power?: number | null, powerLevels?: Array<number | null> | null } | null }> };

export type SetCalculatedTargetMutationVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  coordinates: CoordinatesInput;
  contactId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SetCalculatedTargetMutation = { __typename?: 'Mutation', setTargetingCalculatedTarget?: string | null };

export type SensorsSetHistoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  history: Scalars['Boolean']['input'];
}>;


export type SensorsSetHistoryMutation = { __typename?: 'Mutation', setSensorsHistory?: string | null };

export type SensorsSetPingModeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  mode?: InputMaybe<Ping_Modes>;
}>;


export type SensorsSetPingModeMutation = { __typename?: 'Mutation', setSensorPingMode?: string | null };

export type TargetingRangeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TargetingRangeQuery = { __typename?: 'Query', targeting?: Array<{ __typename?: 'Targeting', id?: string | null, range?: number | null } | null> | null };

export type NewLayerMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type NewLayerMutation = { __typename?: 'Mutation', addTacticalMapLayer?: string | null };

export type AddTacticalItemMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  item: TacticalItemInput;
}>;


export type AddTacticalItemMutation = { __typename?: 'Mutation', addTacticalMapItem?: string | null };

export type AssetFoldersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AssetFoldersSubscription = { __typename?: 'Subscription', assetFolderChange: Array<{ __typename?: 'AssetFolder', name: string, fullPath: string, id: string, folderPath: string, objects: Array<{ __typename?: 'AssetObject', id: string, name: string, fullPath: string, url: string }> }> };

export type AssetsAddFolderMutationVariables = Exact<{
  name: Scalars['String']['input'];
  fullPath: Scalars['String']['input'];
  folderPath: Scalars['String']['input'];
}>;


export type AssetsAddFolderMutation = { __typename?: 'Mutation', addAssetFolder?: string | null };

export type DuplicateTacticalMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DuplicateTacticalMutation = { __typename?: 'Mutation', duplicateTacticalMap?: string | null };

export type FreezeTacticalMapMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  freeze: Scalars['Boolean']['input'];
}>;


export type FreezeTacticalMapMutation = { __typename?: 'Mutation', freezeTacticalMap?: string | null };

export type NewTacticalMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type NewTacticalMutation = { __typename?: 'Mutation', newTacticalMap?: string | null };

export type AssetsRemoveObjectMutationVariables = Exact<{
  fullPath: Scalars['String']['input'];
}>;


export type AssetsRemoveObjectMutation = { __typename?: 'Mutation', removeAssetObject?: string | null };

export type AssetsRemoveFolderMutationVariables = Exact<{
  fullPath: Scalars['String']['input'];
}>;


export type AssetsRemoveFolderMutation = { __typename?: 'Mutation', removeAssetFolder?: string | null };

export type RemoveLayerMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
}>;


export type RemoveLayerMutation = { __typename?: 'Mutation', removeTacticalMapLayer?: string | null };

export type RemoveMapMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveMapMutation = { __typename?: 'Mutation', removeTacticalMap?: string | null };

export type RemoveTacticalItemMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  itemId: Scalars['ID']['input'];
}>;


export type RemoveTacticalItemMutation = { __typename?: 'Mutation', removeTacticalMapItem?: string | null };

export type RemoveTacticalPathMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  pathId: Scalars['ID']['input'];
}>;


export type RemoveTacticalPathMutation = { __typename?: 'Mutation', removeTacticalMapPath?: string | null };

export type ReorderTacticalLayerMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layer: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
}>;


export type ReorderTacticalLayerMutation = { __typename?: 'Mutation', reorderTacticalMapLayer?: string | null };

export type TacticalMapUpdateSubscriptionVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TacticalMapUpdateSubscription = { __typename?: 'Subscription', tacticalMapUpdate?: { __typename?: 'TacticalMap', id?: string | null, name?: string | null, interval?: number | null, frozen?: boolean | null, template?: boolean | null, flight?: { __typename?: 'Flight', id: string } | null, layers?: Array<{ __typename?: 'TacticalLayer', id?: string | null, name?: string | null, type?: Tactical_Types | null, image?: string | null, color?: string | null, labels?: boolean | null, gridCols?: number | null, gridRows?: number | null, advance?: boolean | null, asset?: string | null, autoplay?: boolean | null, loop?: boolean | null, playbackSpeed?: number | null, opacity?: number | null, mute?: boolean | null, items?: Array<{ __typename?: 'TacticalItem', id?: string | null, layerId?: string | null, font?: string | null, label?: string | null, fontSize?: number | null, fontColor?: string | null, icon?: string | null, size?: number | null, speed?: number | null, rotation?: number | null, opacity?: number | null, flash?: boolean | null, ijkl?: boolean | null, wasd?: boolean | null, thrusters?: boolean | null, rotationMatch?: boolean | null, velocity?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, location?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, destination?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, thrusterControls?: { __typename?: 'ThrusterControls', rotation?: string | null, reversed?: boolean | null, matchRotation?: boolean | null, up?: string | null, down?: string | null, left?: string | null, right?: string | null } | null } | null> | null, paths?: Array<{ __typename?: 'TacticalPath', id?: string | null, layerId?: string | null, color?: string | null, width?: number | null, arrow?: boolean | null, start?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, end?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, c1?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null, c2?: { __typename?: 'Coordinates', x?: number | null, y?: number | null } | null } | null> | null } | null> | null } | null };

export type TacticalMapListSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TacticalMapListSubscription = { __typename?: 'Subscription', tacticalMapsUpdate?: Array<{ __typename?: 'TacticalMap', id?: string | null, name?: string | null, template?: boolean | null, flight?: { __typename?: 'Flight', id: string } | null } | null> | null };

export type UpdateLayerMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layer: TacticalLayerInput;
}>;


export type UpdateLayerMutation = { __typename?: 'Mutation', updateTacticalMapLayer?: string | null };

export type UpdateTacticalItemMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  item: TacticalItemInput;
}>;


export type UpdateTacticalItemMutation = { __typename?: 'Mutation', updateTacticalMapItem?: string | null };

export type UpdateTacticalPathMutationVariables = Exact<{
  mapId: Scalars['ID']['input'];
  layerId: Scalars['ID']['input'];
  path: TacticalPathInput;
}>;


export type UpdateTacticalPathMutation = { __typename?: 'Mutation', updateTacticalMapPath?: string | null };

export type ProbeEquipmentQueryVariables = Exact<{ [key: string]: never; }>;


export type ProbeEquipmentQuery = { __typename?: 'Query', probeEquipment: Array<{ __typename?: 'ProbeEquipment', id?: string | null, name?: string | null }> };

export type ActivateTaskFlowMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
}>;


export type ActivateTaskFlowMutation = { __typename?: 'Mutation', taskFlowActivate?: string | null };

export type TaskFlowListSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TaskFlowListSubscription = { __typename?: 'Subscription', taskFlows: Array<{ __typename?: 'TaskFlow', id: string, name: string, category: string }> };

export type TaskFlowSubSubscriptionVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type TaskFlowSubSubscription = { __typename?: 'Subscription', taskFlows: Array<{ __typename?: 'TaskFlow', id: string, name: string, category: string, currentStep: number, completed: boolean, steps: Array<{ __typename?: 'TaskFlowStep', id: string, name: string, completeAll: boolean, delay: number, completed: boolean, activeTasks: Array<{ __typename?: 'Task', id: string, station?: string | null, definition: string, verified?: boolean | null }> }> }> };

export type TemplateFragmentFragment = { __typename: 'Template', id?: string | null };

export type TemplateQueryVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type TemplateQuery = { __typename?: 'Query', _template?: { __typename: 'Template', id?: string | null } | null };

export type TemplateUpdateSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type TemplateUpdateSubscription = { __typename?: 'Subscription', _templateUpdate?: { __typename: 'Template', id?: string | null } | null };

export type AddMissionMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddMissionMutation = { __typename?: 'Mutation', createMission?: string | null };

export type ExecuteMacrosMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  macros: Array<InputMaybe<MacroInput>> | InputMaybe<MacroInput>;
}>;


export type ExecuteMacrosMutation = { __typename?: 'Mutation', triggerMacros?: string | null };

export type SetSimulatorMissionMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  missionId: Scalars['ID']['input'];
  stepId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SetSimulatorMissionMutation = { __typename?: 'Mutation', setSimulatorMission?: string | null };

export type SetSimulatorTimelineStepMutationVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
  auxTimelineId?: InputMaybe<Scalars['ID']['input']>;
  step: Scalars['Int']['input'];
}>;


export type SetSimulatorTimelineStepMutation = { __typename?: 'Mutation', setSimulatorTimelineStep?: string | null };

export type TimelineSimulatorSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type TimelineSimulatorSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, currentTimelineStep?: number | null, executedTimelineSteps?: Array<string> | null, missionConfigs?: {[key: string]: any} | null, stationSet?: { __typename?: 'StationSet', id: string } | null, mission?: { __typename?: 'Mission', id: string } | null } | null> | null };

export type TimelineMissionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TimelineMissionSubscription = { __typename?: 'Subscription', missionsUpdate: Array<{ __typename?: 'Mission', id: string, name?: string | null, description?: string | null, category?: string | null, timeline: Array<{ __typename?: 'TimelineStep', id: string, name: string, order?: number | null, description?: string | null, timelineItems: Array<{ __typename?: 'TimelineItem', id: string, name?: string | null, type?: string | null, args?: string | null, event: string, delay?: number | null }> }> }> };

export type TractorBeamTargetLabelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beam: Scalars['ID']['input'];
  label: Scalars['String']['input'];
}>;


export type TractorBeamTargetLabelMutation = { __typename?: 'Mutation', setTractorBeamTargetLabel?: string | null };

export type TractorBeamStateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beam: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
}>;


export type TractorBeamStateMutation = { __typename?: 'Mutation', setTractorBeamState?: string | null };

export type TractorBeamStrengthMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beam: Scalars['ID']['input'];
  strength: Scalars['Float']['input'];
}>;


export type TractorBeamStrengthMutation = { __typename?: 'Mutation', setTractorBeamStrength?: string | null };

export type TractorBeamStressMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beam: Scalars['ID']['input'];
  stress: Scalars['Float']['input'];
}>;


export type TractorBeamStressMutation = { __typename?: 'Mutation', setTractorBeamStress?: string | null };

export type TractorBeamUpdateSubscriptionVariables = Exact<{
  simulatorId: Scalars['ID']['input'];
}>;


export type TractorBeamUpdateSubscription = { __typename?: 'Subscription', tractorBeamUpdate?: Array<{ __typename?: 'TractorBeam', id: string, name: string, displayName: string, beams: Array<{ __typename?: 'TractorBeamBeam', id: string, state: boolean, target: boolean, targetLabel: string, strength: number, stress: number, scanning: boolean }>, damage: { __typename?: 'Damage', damaged?: boolean | null, report?: string | null }, power: { __typename?: 'Power', power?: number | null, powerLevels?: Array<number | null> | null } } | null> | null };

export type TractorBeamTargetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beam: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
}>;


export type TractorBeamTargetMutation = { __typename?: 'Mutation', setTractorBeamTarget?: string | null };

export type ClientChangedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ClientChangedSubscription = { __typename?: 'Subscription', clientChanged?: Array<{ __typename?: 'Client', id: string, label?: string | null, mobile?: boolean | null, cards?: Array<string | null> | null, loginName?: string | null, loginState?: string | null, training?: boolean | null, soundPlayer?: boolean | null, flight?: { __typename?: 'Flight', id: string, name?: string | null, date?: string | null, simulators?: Array<{ __typename?: 'Simulator', id: string, name?: string | null } | null> | null } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null, alertlevel?: string | null, layout?: string | null, interfaces?: Array<string | null> | null, stations?: Array<{ __typename?: 'Station', name: string }> | null } | null, station?: { __typename?: 'Station', name: string } | null } | null> | null };

export type DisconnectClientMutationVariables = Exact<{
  client: Scalars['ID']['input'];
}>;


export type DisconnectClientMutation = { __typename?: 'Mutation', clientDisconnect?: string | null };

export type FlightsSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FlightsSubSubscription = { __typename?: 'Subscription', flightsUpdate?: Array<{ __typename?: 'Flight', id: string, name?: string | null, date?: string | null, running?: boolean | null, simulators?: Array<{ __typename?: 'Simulator', id: string, name?: string | null, stations?: Array<{ __typename?: 'Station', name: string }> | null } | null> | null } | null> | null };

export type ClientsInterfacesAndKeyboardsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsInterfacesAndKeyboardsQuery = { __typename?: 'Query', interfaces?: Array<{ __typename?: 'Interface', id?: string | null, name?: string | null } | null> | null, keyboard?: Array<{ __typename?: 'Keyboard', id: string, name?: string | null } | null> | null, dmxSets: Array<{ __typename?: 'DMXSet', id: string, name: string }> };

export type SetClientFlightMutationVariables = Exact<{
  client: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type SetClientFlightMutation = { __typename?: 'Mutation', clientSetFlight?: string | null };

export type SetClientSimulatorMutationVariables = Exact<{
  client: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type SetClientSimulatorMutation = { __typename?: 'Mutation', clientSetSimulator?: string | null };

export type SetClientStationMutationVariables = Exact<{
  client: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type SetClientStationMutation = { __typename?: 'Mutation', clientSetStation?: string | null };

export type SetSoundPlayerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  soundPlayer: Scalars['Boolean']['input'];
}>;


export type SetSoundPlayerMutation = { __typename?: 'Mutation', clientSetSoundPlayer?: string | null };

export type ApplyClientSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightId: Scalars['ID']['input'];
  simulatorId: Scalars['ID']['input'];
  templateId: Scalars['ID']['input'];
  stationSetId: Scalars['ID']['input'];
}>;


export type ApplyClientSetMutation = { __typename?: 'Mutation', applyClientSet?: string | null };

export type DeleteFlightMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type DeleteFlightMutation = { __typename?: 'Mutation', deleteFlight?: string | null };

export type FlightQueryVariables = Exact<{ [key: string]: never; }>;


export type FlightQuery = { __typename?: 'Query', flights: Array<{ __typename?: 'Flight', id: string, name?: string | null, flightType?: string | null, transmitted?: boolean | null, running?: boolean | null }> };

export type PauseFlightMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type PauseFlightMutation = { __typename?: 'Mutation', pauseFlight?: string | null };

export type ResetFlightMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type ResetFlightMutation = { __typename?: 'Mutation', resetFlight?: string | null };

export type LobbyResumeFlightMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type LobbyResumeFlightMutation = { __typename?: 'Mutation', resumeFlight?: string | null };

export type SetsPickerQueryVariables = Exact<{
  flightId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SetsPickerQuery = { __typename?: 'Query', flights: Array<{ __typename?: 'Flight', id: string, name?: string | null, simulators?: Array<{ __typename?: 'Simulator', id: string, templateId?: string | null, name?: string | null, stationSet?: { __typename?: 'StationSet', id: string, name: string } | null } | null> | null }>, sets?: Array<{ __typename?: 'Set', id: string, name: string, clients: Array<{ __typename?: 'SetClient', id?: string | null, station?: string | null, client?: { __typename?: 'Client', id: string } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null } | null, stationSet?: { __typename?: 'StationSet', id: string, name: string } | null }> } | null> | null };

export type TransmitFlightMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type TransmitFlightMutation = { __typename?: 'Mutation', assignSpaceEdventuresFlightRecord?: string | null };

export type DmxConfigCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DmxConfigCreateMutation = { __typename?: 'Mutation', dmxConfigCreate?: string | null };

export type DmxConfigDuplicateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxConfigDuplicateMutation = { __typename?: 'Mutation', dmxConfigDuplicate?: string | null };

export type DmxConfigRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DmxConfigRemoveMutation = { __typename?: 'Mutation', dmxConfigRemove?: string | null };

export type DmxConfigSetActionStrengthMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  actionStrength: Scalars['Float']['input'];
}>;


export type DmxConfigSetActionStrengthMutation = { __typename?: 'Mutation', dmxConfigSetActionStrength?: string | null };

export type DmxConfigSetConfigMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  config: Scalars['JSON']['input'];
}>;


export type DmxConfigSetConfigMutation = { __typename?: 'Mutation', dmxConfigSetConfig?: string | null };

export type DmxConfigSetNameMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxConfigSetNameMutation = { __typename?: 'Mutation', dmxConfigSetName?: string | null };

export type DmxConfigsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type DmxConfigsSubscription = { __typename?: 'Subscription', dmxConfigs: Array<{ __typename?: 'DMXConfig', id: string, name: string, config: {[key: string]: any}, actionStrength: number }> };

export type DmxDeviceCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DmxDeviceCreateMutation = { __typename?: 'Mutation', dmxDeviceCreate?: string | null };

export type DmxDeviceRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DmxDeviceRemoveMutation = { __typename?: 'Mutation', dmxDeviceRemove?: string | null };

export type DmxDeviceSetChannelsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  channels: Array<DmxChannelProperty> | DmxChannelProperty;
}>;


export type DmxDeviceSetChannelsMutation = { __typename?: 'Mutation', dmxDeviceSetChannels?: string | null };

export type DmxDeviceSetNameMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxDeviceSetNameMutation = { __typename?: 'Mutation', dmxDeviceSetName?: string | null };

export type DmxDevicesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type DmxDevicesSubscription = { __typename?: 'Subscription', dmxDevices: Array<{ __typename?: 'DMXDevice', id: string, name: string, channels: Array<DmxChannelProperty> }> };

export type DmxFixtureCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
  dmxSetId: Scalars['ID']['input'];
  dmxDeviceId: Scalars['ID']['input'];
}>;


export type DmxFixtureCreateMutation = { __typename?: 'Mutation', dmxFixtureCreate?: string | null };

export type DmxFixtureRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  dmxSetId: Scalars['ID']['input'];
}>;


export type DmxFixtureRemoveMutation = { __typename?: 'Mutation', dmxFixtureRemove?: string | null };

export type DmxFixtureSetChannelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  channel: Scalars['Int']['input'];
}>;


export type DmxFixtureSetChannelMutation = { __typename?: 'Mutation', dmxFixtureSetChannel?: string | null };

export type DmxFixtureSetDmxDeviceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  deviceId: Scalars['ID']['input'];
}>;


export type DmxFixtureSetDmxDeviceMutation = { __typename?: 'Mutation', dmxFixtureSetDMXDevice?: string | null };

export type DmxFixtureSetModeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  mode: DmxFixtureMode;
}>;


export type DmxFixtureSetModeMutation = { __typename?: 'Mutation', dmxFixtureSetMode?: string | null };

export type DmxFixtureSetNameMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxFixtureSetNameMutation = { __typename?: 'Mutation', dmxFixtureSetName?: string | null };

export type DmxFixtureSetPassiveChannelsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  passiveChannels: DmxPassiveChannelsInput;
}>;


export type DmxFixtureSetPassiveChannelsMutation = { __typename?: 'Mutation', dmxFixtureSetPassiveChannels?: string | null };

export type DmxFixtureSetTagsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  newTags: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DmxFixtureSetTagsMutation = { __typename?: 'Mutation', dmxFixtureSetTags?: string | null };

export type DmxFixturesSubscriptionVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  clientId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DmxFixturesSubscription = { __typename?: 'Subscription', dmxFixtures: Array<{ __typename?: 'DMXFixture', id: string, name: string, channel: number, mode: DmxFixtureMode, tags: Array<string>, DMXDevice: { __typename?: 'DMXDevice', id: string, name: string, channels: Array<DmxChannelProperty> }, passiveChannels: { __typename?: 'DMXPassiveChannels', amber?: number | null, white?: number | null, uv?: number | null, intensity?: number | null, strobe?: number | null, generic?: number | null, nothing?: number | null, color?: string | null } }> };

export type DmxFixtureTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type DmxFixtureTagsQuery = { __typename?: 'Query', dmxFixtures: Array<{ __typename?: 'DMXFixture', id: string, tags: Array<string> }> };

export type DmxSetCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DmxSetCreateMutation = { __typename?: 'Mutation', dmxSetCreate?: string | null };

export type DmxSetDuplicateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxSetDuplicateMutation = { __typename?: 'Mutation', dmxSetDuplicate?: string | null };

export type DmxSetRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DmxSetRemoveMutation = { __typename?: 'Mutation', dmxSetRemove?: string | null };

export type DmxSetSetNameMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DmxSetSetNameMutation = { __typename?: 'Mutation', dmxSetSetName?: string | null };

export type DmxSetsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type DmxSetsSubscription = { __typename?: 'Subscription', dmxSets: Array<{ __typename?: 'DMXSet', id: string, name: string, fixtures: Array<{ __typename?: 'DMXFixture', id: string, name: string, channel: number, mode: DmxFixtureMode, tags: Array<string>, DMXDevice: { __typename?: 'DMXDevice', id: string, name: string, class: string, channels: Array<DmxChannelProperty> } }> }> };

export type EntityCreateTemplateMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type EntityCreateTemplateMutation = { __typename?: 'Mutation', entitySetTemplate?: string | null, entitySetIdentity?: string | null, entitySetAppearance?: string | null, entityCreate: { __typename?: 'Entity', id: string } };

export type FlightSetupQueryVariables = Exact<{ [key: string]: never; }>;


export type FlightSetupQuery = { __typename?: 'Query', simulators: Array<{ __typename?: 'Simulator', id: string, name?: string | null, spaceEdventuresId?: string | null, stationSets?: Array<{ __typename?: 'StationSet', id: string, name: string, stations: Array<{ __typename?: 'Station', name: string, widgets?: Array<string | null> | null, cards?: Array<{ __typename?: 'Card', name: string, component: string }> | null }> } | null> | null, capabilities?: { __typename?: 'SimulatorCapabilities', systems: Array<string>, docking?: boolean | null } | null }>, missions: Array<{ __typename?: 'Mission', id: string, name?: string | null, description?: string | null, category?: string | null, requirements?: { __typename?: 'SimulatorCapabilities', cards: Array<string>, systems: Array<string>, spaceEdventures?: boolean | null, docking?: boolean | null } | null }> };

export type FlightTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type FlightTypesQuery = { __typename?: 'Query', thorium?: { __typename?: 'Thorium', spaceEdventuresCenter?: { __typename?: 'SpaceEdventuresCenter', id?: string | null, name?: string | null, flightTypes?: Array<{ __typename?: 'FlightType', id?: string | null, name?: string | null, classHours?: number | null, flightHours?: number | null } | null> | null } | null } | null };

export type StartFlightMutationVariables = Exact<{
  name: Scalars['String']['input'];
  simulators: Array<SimulatorInput> | SimulatorInput;
  flightType?: InputMaybe<Scalars['String']['input']>;
}>;


export type StartFlightMutation = { __typename?: 'Mutation', startFlight?: string | null };

export type CreateNewFlightSetMutationVariables = Exact<{
  flightSet: FlightSetInput;
}>;


export type CreateNewFlightSetMutation = { __typename?: 'Mutation', createFlightSet?: string | null };

export type DeleteFlightSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteFlightSetMutation = { __typename?: 'Mutation', deleteFlightSet?: string | null };

export type GetAllFlightSetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFlightSetsQuery = { __typename?: 'Query', getAllFlightSets: Array<{ __typename?: 'FlightSet', id: string, name: string, backgroundImg: string, imageMaxX: number, imageMaxY: number, pixelsPerSecond: number, label?: string | null, probeLaunchRangeRadius: number, addOnTraining?: boolean | null, pixelDistanceModifier?: number | null, probeSpeedModifier?: number | null, startOptions: Array<{ __typename?: 'NavigationStartOptions', id: string, name: string, riskModifier: number, imgUrl: string, secondsForStartup: number }>, speedOptions: Array<{ __typename?: 'NavigationSpeedOptions', id: string, name: string, speedModifier: number, riskModifier: number, requiresMaxEngines: boolean, imgUrl: string }>, exitOptions: Array<{ __typename?: 'NavigationExitOptions', id: string, name: string, riskModifier: number, imgUrl: string }>, pointsOfInterest: Array<{ __typename?: 'PointOfInterest', id: string, name: string, isVisible: boolean, isFogOfWar: boolean, speedIndex: number, riskIndex: number, iconUrl: string, fullImageUrl: string, showName?: boolean | null, location: { __typename?: 'XYLocation', x: number, y: number }, type: { __typename?: 'PointOfInterestType', category: string, imageUri: string }, information: { __typename?: 'PointOfInterestInformation', basicInformation: string, hasBasicInformation: boolean, detailedInformation: string, hasDetailedInformation: boolean, secretInformation: string, hasSecretInformation: boolean }, transitOptions?: Array<{ __typename?: 'SecondaryStopTransitOption', name: string, timeModifier: number, riskModifier: number, iconUrl: string }> | null, arrivalMacros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null, noCancelOnReset?: boolean | null, needsConfig?: boolean | null }> | null, leaveMacros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null, noCancelOnReset?: boolean | null, needsConfig?: boolean | null }> | null, transitMacros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null, noCancelOnReset?: boolean | null, needsConfig?: boolean | null }> | null }>, defaultStartingLocation: { __typename?: 'BasicCoordinate', x: number, y: number }, borders: Array<{ __typename?: 'MapBorder', name: string, id: string, iconUrl: string, riskIndex: number, location: { __typename?: 'MapBorderLocation', side: string } }> } | null> };

export type UpdateFlightSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  flightSet: FlightSetInput;
}>;


export type UpdateFlightSetMutation = { __typename?: 'Mutation', updateFlightSet?: string | null };

export type HackingPresetCreateMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type HackingPresetCreateMutation = { __typename?: 'Mutation', createHackingPreset?: string | null };

export type HackingPresetDeleteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HackingPresetDeleteMutation = { __typename?: 'Mutation', deleteHackingPreset?: string | null };

export type HackingPresetsQueryVariables = Exact<{ [key: string]: never; }>;


export type HackingPresetsQuery = { __typename?: 'Query', hackingPresets: Array<{ __typename?: 'HackingPreset', id: string, name: string, logs: boolean, longRange: boolean, remoteControl: boolean, fileViewer: boolean, commandLines: Array<string>, longRangeMessages: Array<{ __typename?: 'HackingLRM', id: string, title: string, message: string }>, files: Array<{ __typename?: 'ComputerCoreFile', id?: string | null, name?: string | null, level?: number | null, corrupted?: boolean | null, restoring?: boolean | null }> }> };

export type HackingPresetUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  preset: Scalars['JSON']['input'];
}>;


export type HackingPresetUpdateMutation = { __typename?: 'Mutation', updateHackingPreset?: string | null };

export type MacroDuplicateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MacroDuplicateMutation = { __typename?: 'Mutation', duplicateMacro?: string | null };

export type MacroDuplicateActionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  actionId: Scalars['ID']['input'];
}>;


export type MacroDuplicateActionMutation = { __typename?: 'Mutation', duplicateMacroAction?: string | null };

export type TimelineAddItemMutationVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
  timelineItem: TimelineItemInput;
}>;


export type TimelineAddItemMutation = { __typename?: 'Mutation', addTimelineItemToTimelineStep?: string | null };

export type TimelineAddStepMutationVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type TimelineAddStepMutation = { __typename?: 'Mutation', addTimelineStep?: string | null };

export type TimelineDuplicateItemMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
  timelineItemId: Scalars['ID']['input'];
}>;


export type TimelineDuplicateItemMutation = { __typename?: 'Mutation', timelineDuplicateItem?: string | null };

export type TimelineDuplicateStepMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
}>;


export type TimelineDuplicateStepMutation = { __typename?: 'Mutation', duplicateTimelineStep?: string | null };

export type EditMissionMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  aux?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type EditMissionMutation = { __typename?: 'Mutation', editMission?: string | null };

export type IntrospectionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IntrospectionQueryQuery = { __typename?: 'Query', __schema: { __typename?: '__Schema', mutationType?: { __typename?: '__Type', name?: string | null, description?: string | null, fields?: Array<{ __typename?: '__Field', name: string, description?: string | null }> | null } | null } };

export type MissionSubscriptionSubscriptionVariables = Exact<{
  missionId: Scalars['ID']['input'];
}>;


export type MissionSubscriptionSubscription = { __typename?: 'Subscription', missionsUpdate: Array<{ __typename?: 'Mission', id: string, name?: string | null, description?: string | null, category?: string | null, aux?: boolean | null, extraRequirements?: { __typename?: 'SimulatorCapabilities', systems: Array<string>, cards: Array<string> } | null, requirements?: { __typename?: 'SimulatorCapabilities', systems: Array<string>, cards: Array<string>, spaceEdventures?: boolean | null, docking?: boolean | null } | null, timeline: Array<{ __typename?: 'TimelineStep', id: string, name: string, description?: string | null, order?: number | null, timelineItems: Array<{ __typename?: 'TimelineItem', id: string, name?: string | null, type?: string | null, event: string, args?: string | null, delay?: number | null, needsConfig?: boolean | null, noCancelOnReset?: boolean | null }> }> }> };

export type RemoveMissionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveMissionMutation = { __typename?: 'Mutation', removeMission?: string | null };

export type TimelineRemoveItemMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
  timelineItemId: Scalars['ID']['input'];
}>;


export type TimelineRemoveItemMutation = { __typename?: 'Mutation', removeTimelineStepItem?: string | null };

export type TimelineRemoveStepMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  timelineStepId: Scalars['ID']['input'];
}>;


export type TimelineRemoveStepMutation = { __typename?: 'Mutation', removeTimelineStep?: string | null };

export type TimelineReorderItemMutationVariables = Exact<{
  missionId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
  timelineItemId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
}>;


export type TimelineReorderItemMutation = { __typename?: 'Mutation', reorderTimelineItem?: string | null };

export type TimelineReorderStepMutationVariables = Exact<{
  missionId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
}>;


export type TimelineReorderStepMutation = { __typename?: 'Mutation', reorderTimelineStep?: string | null };

export type MissionSetRequirementsMutationVariables = Exact<{
  missionId: Scalars['ID']['input'];
  requirements: RequirementInput;
}>;


export type MissionSetRequirementsMutation = { __typename?: 'Mutation', missionSetExtraRequirements?: string | null };

export type TimelineUpdateItemMutationVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
  timelineItemId: Scalars['ID']['input'];
  timelineItem: TimelineItemInput;
}>;


export type TimelineUpdateItemMutation = { __typename?: 'Mutation', updateTimelineStepItem?: string | null };

export type TimelineUpdateStepMutationVariables = Exact<{
  simulatorId?: InputMaybe<Scalars['ID']['input']>;
  missionId?: InputMaybe<Scalars['ID']['input']>;
  timelineStepId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type TimelineUpdateStepMutation = { __typename?: 'Mutation', updateTimelineStep?: string | null };

export type AddClientMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  client: SetClientInput;
}>;


export type AddClientMutation = { __typename?: 'Mutation', addClientToSet?: string | null };

export type AddSetMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddSetMutation = { __typename?: 'Mutation', createSet?: string | null };

export type RemoveClientFromSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  client: Scalars['ID']['input'];
}>;


export type RemoveClientFromSetMutation = { __typename?: 'Mutation', removeClientFromSet?: string | null };

export type RemoveSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSetMutation = { __typename?: 'Mutation', removeSet?: string | null };

export type RenameSetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameSetMutation = { __typename?: 'Mutation', renameSet?: string | null };

export type SetKeyboardAndInterfaceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SetKeyboardAndInterfaceQuery = { __typename?: 'Query', simulators: Array<{ __typename?: 'Simulator', interfaces?: Array<string | null> | null }>, interfaces?: Array<{ __typename?: 'Interface', id?: string | null, name?: string | null } | null> | null, keyboard?: Array<{ __typename?: 'Keyboard', id: string, name?: string | null } | null> | null, dmxSets: Array<{ __typename?: 'DMXSet', id: string, name: string }> };

export type SetsQueryVariables = Exact<{ [key: string]: never; }>;


export type SetsQuery = { __typename?: 'Query', simulators: Array<{ __typename?: 'Simulator', id: string, name?: string | null, layout?: string | null, systems?: Array<{ __typename?: 'System', id?: string | null, type?: string | null }> | null, stationSets?: Array<{ __typename?: 'StationSet', id: string, name: string, stations: Array<{ __typename?: 'Station', name: string }> } | null> | null }>, sets?: Array<{ __typename?: 'Set', id: string, name: string, clients: Array<{ __typename?: 'SetClient', id?: string | null, station?: string | null, secondary?: boolean | null, soundPlayer?: boolean | null, client?: { __typename?: 'Client', id: string } | null, simulator?: { __typename?: 'Simulator', id: string, name?: string | null } | null, stationSet?: { __typename?: 'StationSet', id: string, name: string } | null }> } | null> | null, clients?: Array<{ __typename?: 'Client', id: string, cards?: Array<string | null> | null, mobile?: boolean | null } | null> | null };

export type UpdateSetClientMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  clientId: Scalars['ID']['input'];
  secondary?: InputMaybe<Scalars['Boolean']['input']>;
  soundPlayer?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateSetClientMutation = { __typename?: 'Mutation', updateSetClient?: string | null };

export type AddCardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  cardName: Scalars['String']['input'];
  cardComponent: Scalars['String']['input'];
  cardIcon?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddCardMutation = { __typename?: 'Mutation', addCardToStation?: string | null };

export type AddStationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type AddStationMutation = { __typename?: 'Mutation', addStationToStationSet?: string | null };

export type StationSetDuplicateMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type StationSetDuplicateMutation = { __typename?: 'Mutation', duplicateStationSet?: string | null };

export type PanelsAndInterfacesQueryVariables = Exact<{ [key: string]: never; }>;


export type PanelsAndInterfacesQuery = { __typename?: 'Query', softwarePanels?: Array<{ __typename?: 'SoftwarePanel', id?: string | null, name?: string | null } | null> | null, interfaces?: Array<{ __typename?: 'Interface', id?: string | null, name?: string | null } | null> | null };

export type RemoveCardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  cardName: Scalars['String']['input'];
}>;


export type RemoveCardMutation = { __typename?: 'Mutation', removeCardFromStation?: string | null };

export type RemoveStationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
}>;


export type RemoveStationMutation = { __typename?: 'Mutation', removeStationFromStationSet?: string | null };

export type RenameStationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  newName: Scalars['String']['input'];
}>;


export type RenameStationMutation = { __typename?: 'Mutation', editStationInStationSet?: string | null };

export type ReorderStationWidgetsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  widget: Scalars['String']['input'];
  order: Scalars['Int']['input'];
}>;


export type ReorderStationWidgetsMutation = { __typename?: 'Mutation', reorderStationWidgets?: string | null };

export type SetAmbianceMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  ambiance?: InputMaybe<Scalars['String']['input']>;
}>;


export type SetAmbianceMutation = { __typename?: 'Mutation', setStationAmbiance?: string | null };

export type SetStationCrewCountMutationVariables = Exact<{
  stationSetId: Scalars['ID']['input'];
  crewCount: Scalars['Int']['input'];
}>;


export type SetStationCrewCountMutation = { __typename?: 'Mutation', setStationSetCrewCount?: string | null };

export type SetStationDescriptionMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type SetStationDescriptionMutation = { __typename?: 'Mutation', setStationDescription?: string | null };

export type SetStationLayoutMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  layout: Scalars['String']['input'];
}>;


export type SetStationLayoutMutation = { __typename?: 'Mutation', setStationLayout?: string | null };

export type StationSetTrainingMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  training: Scalars['String']['input'];
}>;


export type StationSetTrainingMutation = { __typename?: 'Mutation', setStationTraining?: string | null };

export type ToggleStationMessageGroupMutationVariables = Exact<{
  stationSetId: Scalars['ID']['input'];
  station: Scalars['String']['input'];
  group: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
}>;


export type ToggleStationMessageGroupMutation = { __typename?: 'Mutation', toggleStationMessageGroup?: string | null };

export type ToggleStationExecMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  exec: Scalars['Boolean']['input'];
}>;


export type ToggleStationExecMutation = { __typename?: 'Mutation', setStationExecutive?: string | null };

export type ToggleStationLoginMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  login: Scalars['Boolean']['input'];
}>;


export type ToggleStationLoginMutation = { __typename?: 'Mutation', setStationLogin?: string | null };

export type ToggleStationWidgetMutationVariables = Exact<{
  stationSetID: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  widget: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
}>;


export type ToggleStationWidgetMutation = { __typename?: 'Mutation', toggleStationWidgets?: string | null };

export type UpdateStationCardMutationVariables = Exact<{
  stationSetId: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  cardName: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  component?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateStationCardMutation = { __typename?: 'Mutation', editCardInStationSet?: string | null };

export type SystemSetWingMutationVariables = Exact<{
  systemId: Scalars['ID']['input'];
  wing: Scalars['String']['input'];
}>;


export type SystemSetWingMutation = { __typename?: 'Mutation', systemSetWing?: string | null };

export type SensorsSetPingsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  ping: Scalars['Boolean']['input'];
}>;


export type SensorsSetPingsMutation = { __typename?: 'Mutation', sensorsSetHasPing?: string | null };

export type ReactorSetWingsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  hasWings: Scalars['Boolean']['input'];
}>;


export type ReactorSetWingsMutation = { __typename?: 'Mutation', reactorSetHasWings?: string | null };

export type TractorBeamSetCountMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  beams: Scalars['Int']['input'];
}>;


export type TractorBeamSetCountMutation = { __typename?: 'Mutation', setTractorBeamCount?: string | null };

export type StealthSetSensorSonarMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  sonar: Scalars['Boolean']['input'];
}>;


export type StealthSetSensorSonarMutation = { __typename?: 'Mutation', stealthSensorsSonar?: string | null };

export type RemoveSimulatorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSimulatorMutation = { __typename?: 'Mutation', removeSimulator?: string | null };

export type SimulatorsConfigSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SimulatorsConfigSubscription = { __typename?: 'Subscription', simulatorsUpdate?: Array<{ __typename?: 'Simulator', id: string, name?: string | null, alertlevel?: string | null, layout?: string | null, caps?: boolean | null, exocomps?: number | null, panels?: Array<string | null> | null, missionConfigs?: {[key: string]: any} | null, commandLines?: Array<string | null> | null, triggers?: Array<string | null> | null, interfaces?: Array<string | null> | null, midiSets?: Array<string | null> | null, stepDamage?: boolean | null, verifyStep?: boolean | null, hasPrinter?: boolean | null, hasLegs?: boolean | null, bridgeOfficerMessaging?: boolean | null, spaceEdventuresId?: string | null, soundEffects?: {[key: string]: any} | null, requiredDamageSteps?: Array<{ __typename?: 'DamageStep', id?: string | null, name?: string | null, args?: { __typename?: 'DamageStepArgs', end?: boolean | null, cleanup?: boolean | null, name?: string | null, orders?: string | null, room?: string | null, preamble?: string | null, type?: string | null, message?: string | null, code?: string | null, inventory?: string | null, destination?: string | null, equipment?: string | null, query?: string | null, reactivate?: boolean | null } | null } | null> | null, optionalDamageSteps?: Array<{ __typename?: 'DamageStep', id?: string | null, name?: string | null, args?: { __typename?: 'DamageStepArgs', end?: boolean | null, cleanup?: boolean | null, name?: string | null, orders?: string | null, room?: string | null, preamble?: string | null, type?: string | null, message?: string | null, code?: string | null, inventory?: string | null, destination?: string | null, equipment?: string | null, query?: string | null, reactivate?: boolean | null } | null } | null> | null, damageTasks?: Array<{ __typename?: 'DamageTask', id?: string | null, required?: boolean | null, taskTemplate?: { __typename?: 'TaskTemplate', id: string, name: string, definition: string, reportTypes?: Array<string> | null } | null, nextSteps?: Array<{ __typename?: 'TaskTemplate', id: string, name: string, definition: string } | null> | null } | null> | null, assets?: { __typename?: 'SimulatorAssets', mesh?: string | null, texture?: string | null, side?: string | null, top?: string | null, logo?: string | null, bridge?: string | null } | null, systems?: Array<{ __typename?: 'System', id?: string | null, type?: string | null, name?: string | null, displayName?: string | null, upgradeName?: string | null, upgradeMacros?: Array<{ __typename?: 'TimelineItem', id: string, event: string, args?: string | null, delay?: number | null } | null> | null, requiredDamageSteps?: Array<{ __typename?: 'DamageStep', id?: string | null, name?: string | null, args?: { __typename?: 'DamageStepArgs', end?: boolean | null, cleanup?: boolean | null, name?: string | null, orders?: string | null, room?: string | null, preamble?: string | null, type?: string | null, message?: string | null, code?: string | null, inventory?: string | null, destination?: string | null, equipment?: string | null, query?: string | null, reactivate?: boolean | null } | null } | null> | null, optionalDamageSteps?: Array<{ __typename?: 'DamageStep', id?: string | null, name?: string | null, args?: { __typename?: 'DamageStepArgs', end?: boolean | null, cleanup?: boolean | null, name?: string | null, orders?: string | null, room?: string | null, preamble?: string | null, type?: string | null, message?: string | null, code?: string | null, inventory?: string | null, destination?: string | null, equipment?: string | null, query?: string | null, reactivate?: boolean | null } | null } | null> | null, damageTasks?: Array<{ __typename?: 'DamageTask', id?: string | null, required?: boolean | null, taskTemplate?: { __typename?: 'TaskTemplate', id: string, name: string, definition: string, reportTypes?: Array<string> | null } | null, nextSteps?: Array<{ __typename?: 'TaskTemplate', id: string, name: string, definition: string } | null> | null } | null> | null }> | null, stationSets?: Array<{ __typename?: 'StationSet', id: string, name: string, crewCount?: number | null, stations: Array<{ __typename?: 'Station', name: string, description?: string | null, tags?: Array<string> | null, training?: string | null, ambiance?: string | null, login?: boolean | null, executive?: boolean | null, messageGroups?: Array<string | null> | null, layout?: string | null, widgets?: Array<string | null> | null, cards?: Array<{ __typename?: 'Card', name: string, component: string }> | null }> } | null> | null } | null> | null };

export type StationSetConfigSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type StationSetConfigSubscription = { __typename?: 'Subscription', stationSetUpdate?: Array<{ __typename?: 'StationSet', id: string, name: string, crewCount?: number | null, simulator?: { __typename?: 'Simulator', id: string } | null, stations: Array<{ __typename?: 'Station', name: string, description?: string | null, tags?: Array<string> | null, training?: string | null, ambiance?: string | null, login?: boolean | null, messageGroups?: Array<string | null> | null, executive?: boolean | null, widgets?: Array<string | null> | null, layout?: string | null, cards?: Array<{ __typename?: 'Card', name: string, component: string }> | null }> } | null> | null };

export type StationSetTagsMutationVariables = Exact<{
  stationSetId: Scalars['ID']['input'];
  stationName: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type StationSetTagsMutation = { __typename?: 'Mutation', setStationTags?: string | null };

export type AddTaskTemplateMutationVariables = Exact<{
  definition: Scalars['String']['input'];
}>;


export type AddTaskTemplateMutation = { __typename?: 'Mutation', addTaskTemplate?: string | null };

export type ImportTemplatesMutationVariables = Exact<{ [key: string]: never; }>;


export type ImportTemplatesMutation = { __typename?: 'Mutation', importTaskTemplates?: string | null };

export type RemoveTaskTemplateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveTaskTemplateMutation = { __typename?: 'Mutation', removeTaskTemplate?: string | null };

export type RenameTaskTemplateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameTaskTemplateMutation = { __typename?: 'Mutation', renameTaskTemplate?: string | null };

export type SetTaskMacroMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  macros: Array<ActionInput> | ActionInput;
}>;


export type SetTaskMacroMutation = { __typename?: 'Mutation', setTaskTemplateMacros?: string | null };

export type SetTaskPreMacroMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  macros: Array<ActionInput> | ActionInput;
}>;


export type SetTaskPreMacroMutation = { __typename?: 'Mutation', setTaskTemplatePreMacros?: string | null };

export type SetTaskTemplateReportTypesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  reportTypes: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type SetTaskTemplateReportTypesMutation = { __typename?: 'Mutation', setTaskTemplateReportTypes?: string | null };

export type SetTaskTemplateValuesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  values: Scalars['JSON']['input'];
}>;


export type SetTaskTemplateValuesMutation = { __typename?: 'Mutation', setTaskTemplateValues?: string | null };

export type TaskDefinitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskDefinitionsQuery = { __typename?: 'Query', taskDefinitions: Array<{ __typename?: 'TaskDefinition', id: string, class: string, name: string, valuesInput: {[key: string]: any}, valuesValue: {[key: string]: any}, active: boolean, stations?: Array<{ __typename?: 'Station', name: string, cards?: Array<{ __typename?: 'Card', name: string, component: string }> | null } | null> | null }>, thorium?: { __typename?: 'Thorium', addedTaskTemplates?: boolean | null } | null };

export type TaskFlowAddMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type TaskFlowAddMutation = { __typename?: 'Mutation', taskFlowAdd?: string | null };

export type TaskFlowAddStepMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type TaskFlowAddStepMutation = { __typename?: 'Mutation', taskFlowAddStep?: string | null };

export type TaskFlowRemoveMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TaskFlowRemoveMutation = { __typename?: 'Mutation', taskFlowRemove?: string | null };

export type TaskFlowRemoveStepMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
}>;


export type TaskFlowRemoveStepMutation = { __typename?: 'Mutation', taskFlowRemoveStep?: string | null };

export type TaskFlowRenameMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type TaskFlowRenameMutation = { __typename?: 'Mutation', taskFlowRename?: string | null };

export type TaskFlowRenameStepMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type TaskFlowRenameStepMutation = { __typename?: 'Mutation', taskFlowRenameStep?: string | null };

export type TaskFlowReorderStepMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
}>;


export type TaskFlowReorderStepMutation = { __typename?: 'Mutation', taskFlowReorderStep?: string | null };

export type TaskFlowSetCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  category: Scalars['String']['input'];
}>;


export type TaskFlowSetCategoryMutation = { __typename?: 'Mutation', taskFlowSetCategory?: string | null };

export type TaskFlowStepAddTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  task: TaskInput;
}>;


export type TaskFlowStepAddTaskMutation = { __typename?: 'Mutation', taskFlowStepAddTask?: string | null };

export type TaskFlowStepEditTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
  task: TaskInput;
}>;


export type TaskFlowStepEditTaskMutation = { __typename?: 'Mutation', taskFlowStepEditTask?: string | null };

export type TaskFlowStepRemoveTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
}>;


export type TaskFlowStepRemoveTaskMutation = { __typename?: 'Mutation', taskFlowStepRemoveTask?: string | null };

export type TaskFlowStepCompleteAllMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  completeAll: Scalars['Boolean']['input'];
}>;


export type TaskFlowStepCompleteAllMutation = { __typename?: 'Mutation', taskFlowStepSetCompleteAll?: string | null };

export type TaskFlowStepDelayMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  stepId: Scalars['ID']['input'];
  delay: Scalars['Int']['input'];
}>;


export type TaskFlowStepDelayMutation = { __typename?: 'Mutation', taskFlowStepSetDelay?: string | null };

export type TaskFlowsConfigSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TaskFlowsConfigSubscription = { __typename?: 'Subscription', taskFlows: Array<{ __typename?: 'TaskFlow', id: string, name: string, category: string, steps: Array<{ __typename?: 'TaskFlowStep', id: string, name: string, delay: number, completeAll: boolean, tasks: Array<{ __typename?: 'Task', id: string, station?: string | null, stationTags?: Array<string> | null, definition: string, values?: {[key: string]: any} | null, private?: boolean | null, macros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null }> | null, preMacros: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null }> }> }> }> };

export type TaskTemplatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TaskTemplatesSubscription = { __typename?: 'Subscription', taskTemplatesUpdate: Array<{ __typename?: 'TaskTemplate', id: string, name: string, definition: string, values?: {[key: string]: any} | null, reportTypes?: Array<string> | null, macros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null }> | null, preMacros?: Array<{ __typename?: 'MacroAction', id: string, event: string, args: string, delay?: number | null }> | null }> };

export type EntityRemoveEngineMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  type: EntityEngineEnum;
}>;


export type EntityRemoveEngineMutation = { __typename?: 'Mutation', entityRemoveEngine?: string | null };

export type EntityRemoveThrustersMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EntityRemoveThrustersMutation = { __typename?: 'Mutation', entityRemoveThrusters?: string | null };

export type EntitySetEngineMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  type: EntityEngineEnum;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  currentSpeed?: InputMaybe<Scalars['Float']['input']>;
}>;


export type EntitySetEngineMutation = { __typename?: 'Mutation', entitySetEngine?: string | null };

export type EntitySetThrustersMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  rotationSpeed?: InputMaybe<Scalars['Float']['input']>;
  movementSpeed?: InputMaybe<Scalars['Float']['input']>;
  direction?: InputMaybe<CoordinatesInput>;
  rotationDelta?: InputMaybe<CoordinatesInput>;
}>;


export type EntitySetThrustersMutation = { __typename?: 'Mutation', entitySetThrusters?: string | null };

export type EntitiesSetPositionMutationVariables = Exact<{
  entities: Array<EntitiesLocationInput> | EntitiesLocationInput;
}>;


export type EntitiesSetPositionMutation = { __typename?: 'Mutation', entitiesSetPosition?: string | null };

export type EntityCreateMutationVariables = Exact<{
  flightId: Scalars['ID']['input'];
  position: EntityCoordinatesInput;
  name: Scalars['String']['input'];
  stageParentId: Scalars['ID']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  meshType: MeshTypeEnum;
  modelAsset?: InputMaybe<Scalars['String']['input']>;
  materialMapAsset?: InputMaybe<Scalars['String']['input']>;
  ringMapAsset?: InputMaybe<Scalars['String']['input']>;
  cloudMapAsset?: InputMaybe<Scalars['String']['input']>;
  emissiveColor?: InputMaybe<Scalars['String']['input']>;
  emissiveIntensity?: InputMaybe<Scalars['Float']['input']>;
  glowMode?: InputMaybe<GlowModeEnum>;
  glowColor?: InputMaybe<Scalars['String']['input']>;
  lightIntensity?: InputMaybe<Scalars['Float']['input']>;
  lightDecay?: InputMaybe<Scalars['Float']['input']>;
  lightColor?: InputMaybe<Scalars['String']['input']>;
}>;


export type EntityCreateMutation = { __typename?: 'Mutation', entitySetStageChild?: string | null, entitySetLocation?: string | null, entitySetIdentity?: string | null, entitySetAppearance?: string | null, entitySetGlow?: string | null, entitySetLight?: string | null, entityCreate: { __typename?: 'Entity', id: string } };

export type EntityDataFragment = { __typename?: 'Entity', id: string, interval?: number | null, identity?: { __typename?: 'IdentityComponent', name?: string | null } | null, stage?: { __typename?: 'StageComponent', scaleLabel?: string | null, scaleLabelShort?: string | null, skyboxKey?: string | null, childrenAsSprites?: boolean | null } | null, stageChild?: { __typename?: 'StageChildComponent', parentId: string, parent?: { __typename?: 'Entity', id: string, identity?: { __typename?: 'IdentityComponent', name?: string | null } | null } | null } | null, appearance?: { __typename?: 'AppearanceComponent', color?: string | null, meshType?: MeshTypeEnum | null, modelAsset?: string | null, materialMapAsset?: string | null, ringMapAsset?: string | null, cloudMapAsset?: string | null, emissiveColor?: string | null, emissiveIntensity?: number | null, scale?: number | null } | null, light?: { __typename?: 'LightComponent', intensity?: number | null, decay?: number | null, color?: string | null } | null, glow?: { __typename?: 'GlowComponent', glowMode?: GlowModeEnum | null, color?: string | null } | null, location?: { __typename?: 'LocationComponent', inert: boolean, position: { __typename?: 'EntityCoordinates', x: number, y: number, z: number }, rotation: { __typename?: 'Quaternion', x: number, y: number, z: number, w: number } } | null, enginesWarp?: { __typename?: 'EngineComponent', maxSpeed?: number | null, currentSpeed?: number | null } | null, enginesImpulse?: { __typename?: 'EngineComponent', maxSpeed?: number | null, currentSpeed?: number | null } | null, thrusters?: { __typename?: 'ThrustersComponent', rotationSpeed?: number | null, movementSpeed?: number | null } | null };

export type EntitiesQueryVariables = Exact<{
  flightId: Scalars['ID']['input'];
}>;


export type EntitiesQuery = { __typename?: 'Query', entities: Array<{ __typename?: 'Entity', id: string, interval?: number | null, identity?: { __typename?: 'IdentityComponent', name?: string | null } | null, stage?: { __typename?: 'StageComponent', scaleLabel?: string | null, scaleLabelShort?: string | null, skyboxKey?: string | null, childrenAsSprites?: boolean | null } | null, stageChild?: { __typename?: 'StageChildComponent', parentId: string, parent?: { __typename?: 'Entity', id: string, identity?: { __typename?: 'IdentityComponent', name?: string | null } | null } | null } | null, appearance?: { __typename?: 'AppearanceComponent', color?: string | null, meshType?: MeshTypeEnum | null, modelAsset?: string | null, materialMapAsset?: string | null, ringMapAsset?: string | null, cloudMapAsset?: string | null, emissiveColor?: string | null, emissiveIntensity?: number | null, scale?: number | null } | null, light?: { __typename?: 'LightComponent', intensity?: number | null, decay?: number | null, color?: string | null } | null, glow?: { __typename?: 'GlowComponent', glowMode?: GlowModeEnum | null, color?: string | null } | null, location?: { __typename?: 'LocationComponent', inert: boolean, position: { __typename?: 'EntityCoordinates', x: number, y: number, z: number }, rotation: { __typename?: 'Quaternion', x: number, y: number, z: number, w: number } } | null, enginesWarp?: { __typename?: 'EngineComponent', maxSpeed?: number | null, currentSpeed?: number | null } | null, enginesImpulse?: { __typename?: 'EngineComponent', maxSpeed?: number | null, currentSpeed?: number | null } | null, thrusters?: { __typename?: 'ThrustersComponent', rotationSpeed?: number | null, movementSpeed?: number | null } | null } | null> };

export type EntityRemoveMutationVariables = Exact<{
  id: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type EntityRemoveMutation = { __typename?: 'Mutation', entityRemove?: string | null };

export type EntityRemoveGlowMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EntityRemoveGlowMutation = { __typename?: 'Mutation', entityRemoveGlow?: string | null };

export type EntityRemoveLightMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EntityRemoveLightMutation = { __typename?: 'Mutation', entityRemoveLight?: string | null };

export type EntityRemoveStageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EntityRemoveStageMutation = { __typename?: 'Mutation', entityRemoveStage?: string | null };

export type EntitySetAppearanceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  meshType?: InputMaybe<MeshTypeEnum>;
  modelAsset?: InputMaybe<Scalars['String']['input']>;
  materialMapAsset?: InputMaybe<Scalars['String']['input']>;
  cloudMapAsset?: InputMaybe<Scalars['String']['input']>;
  ringMapAsset?: InputMaybe<Scalars['String']['input']>;
  emissiveColor?: InputMaybe<Scalars['String']['input']>;
  emissiveIntensity?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Float']['input']>;
}>;


export type EntitySetAppearanceMutation = { __typename?: 'Mutation', entitySetAppearance?: string | null };

export type EntitySetGlowMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  glowMode?: InputMaybe<GlowModeEnum>;
  color?: InputMaybe<Scalars['String']['input']>;
}>;


export type EntitySetGlowMutation = { __typename?: 'Mutation', entitySetGlow?: string | null };

export type EntitySetIdentityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type EntitySetIdentityMutation = { __typename?: 'Mutation', entitySetIdentity?: string | null };

export type EntitySetLightMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  intensity?: InputMaybe<Scalars['Float']['input']>;
  decay?: InputMaybe<Scalars['Float']['input']>;
}>;


export type EntitySetLightMutation = { __typename?: 'Mutation', entitySetLight?: string | null };

export type EntitySetLocationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  position?: InputMaybe<EntityCoordinatesInput>;
  velocity?: InputMaybe<EntityCoordinatesInput>;
  acceleration?: InputMaybe<EntityCoordinatesInput>;
  rotation?: InputMaybe<QuaternionInput>;
  rotationVelocity?: InputMaybe<EntityCoordinatesInput>;
  rotationAcceleration?: InputMaybe<EntityCoordinatesInput>;
}>;


export type EntitySetLocationMutation = { __typename?: 'Mutation', entitySetLocation?: string | null };

export type EntitySetRotationVelocityMagnitudeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  rotationVelocity: CoordinatesInput;
}>;


export type EntitySetRotationVelocityMagnitudeMutation = { __typename?: 'Mutation', entitySetRotationVelocityMagnitude?: string | null };

export type EntitySetStageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  scaleLabel?: InputMaybe<Scalars['String']['input']>;
  scaleLabelShort?: InputMaybe<Scalars['String']['input']>;
  skyboxKey?: InputMaybe<Scalars['String']['input']>;
}>;


export type EntitySetStageMutation = { __typename?: 'Mutation', entitySetStage?: string | null };

export type EntitySetTemplateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  category: Scalars['String']['input'];
}>;


export type EntitySetTemplateMutation = { __typename?: 'Mutation', entitySetTemplate?: string | null };

export type SoundPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type SoundPickerQuery = { __typename?: 'Query', assetFolders?: Array<{ __typename?: 'AssetFolder', id: string, name: string, fullPath: string, folderPath: string, objects: Array<{ __typename?: 'AssetObject', id: string, name: string, fullPath: string }> } | null> | null };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "HeatInterface": [],
    "Location": [
      "Deck",
      "Room"
    ],
    "SystemInterface": [
      "AdvancedNavigationAndAstrometrics",
      "CoolantTank",
      "Countermeasures",
      "Crm",
      "Engine",
      "HullPlating",
      "InternalComm",
      "JumpDrive",
      "LRCommunications",
      "Navigation",
      "Phaser",
      "Probes",
      "Railgun",
      "Reactor",
      "Sensors",
      "Shield",
      "ShortRangeComm",
      "Sickbay",
      "SignalJammer",
      "StealthField",
      "SubspaceField",
      "System",
      "Targeting",
      "Thruster",
      "Thx",
      "Torpedo",
      "TractorBeam",
      "Transporter",
      "Transwarp"
    ]
  }
};
      export default result;
    
export const ClientDataFragmentDoc = gql`
    fragment ClientData on Client {
  id
  token
  email
  cracked
  flight {
    id
    name
    date
  }
  simulator {
    id
    name
  }
  station {
    name
  }
  currentCard {
    name
    component
  }
  loginName
  loginState
  offlineState
  hypercard
  movie
  training
  caches
  overlay
  soundPlayer
}
    `;
export const SimulatorDataFragmentDoc = gql`
    fragment SimulatorData on Simulator {
  id
  name
  caps
  alertlevel
  layout
  bridgeOfficerMessaging
  training
  hasPrinter
  hasLegs
  panels
  flipped
  assets {
    mesh
    texture
    side
    top
    logo
    bridge
  }
  soundEffects
  stations {
    name
    login
    training
    ambiance
    executive
    layout
    messageGroups
    widgets
    cards {
      name
      component
      hidden
      assigned
      newStation
    }
  }
}
    `;
export const CountermeasureModuleFragmentDoc = gql`
    fragment CountermeasureModule on CountermeasureModule {
  id
  name
  config
  buildProgress
  activated
  powerRequirement
  resourceRequirements {
    copper
    titanium
    carbon
    plastic
    plasma
  }
  configurationOptions {
    type
    label
  }
}
    `;
export const CountermeasureFragmentDoc = gql`
    fragment Countermeasure on Countermeasure {
  id
  name
  modules {
    ...CountermeasureModule
  }
  locked
  active
  building
  totalPowerUsed
  readyToLaunch
  powerUsage
  availablePower
  buildPercentage
  note
}
    ${CountermeasureModuleFragmentDoc}`;
export const TemplateFragmentFragmentDoc = gql`
    fragment TemplateFragment on Template {
  id
  __typename
}
    `;
export const EntityDataFragmentDoc = gql`
    fragment EntityData on Entity {
  id
  interval
  identity {
    name
  }
  stage {
    scaleLabel
    scaleLabelShort
    skyboxKey
    childrenAsSprites
  }
  stageChild {
    parentId
    parent {
      id
      identity {
        name
      }
    }
  }
  appearance {
    color
    meshType
    modelAsset
    materialMapAsset
    ringMapAsset
    cloudMapAsset
    emissiveColor
    emissiveIntensity
    scale
  }
  light {
    intensity
    decay
    color
  }
  glow {
    glowMode
    color
  }
  location {
    inert
    position {
      x
      y
      z
    }
    rotation {
      x
      y
      z
      w
    }
  }
  enginesWarp {
    maxSpeed
    currentSpeed
  }
  enginesImpulse {
    maxSpeed
    currentSpeed
  }
  thrusters {
    rotationSpeed
    movementSpeed
  }
}
    `;
export const ActivateLightingDocument = gql`
    mutation ActivateLighting($clientId: ID!, $dmxSetId: ID!) {
  clientActivateLights(clientId: $clientId, dmxSetId: $dmxSetId)
}
    `;
export function useActivateLightingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ActivateLightingMutation, ActivateLightingMutationVariables>) {
        return ApolloReactHooks.useMutation<ActivateLightingMutation, ActivateLightingMutationVariables>(ActivateLightingDocument, baseOptions);
      }
export type ActivateLightingMutationHookResult = ReturnType<typeof useActivateLightingMutation>;
export const AmbianceDocument = gql`
    query Ambiance($id: ID!) {
  simulators(id: $id) {
    id
    ambiance {
      id
      name
      asset
      volume
      channel
      playbackRate
    }
  }
}
    `;
export function useAmbianceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AmbianceQuery, AmbianceQueryVariables>) {
        return ApolloReactHooks.useQuery<AmbianceQuery, AmbianceQueryVariables>(AmbianceDocument, baseOptions);
      }
export type AmbianceQueryHookResult = ReturnType<typeof useAmbianceQuery>;
export const ClientDocument = gql`
    query Client($clientId: ID!) {
  clients(clientId: $clientId) {
    ...ClientData
  }
}
    ${ClientDataFragmentDoc}`;
export function useClientQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClientQuery, ClientQueryVariables>) {
        return ApolloReactHooks.useQuery<ClientQuery, ClientQueryVariables>(ClientDocument, baseOptions);
      }
export type ClientQueryHookResult = ReturnType<typeof useClientQuery>;
export const ClientUpdateDocument = gql`
    subscription ClientUpdate($clientId: ID!) {
  clientChanged(clientId: $clientId) {
    ...ClientData
  }
}
    ${ClientDataFragmentDoc}`;
export function useClientUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ClientUpdateSubscription, ClientUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ClientUpdateSubscription, ClientUpdateSubscriptionVariables>(ClientUpdateDocument, baseOptions);
      }
export type ClientUpdateSubscriptionHookResult = ReturnType<typeof useClientUpdateSubscription>;
export const ClientPingDocument = gql`
    mutation ClientPing($clientId: ID!) {
  clientPing(client: $clientId)
}
    `;
export function useClientPingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClientPingMutation, ClientPingMutationVariables>) {
        return ApolloReactHooks.useMutation<ClientPingMutation, ClientPingMutationVariables>(ClientPingDocument, baseOptions);
      }
export type ClientPingMutationHookResult = ReturnType<typeof useClientPingMutation>;
export const LightingControlDocument = gql`
    subscription LightingControl($simulatorId: ID!) {
  simulatorsUpdate(simulatorId: $simulatorId) {
    id
    lighting {
      intensity
      action
      actionStrength
      transitionDuration
      dmxConfig {
        id
        config
        actionStrength
      }
    }
    alertlevel
    training
  }
}
    `;
export function useLightingControlSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<LightingControlSubscription, LightingControlSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<LightingControlSubscription, LightingControlSubscriptionVariables>(LightingControlDocument, baseOptions);
      }
export type LightingControlSubscriptionHookResult = ReturnType<typeof useLightingControlSubscription>;
export const RegisterClientDocument = gql`
    mutation RegisterClient($client: ID!) {
  clientConnect(client: $client)
}
    `;
export function useRegisterClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterClientMutation, RegisterClientMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterClientMutation, RegisterClientMutationVariables>(RegisterClientDocument, baseOptions);
      }
export type RegisterClientMutationHookResult = ReturnType<typeof useRegisterClientMutation>;
export const RemoveClientDocument = gql`
    mutation RemoveClient($client: ID!) {
  clientDisconnect(client: $client)
}
    `;
export function useRemoveClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveClientMutation, RemoveClientMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveClientMutation, RemoveClientMutationVariables>(RemoveClientDocument, baseOptions);
      }
export type RemoveClientMutationHookResult = ReturnType<typeof useRemoveClientMutation>;
export const SimulatorDocument = gql`
    query Simulator($simulatorId: ID!) {
  simulators(id: $simulatorId) {
    ...SimulatorData
  }
}
    ${SimulatorDataFragmentDoc}`;
export function useSimulatorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SimulatorQuery, SimulatorQueryVariables>) {
        return ApolloReactHooks.useQuery<SimulatorQuery, SimulatorQueryVariables>(SimulatorDocument, baseOptions);
      }
export type SimulatorQueryHookResult = ReturnType<typeof useSimulatorQuery>;
export const SimulatorUpdateDocument = gql`
    subscription SimulatorUpdate($simulatorId: ID!) {
  simulatorsUpdate(simulatorId: $simulatorId) {
    ...SimulatorData
  }
}
    ${SimulatorDataFragmentDoc}`;
export function useSimulatorUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SimulatorUpdateSubscription, SimulatorUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SimulatorUpdateSubscription, SimulatorUpdateSubscriptionVariables>(SimulatorUpdateDocument, baseOptions);
      }
export type SimulatorUpdateSubscriptionHookResult = ReturnType<typeof useSimulatorUpdateSubscription>;
export const MacroDmxConfigsDocument = gql`
    query MacroDMXConfigs {
  dmxConfigs {
    id
    name
  }
}
    `;
export function useMacroDmxConfigsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MacroDmxConfigsQuery, MacroDmxConfigsQueryVariables>) {
        return ApolloReactHooks.useQuery<MacroDmxConfigsQuery, MacroDmxConfigsQueryVariables>(MacroDmxConfigsDocument, baseOptions);
      }
export type MacroDmxConfigsQueryHookResult = ReturnType<typeof useMacroDmxConfigsQuery>;
export const DockingShuttleConfigDocument = gql`
    query DockingShuttleConfig($simulatorId: ID!) {
  docking(simulatorId: $simulatorId) {
    id
    name
    type
    image
    shipName
    clamps
    compress
    doors
    docked
    direction
  }
  assetFolders(names: ["Docking Images"]) {
    id
    name
    objects {
      id
      name
      fullPath
    }
  }
}
    `;
export function useDockingShuttleConfigQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DockingShuttleConfigQuery, DockingShuttleConfigQueryVariables>) {
        return ApolloReactHooks.useQuery<DockingShuttleConfigQuery, DockingShuttleConfigQueryVariables>(DockingShuttleConfigDocument, baseOptions);
      }
export type DockingShuttleConfigQueryHookResult = ReturnType<typeof useDockingShuttleConfigQuery>;
export const MissionMacrosDocument = gql`
    query MissionMacros {
  missions {
    id
    name
    category
    timeline {
      id
      name
    }
  }
}
    `;
export function useMissionMacrosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MissionMacrosQuery, MissionMacrosQueryVariables>) {
        return ApolloReactHooks.useQuery<MissionMacrosQuery, MissionMacrosQueryVariables>(MissionMacrosDocument, baseOptions);
      }
export type MissionMacrosQueryHookResult = ReturnType<typeof useMissionMacrosQuery>;
export const RemoteAssetLoadDocument = gql`
    mutation RemoteAssetLoad($folderPath: String!, $files: [RemoteAsset!]!) {
  downloadRemoteAssets(folderPath: $folderPath, files: $files)
}
    `;
export function useRemoteAssetLoadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoteAssetLoadMutation, RemoteAssetLoadMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoteAssetLoadMutation, RemoteAssetLoadMutationVariables>(RemoteAssetLoadDocument, baseOptions);
      }
export type RemoteAssetLoadMutationHookResult = ReturnType<typeof useRemoteAssetLoadMutation>;
export const HandleAddFlightSetToNavigationDocument = gql`
    mutation HandleAddFlightSetToNavigation($id: ID!, $flightSetId: ID!) {
  handleAddFlightSetToNavigation(id: $id, flightSetId: $flightSetId)
}
    `;
export function useHandleAddFlightSetToNavigationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleAddFlightSetToNavigationMutation, HandleAddFlightSetToNavigationMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleAddFlightSetToNavigationMutation, HandleAddFlightSetToNavigationMutationVariables>(HandleAddFlightSetToNavigationDocument, baseOptions);
      }
export type HandleAddFlightSetToNavigationMutationHookResult = ReturnType<typeof useHandleAddFlightSetToNavigationMutation>;
export const GetAdvancedNavAndAstrometricsDocument = gql`
    query GetAdvancedNavAndAstrometrics($simulatorId: ID!) {
  advancedNavAndAstrometrics(simulatorId: $simulatorId) {
    id
    simulatorId
    type
    name
    power {
      power
      powerLevels
    }
    damage {
      damaged
      report
    }
    displayName
    stealthFactor
    flightSets {
      id
      name
      backgroundImg
      pixelDistanceModifier
      startOptions {
        id
        name
        riskModifier
        imgUrl
        secondsForStartup
      }
      speedOptions {
        id
        name
        speedModifier
        riskModifier
        requiresMaxEngines
        imgUrl
      }
      exitOptions {
        id
        name
        riskModifier
        imgUrl
      }
      pointsOfInterest {
        id
        name
        location {
          x
          y
        }
        isVisible
        isFogOfWar
        speedIndex
        riskIndex
        type {
          category
          imageUri
        }
        information {
          basicInformation
          hasBasicInformation
          detailedInformation
          hasDetailedInformation
          secretInformation
          hasSecretInformation
        }
        iconUrl
        fullImageUrl
        transitOptions {
          name
          timeModifier
          riskModifier
          iconUrl
        }
        showName
      }
      defaultStartingLocation {
        x
        y
      }
      borders {
        name
        id
        location {
          side
        }
        iconUrl
        riskIndex
      }
      imageMaxX
      imageMaxY
      pixelsPerSecond
      label
      probeLaunchRangeRadius
      addOnTraining
    }
    currentLocation {
      x
      y
    }
    coolantLevel
    heatLevel
    flightPaths {
      name
      id
      targetLocationId
      secondaryRouteOptions {
        targetLocationId
      }
      isBorder
      startOption {
        id
        name
        riskModifier
        imgUrl
        secondsForStartup
      }
      speedOption {
        id
        name
        speedModifier
        riskModifier
        requiresMaxEngines
        imgUrl
      }
      exitOption {
        id
        name
        riskModifier
        imgUrl
      }
    }
    engineStatus
    hasEmergencyPower
    startingStartupTime
    remainingEta
    totalEta
    flightPathCoords {
      speed
      color
      x
      y
    }
    remainingStartupTime
    showEta
    showFlightSet
    currentFlightSet {
      id
      name
      backgroundImg
      startOptions {
        id
        name
        riskModifier
        imgUrl
        secondsForStartup
      }
      speedOptions {
        id
        name
        speedModifier
        riskModifier
        requiresMaxEngines
        imgUrl
      }
      exitOptions {
        id
        name
        riskModifier
        imgUrl
      }
      pointsOfInterest {
        id
        name
        location {
          x
          y
        }
        isVisible
        isFogOfWar
        speedIndex
        riskIndex
        type {
          category
          imageUri
        }
        information {
          basicInformation
          hasBasicInformation
          detailedInformation
          hasDetailedInformation
          secretInformation
          hasSecretInformation
        }
        iconUrl
        fullImageUrl
        transitOptions {
          name
          timeModifier
          riskModifier
          iconUrl
        }
        showName
      }
      defaultStartingLocation {
        x
        y
      }
      borders {
        name
        id
        location {
          side
        }
        iconUrl
        riskIndex
      }
      imageMaxX
      imageMaxY
      pixelsPerSecond
      label
      probeLaunchRangeRadius
      addOnTraining
    }
    currentFlightPath {
      targetLocationId
      secondaryRouteOptions {
        targetLocationId
      }
      isBorder
      startOption {
        id
        name
        riskModifier
        imgUrl
        secondsForStartup
      }
      speedOption {
        id
        name
        speedModifier
        riskModifier
        requiresMaxEngines
        imgUrl
      }
      exitOption {
        id
        name
        riskModifier
        imgUrl
      }
    }
    currentLocationName
    currentLocationUrl
    probes {
      id
      name
      type
      equipment {
        id
        count
      }
    }
    flightSetPathMap
    probeAssignments
  }
}
    `;
export function useGetAdvancedNavAndAstrometricsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAdvancedNavAndAstrometricsQuery, GetAdvancedNavAndAstrometricsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAdvancedNavAndAstrometricsQuery, GetAdvancedNavAndAstrometricsQueryVariables>(GetAdvancedNavAndAstrometricsDocument, baseOptions);
      }
export type GetAdvancedNavAndAstrometricsQueryHookResult = ReturnType<typeof useGetAdvancedNavAndAstrometricsQuery>;
export const GetBasicFlightSetsDocument = gql`
    query GetBasicFlightSets {
  getAllFlightSets {
    id
    name
    label
  }
}
    `;
export function useGetBasicFlightSetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBasicFlightSetsQuery, GetBasicFlightSetsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBasicFlightSetsQuery, GetBasicFlightSetsQueryVariables>(GetBasicFlightSetsDocument, baseOptions);
      }
export type GetBasicFlightSetsQueryHookResult = ReturnType<typeof useGetBasicFlightSetsQuery>;
export const HandleAddProbeAssignmentDocument = gql`
    mutation HandleAddProbeAssignment($id: ID!, $probeId: ID!, $poiId: ID!) {
  handleAddProbeAssignment(id: $id, probeId: $probeId, poiId: $poiId)
}
    `;
export function useHandleAddProbeAssignmentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleAddProbeAssignmentMutation, HandleAddProbeAssignmentMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleAddProbeAssignmentMutation, HandleAddProbeAssignmentMutationVariables>(HandleAddProbeAssignmentDocument, baseOptions);
      }
export type HandleAddProbeAssignmentMutationHookResult = ReturnType<typeof useHandleAddProbeAssignmentMutation>;
export const HandleUpdateAdvNavFlightSetDataDocument = gql`
    mutation HandleUpdateAdvNavFlightSetData($id: ID!, $flightSet: FlightSetInput!) {
  updateAdvNavFlightSetData(id: $id, flightSet: $flightSet)
}
    `;
export function useHandleUpdateAdvNavFlightSetDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateAdvNavFlightSetDataMutation, HandleUpdateAdvNavFlightSetDataMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateAdvNavFlightSetDataMutation, HandleUpdateAdvNavFlightSetDataMutationVariables>(HandleUpdateAdvNavFlightSetDataDocument, baseOptions);
      }
export type HandleUpdateAdvNavFlightSetDataMutationHookResult = ReturnType<typeof useHandleUpdateAdvNavFlightSetDataMutation>;
export const HandleAdvancedNavCoolantFlushDocument = gql`
    mutation HandleAdvancedNavCoolantFlush($id: ID!) {
  handleCoolantFlush(id: $id)
}
    `;
export function useHandleAdvancedNavCoolantFlushMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleAdvancedNavCoolantFlushMutation, HandleAdvancedNavCoolantFlushMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleAdvancedNavCoolantFlushMutation, HandleAdvancedNavCoolantFlushMutationVariables>(HandleAdvancedNavCoolantFlushDocument, baseOptions);
      }
export type HandleAdvancedNavCoolantFlushMutationHookResult = ReturnType<typeof useHandleAdvancedNavCoolantFlushMutation>;
export const HandleEmergencyStopDocument = gql`
    mutation HandleEmergencyStop($id: ID!) {
  handleEmergencyStop(id: $id)
}
    `;
export function useHandleEmergencyStopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleEmergencyStopMutation, HandleEmergencyStopMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleEmergencyStopMutation, HandleEmergencyStopMutationVariables>(HandleEmergencyStopDocument, baseOptions);
      }
export type HandleEmergencyStopMutationHookResult = ReturnType<typeof useHandleEmergencyStopMutation>;
export const HandleEngageFlightPathDocument = gql`
    mutation HandleEngageFlightPath($id: ID!, $path: NavigationRouteInput!) {
  handleEngageFlightPath(id: $id, path: $path)
}
    `;
export function useHandleEngageFlightPathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleEngageFlightPathMutation, HandleEngageFlightPathMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleEngageFlightPathMutation, HandleEngageFlightPathMutationVariables>(HandleEngageFlightPathDocument, baseOptions);
      }
export type HandleEngageFlightPathMutationHookResult = ReturnType<typeof useHandleEngageFlightPathMutation>;
export const HandleEngineFluxDocument = gql`
    mutation HandleEngineFlux($id: ID!) {
  handleEngineFlux(id: $id)
}
    `;
export function useHandleEngineFluxMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleEngineFluxMutation, HandleEngineFluxMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleEngineFluxMutation, HandleEngineFluxMutationVariables>(HandleEngineFluxDocument, baseOptions);
      }
export type HandleEngineFluxMutationHookResult = ReturnType<typeof useHandleEngineFluxMutation>;
export const HandleOnAssignProbeDocument = gql`
    mutation HandleOnAssignProbe($id: ID!, $probeId: ID!, $poiId: ID!) {
  handleOnAssignProbe(id: $id, probeId: $probeId, poiId: $poiId)
}
    `;
export function useHandleOnAssignProbeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleOnAssignProbeMutation, HandleOnAssignProbeMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleOnAssignProbeMutation, HandleOnAssignProbeMutationVariables>(HandleOnAssignProbeDocument, baseOptions);
      }
export type HandleOnAssignProbeMutationHookResult = ReturnType<typeof useHandleOnAssignProbeMutation>;
export const HandleOverrideLocationDocument = gql`
    mutation HandleOverrideLocation($id: ID!, $location: BasicCoordinateInput!, $currentLocationUrl: String, $currentLocationName: String) {
  handleOverrideLocation(
    id: $id
    location: $location
    currentLocationUrl: $currentLocationUrl
    currentLocationName: $currentLocationName
  )
}
    `;
export function useHandleOverrideLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleOverrideLocationMutation, HandleOverrideLocationMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleOverrideLocationMutation, HandleOverrideLocationMutationVariables>(HandleOverrideLocationDocument, baseOptions);
      }
export type HandleOverrideLocationMutationHookResult = ReturnType<typeof useHandleOverrideLocationMutation>;
export const HandleResumePathDocument = gql`
    mutation HandleResumePath($id: ID!) {
  handleResumePath(id: $id)
}
    `;
export function useHandleResumePathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleResumePathMutation, HandleResumePathMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleResumePathMutation, HandleResumePathMutationVariables>(HandleResumePathDocument, baseOptions);
      }
export type HandleResumePathMutationHookResult = ReturnType<typeof useHandleResumePathMutation>;
export const HandleSaveFlightPathDocument = gql`
    mutation HandleSaveFlightPath($id: ID!, $path: NamedNavigationRouteInput!) {
  handleSaveFlightPath(id: $id, path: $path)
}
    `;
export function useHandleSaveFlightPathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleSaveFlightPathMutation, HandleSaveFlightPathMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleSaveFlightPathMutation, HandleSaveFlightPathMutationVariables>(HandleSaveFlightPathDocument, baseOptions);
      }
export type HandleSaveFlightPathMutationHookResult = ReturnType<typeof useHandleSaveFlightPathMutation>;
export const HandleSetCoolantLevelDocument = gql`
    mutation HandleSetCoolantLevel($id: ID!, $level: Float!) {
  handleSetCoolantLevel(id: $id, level: $level)
}
    `;
export function useHandleSetCoolantLevelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleSetCoolantLevelMutation, HandleSetCoolantLevelMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleSetCoolantLevelMutation, HandleSetCoolantLevelMutationVariables>(HandleSetCoolantLevelDocument, baseOptions);
      }
export type HandleSetCoolantLevelMutationHookResult = ReturnType<typeof useHandleSetCoolantLevelMutation>;
export const HandleSetHeatLevelDocument = gql`
    mutation HandleSetHeatLevel($id: ID!, $level: Float!) {
  handleSetHeatLevel(id: $id, level: $level)
}
    `;
export function useHandleSetHeatLevelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleSetHeatLevelMutation, HandleSetHeatLevelMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleSetHeatLevelMutation, HandleSetHeatLevelMutationVariables>(HandleSetHeatLevelDocument, baseOptions);
      }
export type HandleSetHeatLevelMutationHookResult = ReturnType<typeof useHandleSetHeatLevelMutation>;
export const HandleShowEtaDocument = gql`
    mutation HandleShowEta($id: ID!, $show: Boolean!) {
  handleShowEta(id: $id, show: $show)
}
    `;
export function useHandleShowEtaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleShowEtaMutation, HandleShowEtaMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleShowEtaMutation, HandleShowEtaMutationVariables>(HandleShowEtaDocument, baseOptions);
      }
export type HandleShowEtaMutationHookResult = ReturnType<typeof useHandleShowEtaMutation>;
export const HandleShowFlightSetDocument = gql`
    mutation HandleShowFlightSet($id: ID!, $show: Boolean!) {
  handleShowFlightSet(id: $id, show: $show)
}
    `;
export function useHandleShowFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleShowFlightSetMutation, HandleShowFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleShowFlightSetMutation, HandleShowFlightSetMutationVariables>(HandleShowFlightSetDocument, baseOptions);
      }
export type HandleShowFlightSetMutationHookResult = ReturnType<typeof useHandleShowFlightSetMutation>;
export const HandleUpdateAdvNavFlightSetDocument = gql`
    mutation HandleUpdateAdvNavFlightSet($id: ID!, $flightSet: FlightSetInput!) {
  updateAdvNavFlightSet(id: $id, flightSet: $flightSet)
}
    `;
export function useHandleUpdateAdvNavFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateAdvNavFlightSetMutation, HandleUpdateAdvNavFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateAdvNavFlightSetMutation, HandleUpdateAdvNavFlightSetMutationVariables>(HandleUpdateAdvNavFlightSetDocument, baseOptions);
      }
export type HandleUpdateAdvNavFlightSetMutationHookResult = ReturnType<typeof useHandleUpdateAdvNavFlightSetMutation>;
export const HandleUpdateCurrentFlightPathDocument = gql`
    mutation HandleUpdateCurrentFlightPath($id: ID!, $route: NavigationRouteInput!) {
  handleUpdateCurrentFlightPath(id: $id, route: $route)
}
    `;
export function useHandleUpdateCurrentFlightPathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateCurrentFlightPathMutation, HandleUpdateCurrentFlightPathMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateCurrentFlightPathMutation, HandleUpdateCurrentFlightPathMutationVariables>(HandleUpdateCurrentFlightPathDocument, baseOptions);
      }
export type HandleUpdateCurrentFlightPathMutationHookResult = ReturnType<typeof useHandleUpdateCurrentFlightPathMutation>;
export const HandleUpdateCurrentFlightSetDocument = gql`
    mutation HandleUpdateCurrentFlightSet($id: ID!, $flightSetId: ID!) {
  handleUpdateCurrentFlightSet(id: $id, flightSetId: $flightSetId)
}
    `;
export function useHandleUpdateCurrentFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateCurrentFlightSetMutation, HandleUpdateCurrentFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateCurrentFlightSetMutation, HandleUpdateCurrentFlightSetMutationVariables>(HandleUpdateCurrentFlightSetDocument, baseOptions);
      }
export type HandleUpdateCurrentFlightSetMutationHookResult = ReturnType<typeof useHandleUpdateCurrentFlightSetMutation>;
export const HandleUpdateEtaDocument = gql`
    mutation HandleUpdateEta($id: ID!, $eta: Float!) {
  handleUpdateEta(id: $id, eta: $eta)
}
    `;
export function useHandleUpdateEtaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateEtaMutation, HandleUpdateEtaMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateEtaMutation, HandleUpdateEtaMutationVariables>(HandleUpdateEtaDocument, baseOptions);
      }
export type HandleUpdateEtaMutationHookResult = ReturnType<typeof useHandleUpdateEtaMutation>;
export const HandleUpdateProbeAssignmentsDocument = gql`
    mutation HandleUpdateProbeAssignments($id: ID!, $probeAssignments: String!) {
  handleUpdateProbeAssignments(id: $id, probeAssignments: $probeAssignments)
}
    `;
export function useHandleUpdateProbeAssignmentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HandleUpdateProbeAssignmentsMutation, HandleUpdateProbeAssignmentsMutationVariables>) {
        return ApolloReactHooks.useMutation<HandleUpdateProbeAssignmentsMutation, HandleUpdateProbeAssignmentsMutationVariables>(HandleUpdateProbeAssignmentsDocument, baseOptions);
      }
export type HandleUpdateProbeAssignmentsMutationHookResult = ReturnType<typeof useHandleUpdateProbeAssignmentsMutation>;
export const CountermeasuresDocument = gql`
    subscription Countermeasures($simulatorId: ID!) {
  countermeasuresUpdate(simulatorId: $simulatorId) {
    id
    name
    displayName
    damage {
      damaged
    }
    power {
      power
      powerLevels
    }
    materials {
      copper
      titanium
      carbon
      plastic
      plasma
    }
    launched {
      ...Countermeasure
    }
    slots {
      slot1 {
        ...Countermeasure
      }
      slot2 {
        ...Countermeasure
      }
      slot3 {
        ...Countermeasure
      }
      slot4 {
        ...Countermeasure
      }
      slot5 {
        ...Countermeasure
      }
      slot6 {
        ...Countermeasure
      }
      slot7 {
        ...Countermeasure
      }
      slot8 {
        ...Countermeasure
      }
    }
  }
}
    ${CountermeasureFragmentDoc}`;
export function useCountermeasuresSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<CountermeasuresSubscription, CountermeasuresSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<CountermeasuresSubscription, CountermeasuresSubscriptionVariables>(CountermeasuresDocument, baseOptions);
      }
export type CountermeasuresSubscriptionHookResult = ReturnType<typeof useCountermeasuresSubscription>;
export const CountermeasuresCoreDocument = gql`
    subscription CountermeasuresCore($simulatorId: ID!) {
  countermeasuresUpdate(simulatorId: $simulatorId) {
    id
    name
    displayName
    materials {
      copper
      titanium
      carbon
      plastic
      plasma
    }
    launched {
      id
      name
      modules {
        id
        name
        config
        activated
        configurationOptions {
          type
          label
        }
      }
      powerUsage
      availablePower
    }
  }
}
    `;
export function useCountermeasuresCoreSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<CountermeasuresCoreSubscription, CountermeasuresCoreSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<CountermeasuresCoreSubscription, CountermeasuresCoreSubscriptionVariables>(CountermeasuresCoreDocument, baseOptions);
      }
export type CountermeasuresCoreSubscriptionHookResult = ReturnType<typeof useCountermeasuresCoreSubscription>;
export const CountermeasureModulesDocument = gql`
    query CountermeasureModules {
  countermeasureModuleType {
    id
    name
    description
    powerRequirement
    resourceRequirements {
      copper
      titanium
      carbon
      plastic
      plasma
    }
    configurationOptions {
      type
      label
    }
  }
}
    `;
export function useCountermeasureModulesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountermeasureModulesQuery, CountermeasureModulesQueryVariables>) {
        return ApolloReactHooks.useQuery<CountermeasureModulesQuery, CountermeasureModulesQueryVariables>(CountermeasureModulesDocument, baseOptions);
      }
export type CountermeasureModulesQueryHookResult = ReturnType<typeof useCountermeasureModulesQuery>;
export const CountermeasureRemoveModuleDocument = gql`
    mutation CountermeasureRemoveModule($id: ID!, $slot: CountermeasureSlotEnum!, $moduleId: ID!) {
  countermeasuresRemoveModule(id: $id, slot: $slot, moduleId: $moduleId)
}
    `;
export function useCountermeasureRemoveModuleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasureRemoveModuleMutation, CountermeasureRemoveModuleMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasureRemoveModuleMutation, CountermeasureRemoveModuleMutationVariables>(CountermeasureRemoveModuleDocument, baseOptions);
      }
export type CountermeasureRemoveModuleMutationHookResult = ReturnType<typeof useCountermeasureRemoveModuleMutation>;
export const CountermeasureSetResourceDocument = gql`
    mutation CountermeasureSetResource($id: ID!, $resource: String!, $value: Float!) {
  countermeasuresSetResource(id: $id, resource: $resource, value: $value)
}
    `;
export function useCountermeasureSetResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasureSetResourceMutation, CountermeasureSetResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasureSetResourceMutation, CountermeasureSetResourceMutationVariables>(CountermeasureSetResourceDocument, baseOptions);
      }
export type CountermeasureSetResourceMutationHookResult = ReturnType<typeof useCountermeasureSetResourceMutation>;
export const CountermeasuresActivateCountermeasureDocument = gql`
    mutation CountermeasuresActivateCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!) {
  countermeasuresActivateCountermeasure(id: $id, slot: $slot)
}
    `;
export function useCountermeasuresActivateCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresActivateCountermeasureMutation, CountermeasuresActivateCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresActivateCountermeasureMutation, CountermeasuresActivateCountermeasureMutationVariables>(CountermeasuresActivateCountermeasureDocument, baseOptions);
      }
export type CountermeasuresActivateCountermeasureMutationHookResult = ReturnType<typeof useCountermeasuresActivateCountermeasureMutation>;
export const CountermeasuresAddModuleDocument = gql`
    mutation CountermeasuresAddModule($id: ID!, $slot: CountermeasureSlotEnum!, $moduleType: String!) {
  countermeasuresAddModule(id: $id, slot: $slot, moduleType: $moduleType) {
    id
    modules {
      id
      name
      description
      powerRequirement
      resourceRequirements {
        copper
        titanium
        plasma
        plasma
        carbon
      }
      configurationOptions {
        type
        label
      }
      config
      buildProgress
      activated
    }
  }
}
    `;
export function useCountermeasuresAddModuleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresAddModuleMutation, CountermeasuresAddModuleMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresAddModuleMutation, CountermeasuresAddModuleMutationVariables>(CountermeasuresAddModuleDocument, baseOptions);
      }
export type CountermeasuresAddModuleMutationHookResult = ReturnType<typeof useCountermeasuresAddModuleMutation>;
export const CountermeasuresBuildCountermeasureDocument = gql`
    mutation CountermeasuresBuildCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!) {
  countermeasuresBuildCountermeasure(id: $id, slot: $slot)
}
    `;
export function useCountermeasuresBuildCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresBuildCountermeasureMutation, CountermeasuresBuildCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresBuildCountermeasureMutation, CountermeasuresBuildCountermeasureMutationVariables>(CountermeasuresBuildCountermeasureDocument, baseOptions);
      }
export type CountermeasuresBuildCountermeasureMutationHookResult = ReturnType<typeof useCountermeasuresBuildCountermeasureMutation>;
export const CountermeasuresConfigureModuleDocument = gql`
    mutation CountermeasuresConfigureModule($id: ID!, $slot: CountermeasureSlotEnum!, $moduleId: ID!, $config: JSON!) {
  countermeasuresConfigureModule(
    id: $id
    slot: $slot
    moduleId: $moduleId
    config: $config
  )
}
    `;
export function useCountermeasuresConfigureModuleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresConfigureModuleMutation, CountermeasuresConfigureModuleMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresConfigureModuleMutation, CountermeasuresConfigureModuleMutationVariables>(CountermeasuresConfigureModuleDocument, baseOptions);
      }
export type CountermeasuresConfigureModuleMutationHookResult = ReturnType<typeof useCountermeasuresConfigureModuleMutation>;
export const CountermeasureCreateCountermeasureDocument = gql`
    mutation CountermeasureCreateCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!, $name: String!) {
  countermeasuresCreateCountermeasure(id: $id, slot: $slot, name: $name) {
    id
  }
}
    `;
export function useCountermeasureCreateCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasureCreateCountermeasureMutation, CountermeasureCreateCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasureCreateCountermeasureMutation, CountermeasureCreateCountermeasureMutationVariables>(CountermeasureCreateCountermeasureDocument, baseOptions);
      }
export type CountermeasureCreateCountermeasureMutationHookResult = ReturnType<typeof useCountermeasureCreateCountermeasureMutation>;
export const CountermeasuresDeactivateCountermeasureDocument = gql`
    mutation CountermeasuresDeactivateCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!) {
  countermeasuresDeactivateCountermeasure(id: $id, slot: $slot)
}
    `;
export function useCountermeasuresDeactivateCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresDeactivateCountermeasureMutation, CountermeasuresDeactivateCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresDeactivateCountermeasureMutation, CountermeasuresDeactivateCountermeasureMutationVariables>(CountermeasuresDeactivateCountermeasureDocument, baseOptions);
      }
export type CountermeasuresDeactivateCountermeasureMutationHookResult = ReturnType<typeof useCountermeasuresDeactivateCountermeasureMutation>;
export const CountermeasuresLaunchCountermeasureDocument = gql`
    mutation CountermeasuresLaunchCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!) {
  countermeasuresLaunchCountermeasure(id: $id, slot: $slot)
}
    `;
export function useCountermeasuresLaunchCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresLaunchCountermeasureMutation, CountermeasuresLaunchCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresLaunchCountermeasureMutation, CountermeasuresLaunchCountermeasureMutationVariables>(CountermeasuresLaunchCountermeasureDocument, baseOptions);
      }
export type CountermeasuresLaunchCountermeasureMutationHookResult = ReturnType<typeof useCountermeasuresLaunchCountermeasureMutation>;
export const CountermeasuresLaunchUnlockedCountermeasuresDocument = gql`
    mutation CountermeasuresLaunchUnlockedCountermeasures($id: ID!) {
  countermeasuresLaunchUnlockedCountermeasures(id: $id)
}
    `;
export function useCountermeasuresLaunchUnlockedCountermeasuresMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresLaunchUnlockedCountermeasuresMutation, CountermeasuresLaunchUnlockedCountermeasuresMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresLaunchUnlockedCountermeasuresMutation, CountermeasuresLaunchUnlockedCountermeasuresMutationVariables>(CountermeasuresLaunchUnlockedCountermeasuresDocument, baseOptions);
      }
export type CountermeasuresLaunchUnlockedCountermeasuresMutationHookResult = ReturnType<typeof useCountermeasuresLaunchUnlockedCountermeasuresMutation>;
export const CountermeasureRemoveCountermeasureDocument = gql`
    mutation CountermeasureRemoveCountermeasure($id: ID!, $slot: CountermeasureSlotEnum!) {
  countermeasuresRemoveCountermeasure(id: $id, slot: $slot)
}
    `;
export function useCountermeasureRemoveCountermeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasureRemoveCountermeasureMutation, CountermeasureRemoveCountermeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasureRemoveCountermeasureMutation, CountermeasureRemoveCountermeasureMutationVariables>(CountermeasureRemoveCountermeasureDocument, baseOptions);
      }
export type CountermeasureRemoveCountermeasureMutationHookResult = ReturnType<typeof useCountermeasureRemoveCountermeasureMutation>;
export const CountermeasuresRemoveModuleDocument = gql`
    mutation CountermeasuresRemoveModule($id: ID!, $slot: CountermeasureSlotEnum!, $moduleId: ID!) {
  countermeasuresRemoveModule(id: $id, slot: $slot, moduleId: $moduleId)
}
    `;
export function useCountermeasuresRemoveModuleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresRemoveModuleMutation, CountermeasuresRemoveModuleMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresRemoveModuleMutation, CountermeasuresRemoveModuleMutationVariables>(CountermeasuresRemoveModuleDocument, baseOptions);
      }
export type CountermeasuresRemoveModuleMutationHookResult = ReturnType<typeof useCountermeasuresRemoveModuleMutation>;
export const CountermeasuresSetFdNoteDocument = gql`
    mutation CountermeasuresSetFDNote($id: ID!, $countermeasureId: ID!, $note: String!) {
  countermeasuresSetFDNote(
    id: $id
    countermeasureId: $countermeasureId
    note: $note
  )
}
    `;
export function useCountermeasuresSetFdNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CountermeasuresSetFdNoteMutation, CountermeasuresSetFdNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<CountermeasuresSetFdNoteMutation, CountermeasuresSetFdNoteMutationVariables>(CountermeasuresSetFdNoteDocument, baseOptions);
      }
export type CountermeasuresSetFdNoteMutationHookResult = ReturnType<typeof useCountermeasuresSetFdNoteMutation>;
export const SystemsCoreEnginesDocument = gql`
    query SystemsCoreEngines($simulatorId: ID!) {
  engines(simulatorId: $simulatorId) {
    id
    speeds {
      number
    }
  }
}
    `;
export function useSystemsCoreEnginesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SystemsCoreEnginesQuery, SystemsCoreEnginesQueryVariables>) {
        return ApolloReactHooks.useQuery<SystemsCoreEnginesQuery, SystemsCoreEnginesQueryVariables>(SystemsCoreEnginesDocument, baseOptions);
      }
export type SystemsCoreEnginesQueryHookResult = ReturnType<typeof useSystemsCoreEnginesQuery>;
export const SystemChangePowerDocument = gql`
    mutation SystemChangePower($systemId: ID!, $power: Int!) {
  changePower(systemId: $systemId, power: $power)
}
    `;
export function useSystemChangePowerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SystemChangePowerMutation, SystemChangePowerMutationVariables>) {
        return ApolloReactHooks.useMutation<SystemChangePowerMutation, SystemChangePowerMutationVariables>(SystemChangePowerDocument, baseOptions);
      }
export type SystemChangePowerMutationHookResult = ReturnType<typeof useSystemChangePowerMutation>;
export const SystemUpgradeDocument = gql`
    mutation SystemUpgrade($systemId: ID!) {
  upgradeSystem(systemId: $systemId)
}
    `;
export function useSystemUpgradeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SystemUpgradeMutation, SystemUpgradeMutationVariables>) {
        return ApolloReactHooks.useMutation<SystemUpgradeMutation, SystemUpgradeMutationVariables>(SystemUpgradeDocument, baseOptions);
      }
export type SystemUpgradeMutationHookResult = ReturnType<typeof useSystemUpgradeMutation>;
export const AddDocumentDocument = gql`
    mutation AddDocument($simulatorId: ID!, $name: String!, $asset: String!) {
  documentAdd(simulatorId: $simulatorId, name: $name, asset: $asset)
}
    `;
export function useAddDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddDocumentMutation, AddDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddDocumentMutation, AddDocumentMutationVariables>(AddDocumentDocument, baseOptions);
      }
export type AddDocumentMutationHookResult = ReturnType<typeof useAddDocumentMutation>;
export const DocumentsDocument = gql`
    subscription Documents($simulatorId: ID!) {
  simulatorsUpdate(simulatorId: $simulatorId) {
    id
    documents {
      id
      name
      asset
    }
  }
}
    `;
export function useDocumentsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<DocumentsSubscription, DocumentsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<DocumentsSubscription, DocumentsSubscriptionVariables>(DocumentsDocument, baseOptions);
      }
export type DocumentsSubscriptionHookResult = ReturnType<typeof useDocumentsSubscription>;
export const RemoveDocumentDocument = gql`
    mutation RemoveDocument($simulatorId: ID!, $id: ID!) {
  documentRemove(simulatorId: $simulatorId, id: $id)
}
    `;
export function useRemoveDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveDocumentMutation, RemoveDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveDocumentMutation, RemoveDocumentMutationVariables>(RemoveDocumentDocument, baseOptions);
      }
export type RemoveDocumentMutationHookResult = ReturnType<typeof useRemoveDocumentMutation>;
export const HackingAllowHackingDocument = gql`
    mutation HackingAllowHacking($id: ID!, $state: String!) {
  computerCoreSetHackingState(id: $id, state: $state)
}
    `;
export function useHackingAllowHackingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingAllowHackingMutation, HackingAllowHackingMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingAllowHackingMutation, HackingAllowHackingMutationVariables>(HackingAllowHackingDocument, baseOptions);
      }
export type HackingAllowHackingMutationHookResult = ReturnType<typeof useHackingAllowHackingMutation>;
export const HackingAppendLogDocument = gql`
    mutation HackingAppendLog($id: ID!, $log: String!) {
  computerCoreAppendLog(id: $id, log: $log)
}
    `;
export function useHackingAppendLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingAppendLogMutation, HackingAppendLogMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingAppendLogMutation, HackingAppendLogMutationVariables>(HackingAppendLogDocument, baseOptions);
      }
export type HackingAppendLogMutationHookResult = ReturnType<typeof useHackingAppendLogMutation>;
export const HackingCopyFileDocument = gql`
    mutation HackingCopyFile($id: ID!, $file: ComputerCoreFileInput!) {
  computerCoreAddFile(id: $id, file: $file)
}
    `;
export function useHackingCopyFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingCopyFileMutation, HackingCopyFileMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingCopyFileMutation, HackingCopyFileMutationVariables>(HackingCopyFileDocument, baseOptions);
      }
export type HackingCopyFileMutationHookResult = ReturnType<typeof useHackingCopyFileMutation>;
export const HackingActivateDocument = gql`
    mutation HackingActivate($id: ID!) {
  computerCoreActivateHacking(id: $id)
}
    `;
export function useHackingActivateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingActivateMutation, HackingActivateMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingActivateMutation, HackingActivateMutationVariables>(HackingActivateDocument, baseOptions);
      }
export type HackingActivateMutationHookResult = ReturnType<typeof useHackingActivateMutation>;
export const HackingDeactivateDocument = gql`
    mutation HackingDeactivate($id: ID!) {
  computerCoreDeactivateHacking(id: $id)
}
    `;
export function useHackingDeactivateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingDeactivateMutation, HackingDeactivateMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingDeactivateMutation, HackingDeactivateMutationVariables>(HackingDeactivateDocument, baseOptions);
      }
export type HackingDeactivateMutationHookResult = ReturnType<typeof useHackingDeactivateMutation>;
export const ComputerCoreHackingDocument = gql`
    subscription ComputerCoreHacking($simulatorId: ID!) {
  computerCoreUpdate(simulatorId: $simulatorId) {
    id
    hackingActive
    activeHackingPreset {
      id
      longRange
      longRangeMessages {
        id
        title
        message
      }
      remoteControl
      logs
      commandLines
      fileViewer
      files {
        id
        name
        level
        corrupted
      }
    }
    hackingState
    hackingLog
    hackingPortScanFrequency
    hackingPorts {
      logs
      longRange
      remoteControl
      fileViewer
    }
  }
}
    `;
export function useComputerCoreHackingSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ComputerCoreHackingSubscription, ComputerCoreHackingSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ComputerCoreHackingSubscription, ComputerCoreHackingSubscriptionVariables>(ComputerCoreHackingDocument, baseOptions);
      }
export type ComputerCoreHackingSubscriptionHookResult = ReturnType<typeof useComputerCoreHackingSubscription>;
export const HackingRemoveLogDocument = gql`
    mutation HackingRemoveLog($id: ID!, $index: Int!) {
  computerCoreDeleteLog(id: $id, index: $index)
}
    `;
export function useHackingRemoveLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingRemoveLogMutation, HackingRemoveLogMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingRemoveLogMutation, HackingRemoveLogMutationVariables>(HackingRemoveLogDocument, baseOptions);
      }
export type HackingRemoveLogMutationHookResult = ReturnType<typeof useHackingRemoveLogMutation>;
export const HackingTransferToLongRangeDocument = gql`
    mutation HackingTransferToLongRange($simulatorId: ID!, $message: String!, $sender: String) {
  sendLongRangeMessage(
    simulatorId: $simulatorId
    message: $message
    crew: true
    decoded: true
    sender: $sender
  )
}
    `;
export function useHackingTransferToLongRangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingTransferToLongRangeMutation, HackingTransferToLongRangeMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingTransferToLongRangeMutation, HackingTransferToLongRangeMutationVariables>(HackingTransferToLongRangeDocument, baseOptions);
      }
export type HackingTransferToLongRangeMutationHookResult = ReturnType<typeof useHackingTransferToLongRangeMutation>;
export const HackingSetFrequencyDocument = gql`
    mutation HackingSetFrequency($id: ID!, $frequency: Float!) {
  computerCoreSetHackingFrequency(id: $id, frequency: $frequency)
}
    `;
export function useHackingSetFrequencyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingSetFrequencyMutation, HackingSetFrequencyMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingSetFrequencyMutation, HackingSetFrequencyMutationVariables>(HackingSetFrequencyDocument, baseOptions);
      }
export type HackingSetFrequencyMutationHookResult = ReturnType<typeof useHackingSetFrequencyMutation>;
export const HackingSetPresetDocument = gql`
    mutation HackingSetPreset($id: ID!, $presetId: ID!) {
  computerCoreHackingPreset(id: $id, presetId: $presetId)
}
    `;
export function useHackingSetPresetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingSetPresetMutation, HackingSetPresetMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingSetPresetMutation, HackingSetPresetMutationVariables>(HackingSetPresetDocument, baseOptions);
      }
export type HackingSetPresetMutationHookResult = ReturnType<typeof useHackingSetPresetMutation>;
export const HackingUpdateFilesDocument = gql`
    mutation HackingUpdateFiles($id: ID!, $files: JSON!) {
  computerCoreUpdateHackingFiles(id: $id, files: $files)
}
    `;
export function useHackingUpdateFilesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingUpdateFilesMutation, HackingUpdateFilesMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingUpdateFilesMutation, HackingUpdateFilesMutationVariables>(HackingUpdateFilesDocument, baseOptions);
      }
export type HackingUpdateFilesMutationHookResult = ReturnType<typeof useHackingUpdateFilesMutation>;
export const LightingSetEffectDocument = gql`
    mutation LightingSetEffect($simulatorId: ID!, $effect: LIGHTING_ACTION!, $duration: Float!) {
  lightingSetEffect(
    simulatorId: $simulatorId
    effect: $effect
    duration: $duration
  )
}
    `;
export function useLightingSetEffectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LightingSetEffectMutation, LightingSetEffectMutationVariables>) {
        return ApolloReactHooks.useMutation<LightingSetEffectMutation, LightingSetEffectMutationVariables>(LightingSetEffectDocument, baseOptions);
      }
export type LightingSetEffectMutationHookResult = ReturnType<typeof useLightingSetEffectMutation>;
export const LightingSetIntensityDocument = gql`
    mutation LightingSetIntensity($simulatorId: ID!, $intensity: Float!) {
  lightingSetIntensity(simulatorId: $simulatorId, intensity: $intensity)
}
    `;
export function useLightingSetIntensityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LightingSetIntensityMutation, LightingSetIntensityMutationVariables>) {
        return ApolloReactHooks.useMutation<LightingSetIntensityMutation, LightingSetIntensityMutationVariables>(LightingSetIntensityDocument, baseOptions);
      }
export type LightingSetIntensityMutationHookResult = ReturnType<typeof useLightingSetIntensityMutation>;
export const ShakeLightsDocument = gql`
    mutation ShakeLights($simulatorId: ID!, $duration: Float!) {
  lightingShakeLights(simulatorId: $simulatorId, duration: $duration)
}
    `;
export function useShakeLightsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ShakeLightsMutation, ShakeLightsMutationVariables>) {
        return ApolloReactHooks.useMutation<ShakeLightsMutation, ShakeLightsMutationVariables>(ShakeLightsDocument, baseOptions);
      }
export type ShakeLightsMutationHookResult = ReturnType<typeof useShakeLightsMutation>;
export const UpdateLightingDocument = gql`
    mutation UpdateLighting($id: ID!, $lighting: LightingInput!) {
  updateSimulatorLighting(id: $id, lighting: $lighting)
}
    `;
export function useUpdateLightingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLightingMutation, UpdateLightingMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLightingMutation, UpdateLightingMutationVariables>(UpdateLightingDocument, baseOptions);
      }
export type UpdateLightingMutationHookResult = ReturnType<typeof useUpdateLightingMutation>;
export const ClearPdfDocument = gql`
    mutation ClearPdf($id: ID!) {
  clearPdf(id: $id)
}
    `;
export function useClearPdfMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClearPdfMutation, ClearPdfMutationVariables>) {
        return ApolloReactHooks.useMutation<ClearPdfMutation, ClearPdfMutationVariables>(ClearPdfDocument, baseOptions);
      }
export type ClearPdfMutationHookResult = ReturnType<typeof useClearPdfMutation>;
export const PrintQueueDocument = gql`
    subscription PrintQueue($simulatorId: ID!) {
  printQueue(simulatorId: $simulatorId) {
    id
    asset
    timestamp
  }
}
    `;
export function usePrintQueueSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<PrintQueueSubscription, PrintQueueSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<PrintQueueSubscription, PrintQueueSubscriptionVariables>(PrintQueueDocument, baseOptions);
      }
export type PrintQueueSubscriptionHookResult = ReturnType<typeof usePrintQueueSubscription>;
export const ReactorAckWingPowerDocument = gql`
    mutation ReactorAckWingPower($id: ID!, $wing: String!, $ack: Boolean!) {
  reactorAckWingRequest(id: $id, wing: $wing, ack: $ack)
}
    `;
export function useReactorAckWingPowerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorAckWingPowerMutation, ReactorAckWingPowerMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorAckWingPowerMutation, ReactorAckWingPowerMutationVariables>(ReactorAckWingPowerDocument, baseOptions);
      }
export type ReactorAckWingPowerMutationHookResult = ReturnType<typeof useReactorAckWingPowerMutation>;
export const BatteryChargeLevelDocument = gql`
    mutation BatteryChargeLevel($id: ID!, $e: Float!) {
  reactorBatteryChargeLevel(id: $id, level: $e)
}
    `;
export function useBatteryChargeLevelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BatteryChargeLevelMutation, BatteryChargeLevelMutationVariables>) {
        return ApolloReactHooks.useMutation<BatteryChargeLevelMutation, BatteryChargeLevelMutationVariables>(BatteryChargeLevelDocument, baseOptions);
      }
export type BatteryChargeLevelMutationHookResult = ReturnType<typeof useBatteryChargeLevelMutation>;
export const BatteryChargeRateDocument = gql`
    mutation BatteryChargeRate($id: ID!, $e: Float!) {
  reactorBatteryChargeRate(id: $id, rate: $e)
}
    `;
export function useBatteryChargeRateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BatteryChargeRateMutation, BatteryChargeRateMutationVariables>) {
        return ApolloReactHooks.useMutation<BatteryChargeRateMutation, BatteryChargeRateMutationVariables>(BatteryChargeRateDocument, baseOptions);
      }
export type BatteryChargeRateMutationHookResult = ReturnType<typeof useBatteryChargeRateMutation>;
export const SetDilithiumRateDocument = gql`
    mutation SetDilithiumRate($id: ID!, $rate: Float!) {
  setDilithiumStressRate(id: $id, rate: $rate)
}
    `;
export function useSetDilithiumRateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetDilithiumRateMutation, SetDilithiumRateMutationVariables>) {
        return ApolloReactHooks.useMutation<SetDilithiumRateMutation, SetDilithiumRateMutationVariables>(SetDilithiumRateDocument, baseOptions);
      }
export type SetDilithiumRateMutationHookResult = ReturnType<typeof useSetDilithiumRateMutation>;
export const ReactorDockingDocument = gql`
    subscription ReactorDocking($simulatorId: ID) {
  simulatorsUpdate(simulatorId: $simulatorId) {
    id
    ship {
      clamps
      ramps
      airlock
      legs
    }
  }
}
    `;
export function useReactorDockingSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ReactorDockingSubscription, ReactorDockingSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ReactorDockingSubscription, ReactorDockingSubscriptionVariables>(ReactorDockingDocument, baseOptions);
      }
export type ReactorDockingSubscriptionHookResult = ReturnType<typeof useReactorDockingSubscription>;
export const FluxDilithiumDocument = gql`
    mutation FluxDilithium($id: ID!) {
  fluxDilithiumStress(id: $id)
}
    `;
export function useFluxDilithiumMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FluxDilithiumMutation, FluxDilithiumMutationVariables>) {
        return ApolloReactHooks.useMutation<FluxDilithiumMutation, FluxDilithiumMutationVariables>(FluxDilithiumDocument, baseOptions);
      }
export type FluxDilithiumMutationHookResult = ReturnType<typeof useFluxDilithiumMutation>;
export const ReactorPowerDocument = gql`
    subscription ReactorPower($simulatorId: ID) {
  systemsUpdate(simulatorId: $simulatorId, power: true) {
    id
    name
    power {
      power
    }
  }
}
    `;
export function useReactorPowerSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ReactorPowerSubscription, ReactorPowerSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ReactorPowerSubscription, ReactorPowerSubscriptionVariables>(ReactorPowerDocument, baseOptions);
      }
export type ReactorPowerSubscriptionHookResult = ReturnType<typeof useReactorPowerSubscription>;
export const ReactorCoolDocument = gql`
    mutation ReactorCool($id: ID!, $state: Boolean) {
  engineCool(id: $id, state: $state)
}
    `;
export function useReactorCoolMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorCoolMutation, ReactorCoolMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorCoolMutation, ReactorCoolMutationVariables>(ReactorCoolDocument, baseOptions);
      }
export type ReactorCoolMutationHookResult = ReturnType<typeof useReactorCoolMutation>;
export const ReactorHeatDocument = gql`
    mutation ReactorHeat($id: ID!, $heat: Float) {
  addHeat(id: $id, heat: $heat)
}
    `;
export function useReactorHeatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorHeatMutation, ReactorHeatMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorHeatMutation, ReactorHeatMutationVariables>(ReactorHeatDocument, baseOptions);
      }
export type ReactorHeatMutationHookResult = ReturnType<typeof useReactorHeatMutation>;
export const ReactorSetHeatRateDocument = gql`
    mutation ReactorSetHeatRate($id: ID!, $rate: Float!) {
  setHeatRate(id: $id, rate: $rate)
}
    `;
export function useReactorSetHeatRateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorSetHeatRateMutation, ReactorSetHeatRateMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorSetHeatRateMutation, ReactorSetHeatRateMutationVariables>(ReactorSetHeatRateDocument, baseOptions);
      }
export type ReactorSetHeatRateMutationHookResult = ReturnType<typeof useReactorSetHeatRateMutation>;
export const ReactorPowerLevelDocument = gql`
    mutation ReactorPowerLevel($id: ID!, $e: Int!) {
  reactorChangeOutput(id: $id, output: $e)
}
    `;
export function useReactorPowerLevelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorPowerLevelMutation, ReactorPowerLevelMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorPowerLevelMutation, ReactorPowerLevelMutationVariables>(ReactorPowerLevelDocument, baseOptions);
      }
export type ReactorPowerLevelMutationHookResult = ReturnType<typeof useReactorPowerLevelMutation>;
export const ReactorsDocument = gql`
    subscription Reactors($simulatorId: ID!) {
  reactorUpdate(simulatorId: $simulatorId) {
    id
    type
    name
    heat
    heatRate
    model
    coolant
    damage {
      damaged
    }
    ejected
    externalPower
    efficiency
    efficiencies {
      label
      color
      efficiency
    }
    displayName
    powerOutput
    batteryChargeRate
    batteryChargeLevel
    depletion
    alphaLevel
    betaLevel
    alphaTarget
    betaTarget
    dilithiumRate
    hasWings
    leftWingPower
    leftWingRequest
    leftWingRequested
    rightWingPower
    rightWingRequest
    rightWingRequested
  }
}
    `;
export function useReactorsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ReactorsSubscription, ReactorsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ReactorsSubscription, ReactorsSubscriptionVariables>(ReactorsDocument, baseOptions);
      }
export type ReactorsSubscriptionHookResult = ReturnType<typeof useReactorsSubscription>;
export const ReactorRequestWingPowerDocument = gql`
    mutation ReactorRequestWingPower($id: ID!, $wing: String!, $power: Int!) {
  reactorRequestWingPower(id: $id, wing: $wing, power: $power)
}
    `;
export function useReactorRequestWingPowerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorRequestWingPowerMutation, ReactorRequestWingPowerMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorRequestWingPowerMutation, ReactorRequestWingPowerMutationVariables>(ReactorRequestWingPowerDocument, baseOptions);
      }
export type ReactorRequestWingPowerMutationHookResult = ReturnType<typeof useReactorRequestWingPowerMutation>;
export const ReactorSetEfficiencyDocument = gql`
    mutation ReactorSetEfficiency($id: ID!, $e: Float) {
  reactorChangeEfficiency(id: $id, efficiency: $e)
}
    `;
export function useReactorSetEfficiencyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorSetEfficiencyMutation, ReactorSetEfficiencyMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorSetEfficiencyMutation, ReactorSetEfficiencyMutationVariables>(ReactorSetEfficiencyDocument, baseOptions);
      }
export type ReactorSetEfficiencyMutationHookResult = ReturnType<typeof useReactorSetEfficiencyMutation>;
export const ReactorSetWingPowerDocument = gql`
    mutation ReactorSetWingPower($id: ID!, $wing: String!, $power: Int!) {
  reactorSetWingPower(id: $id, wing: $wing, power: $power)
}
    `;
export function useReactorSetWingPowerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorSetWingPowerMutation, ReactorSetWingPowerMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorSetWingPowerMutation, ReactorSetWingPowerMutationVariables>(ReactorSetWingPowerDocument, baseOptions);
      }
export type ReactorSetWingPowerMutationHookResult = ReturnType<typeof useReactorSetWingPowerMutation>;
export const SensorsPingSubDocument = gql`
    subscription SensorsPingSub($sensorsId: ID!) {
  sensorsPing(sensorId: $sensorsId)
}
    `;
export function useSensorsPingSubSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SensorsPingSubSubscription, SensorsPingSubSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SensorsPingSubSubscription, SensorsPingSubSubscriptionVariables>(SensorsPingSubDocument, baseOptions);
      }
export type SensorsPingSubSubscriptionHookResult = ReturnType<typeof useSensorsPingSubSubscription>;
export const SensorsProbeDataDocument = gql`
    mutation SensorsProbeData($id: ID!, $data: String!, $flash: Boolean) {
  probeProcessedData(id: $id, data: $data, flash: $flash)
}
    `;
export function useSensorsProbeDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsProbeDataMutation, SensorsProbeDataMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsProbeDataMutation, SensorsProbeDataMutationVariables>(SensorsProbeDataDocument, baseOptions);
      }
export type SensorsProbeDataMutationHookResult = ReturnType<typeof useSensorsProbeDataMutation>;
export const SensorsProcessedDataDocument = gql`
    mutation SensorsProcessedData($id: ID, $data: String!, $flash: Boolean) {
  processedData(id: $id, data: $data, flash: $flash)
}
    `;
export function useSensorsProcessedDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsProcessedDataMutation, SensorsProcessedDataMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsProcessedDataMutation, SensorsProcessedDataMutationVariables>(SensorsProcessedDataDocument, baseOptions);
      }
export type SensorsProcessedDataMutationHookResult = ReturnType<typeof useSensorsProcessedDataMutation>;
export const SensorsRemoveProcessedDataDocument = gql`
    mutation SensorsRemoveProcessedData($id: ID!, $time: String!) {
  removeProcessedData(id: $id, time: $time)
}
    `;
export function useSensorsRemoveProcessedDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsRemoveProcessedDataMutation, SensorsRemoveProcessedDataMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsRemoveProcessedDataMutation, SensorsRemoveProcessedDataMutationVariables>(SensorsRemoveProcessedDataDocument, baseOptions);
      }
export type SensorsRemoveProcessedDataMutationHookResult = ReturnType<typeof useSensorsRemoveProcessedDataMutation>;
export const SensorsSendPingDocument = gql`
    mutation SensorsSendPing($id: ID!) {
  pingSensors(id: $id)
}
    `;
export function useSensorsSendPingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsSendPingMutation, SensorsSendPingMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsSendPingMutation, SensorsSendPingMutationVariables>(SensorsSendPingDocument, baseOptions);
      }
export type SensorsSendPingMutationHookResult = ReturnType<typeof useSensorsSendPingMutation>;
export const SensorScanResponseDocument = gql`
    mutation SensorScanResponse($id: ID!, $scan: SensorScanInput!) {
  updateSensorScan(id: $id, scan: $scan)
}
    `;
export function useSensorScanResponseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorScanResponseMutation, SensorScanResponseMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorScanResponseMutation, SensorScanResponseMutationVariables>(SensorScanResponseDocument, baseOptions);
      }
export type SensorScanResponseMutationHookResult = ReturnType<typeof useSensorScanResponseMutation>;
export const SensorScanResultDocument = gql`
    mutation SensorScanResult($id: ID!, $result: String!) {
  sensorScanResult(id: $id, result: $result)
}
    `;
export function useSensorScanResultMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorScanResultMutation, SensorScanResultMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorScanResultMutation, SensorScanResultMutationVariables>(SensorScanResultDocument, baseOptions);
      }
export type SensorScanResultMutationHookResult = ReturnType<typeof useSensorScanResultMutation>;
export const SensorsProbesDocument = gql`
    query SensorsProbes($simulatorId: ID!) {
  probes(simulatorId: $simulatorId) {
    id
  }
}
    `;
export function useSensorsProbesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SensorsProbesQuery, SensorsProbesQueryVariables>) {
        return ApolloReactHooks.useQuery<SensorsProbesQuery, SensorsProbesQueryVariables>(SensorsProbesDocument, baseOptions);
      }
export type SensorsProbesQueryHookResult = ReturnType<typeof useSensorsProbesQuery>;
export const SensorsDocument = gql`
    subscription Sensors($simulatorId: ID!, $domain: String) {
  sensorsUpdate(simulatorId: $simulatorId, domain: $domain) {
    id
    scanResults
    scanRequest
    scanning
    pings
    pingMode
    timeSincePing
    domain
    processedData {
      value
      time
    }
    interference
    movement {
      x
      y
      z
    }
    segments {
      ring
      line
      state
    }
    presetAnswers {
      label
      value
    }
    history
    scans {
      id
      request
      mode
      location
      response
      scanning
      timestamp
      cancelled
    }
    damage {
      damaged
    }
    power {
      power
      powerLevels
    }
  }
}
    `;
export function useSensorsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SensorsSubscription, SensorsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SensorsSubscription, SensorsSubscriptionVariables>(SensorsDocument, baseOptions);
      }
export type SensorsSubscriptionHookResult = ReturnType<typeof useSensorsSubscription>;
export const SetCalculatedTargetDocument = gql`
    mutation SetCalculatedTarget($simulatorId: ID, $coordinates: CoordinatesInput!, $contactId: ID) {
  setTargetingCalculatedTarget(
    simulatorId: $simulatorId
    coordinates: $coordinates
    contactId: $contactId
  )
}
    `;
export function useSetCalculatedTargetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetCalculatedTargetMutation, SetCalculatedTargetMutationVariables>) {
        return ApolloReactHooks.useMutation<SetCalculatedTargetMutation, SetCalculatedTargetMutationVariables>(SetCalculatedTargetDocument, baseOptions);
      }
export type SetCalculatedTargetMutationHookResult = ReturnType<typeof useSetCalculatedTargetMutation>;
export const SensorsSetHistoryDocument = gql`
    mutation SensorsSetHistory($id: ID!, $history: Boolean!) {
  setSensorsHistory(id: $id, history: $history)
}
    `;
export function useSensorsSetHistoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsSetHistoryMutation, SensorsSetHistoryMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsSetHistoryMutation, SensorsSetHistoryMutationVariables>(SensorsSetHistoryDocument, baseOptions);
      }
export type SensorsSetHistoryMutationHookResult = ReturnType<typeof useSensorsSetHistoryMutation>;
export const SensorsSetPingModeDocument = gql`
    mutation SensorsSetPingMode($id: ID!, $mode: PING_MODES) {
  setSensorPingMode(id: $id, mode: $mode)
}
    `;
export function useSensorsSetPingModeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsSetPingModeMutation, SensorsSetPingModeMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsSetPingModeMutation, SensorsSetPingModeMutationVariables>(SensorsSetPingModeDocument, baseOptions);
      }
export type SensorsSetPingModeMutationHookResult = ReturnType<typeof useSensorsSetPingModeMutation>;
export const TargetingRangeDocument = gql`
    query TargetingRange($id: ID!) {
  targeting(simulatorId: $id) {
    id
    range
  }
}
    `;
export function useTargetingRangeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TargetingRangeQuery, TargetingRangeQueryVariables>) {
        return ApolloReactHooks.useQuery<TargetingRangeQuery, TargetingRangeQueryVariables>(TargetingRangeDocument, baseOptions);
      }
export type TargetingRangeQueryHookResult = ReturnType<typeof useTargetingRangeQuery>;
export const NewLayerDocument = gql`
    mutation NewLayer($mapId: ID!, $name: String!) {
  addTacticalMapLayer(mapId: $mapId, name: $name)
}
    `;
export function useNewLayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NewLayerMutation, NewLayerMutationVariables>) {
        return ApolloReactHooks.useMutation<NewLayerMutation, NewLayerMutationVariables>(NewLayerDocument, baseOptions);
      }
export type NewLayerMutationHookResult = ReturnType<typeof useNewLayerMutation>;
export const AddTacticalItemDocument = gql`
    mutation AddTacticalItem($mapId: ID!, $layerId: ID!, $item: TacticalItemInput!) {
  addTacticalMapItem(mapId: $mapId, layerId: $layerId, item: $item)
}
    `;
export function useAddTacticalItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTacticalItemMutation, AddTacticalItemMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTacticalItemMutation, AddTacticalItemMutationVariables>(AddTacticalItemDocument, baseOptions);
      }
export type AddTacticalItemMutationHookResult = ReturnType<typeof useAddTacticalItemMutation>;
export const AssetFoldersDocument = gql`
    subscription AssetFolders {
  assetFolderChange {
    name
    fullPath
    id
    folderPath
    objects {
      id
      name
      fullPath
      url
    }
  }
}
    `;
export function useAssetFoldersSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<AssetFoldersSubscription, AssetFoldersSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<AssetFoldersSubscription, AssetFoldersSubscriptionVariables>(AssetFoldersDocument, baseOptions);
      }
export type AssetFoldersSubscriptionHookResult = ReturnType<typeof useAssetFoldersSubscription>;
export const AssetsAddFolderDocument = gql`
    mutation AssetsAddFolder($name: String!, $fullPath: String!, $folderPath: String!) {
  addAssetFolder(name: $name, fullPath: $fullPath, folderPath: $folderPath)
}
    `;
export function useAssetsAddFolderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AssetsAddFolderMutation, AssetsAddFolderMutationVariables>) {
        return ApolloReactHooks.useMutation<AssetsAddFolderMutation, AssetsAddFolderMutationVariables>(AssetsAddFolderDocument, baseOptions);
      }
export type AssetsAddFolderMutationHookResult = ReturnType<typeof useAssetsAddFolderMutation>;
export const DuplicateTacticalDocument = gql`
    mutation DuplicateTactical($id: ID!, $name: String!) {
  duplicateTacticalMap(id: $id, name: $name)
}
    `;
export function useDuplicateTacticalMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DuplicateTacticalMutation, DuplicateTacticalMutationVariables>) {
        return ApolloReactHooks.useMutation<DuplicateTacticalMutation, DuplicateTacticalMutationVariables>(DuplicateTacticalDocument, baseOptions);
      }
export type DuplicateTacticalMutationHookResult = ReturnType<typeof useDuplicateTacticalMutation>;
export const FreezeTacticalMapDocument = gql`
    mutation FreezeTacticalMap($id: ID!, $freeze: Boolean!) {
  freezeTacticalMap(id: $id, freeze: $freeze)
}
    `;
export function useFreezeTacticalMapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FreezeTacticalMapMutation, FreezeTacticalMapMutationVariables>) {
        return ApolloReactHooks.useMutation<FreezeTacticalMapMutation, FreezeTacticalMapMutationVariables>(FreezeTacticalMapDocument, baseOptions);
      }
export type FreezeTacticalMapMutationHookResult = ReturnType<typeof useFreezeTacticalMapMutation>;
export const NewTacticalDocument = gql`
    mutation NewTactical($name: String!) {
  newTacticalMap(name: $name)
}
    `;
export function useNewTacticalMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NewTacticalMutation, NewTacticalMutationVariables>) {
        return ApolloReactHooks.useMutation<NewTacticalMutation, NewTacticalMutationVariables>(NewTacticalDocument, baseOptions);
      }
export type NewTacticalMutationHookResult = ReturnType<typeof useNewTacticalMutation>;
export const AssetsRemoveObjectDocument = gql`
    mutation AssetsRemoveObject($fullPath: String!) {
  removeAssetObject(fullPath: $fullPath)
}
    `;
export function useAssetsRemoveObjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AssetsRemoveObjectMutation, AssetsRemoveObjectMutationVariables>) {
        return ApolloReactHooks.useMutation<AssetsRemoveObjectMutation, AssetsRemoveObjectMutationVariables>(AssetsRemoveObjectDocument, baseOptions);
      }
export type AssetsRemoveObjectMutationHookResult = ReturnType<typeof useAssetsRemoveObjectMutation>;
export const AssetsRemoveFolderDocument = gql`
    mutation AssetsRemoveFolder($fullPath: String!) {
  removeAssetFolder(fullPath: $fullPath)
}
    `;
export function useAssetsRemoveFolderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AssetsRemoveFolderMutation, AssetsRemoveFolderMutationVariables>) {
        return ApolloReactHooks.useMutation<AssetsRemoveFolderMutation, AssetsRemoveFolderMutationVariables>(AssetsRemoveFolderDocument, baseOptions);
      }
export type AssetsRemoveFolderMutationHookResult = ReturnType<typeof useAssetsRemoveFolderMutation>;
export const RemoveLayerDocument = gql`
    mutation RemoveLayer($mapId: ID!, $layerId: ID!) {
  removeTacticalMapLayer(mapId: $mapId, layerId: $layerId)
}
    `;
export function useRemoveLayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveLayerMutation, RemoveLayerMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveLayerMutation, RemoveLayerMutationVariables>(RemoveLayerDocument, baseOptions);
      }
export type RemoveLayerMutationHookResult = ReturnType<typeof useRemoveLayerMutation>;
export const RemoveMapDocument = gql`
    mutation RemoveMap($id: ID!) {
  removeTacticalMap(id: $id)
}
    `;
export function useRemoveMapMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveMapMutation, RemoveMapMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveMapMutation, RemoveMapMutationVariables>(RemoveMapDocument, baseOptions);
      }
export type RemoveMapMutationHookResult = ReturnType<typeof useRemoveMapMutation>;
export const RemoveTacticalItemDocument = gql`
    mutation RemoveTacticalItem($mapId: ID!, $layerId: ID!, $itemId: ID!) {
  removeTacticalMapItem(mapId: $mapId, layerId: $layerId, itemId: $itemId)
}
    `;
export function useRemoveTacticalItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTacticalItemMutation, RemoveTacticalItemMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTacticalItemMutation, RemoveTacticalItemMutationVariables>(RemoveTacticalItemDocument, baseOptions);
      }
export type RemoveTacticalItemMutationHookResult = ReturnType<typeof useRemoveTacticalItemMutation>;
export const RemoveTacticalPathDocument = gql`
    mutation RemoveTacticalPath($mapId: ID!, $layerId: ID!, $pathId: ID!) {
  removeTacticalMapPath(mapId: $mapId, layerId: $layerId, pathId: $pathId)
}
    `;
export function useRemoveTacticalPathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTacticalPathMutation, RemoveTacticalPathMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTacticalPathMutation, RemoveTacticalPathMutationVariables>(RemoveTacticalPathDocument, baseOptions);
      }
export type RemoveTacticalPathMutationHookResult = ReturnType<typeof useRemoveTacticalPathMutation>;
export const ReorderTacticalLayerDocument = gql`
    mutation ReorderTacticalLayer($mapId: ID!, $layer: ID!, $order: Int!) {
  reorderTacticalMapLayer(mapId: $mapId, layer: $layer, order: $order)
}
    `;
export function useReorderTacticalLayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReorderTacticalLayerMutation, ReorderTacticalLayerMutationVariables>) {
        return ApolloReactHooks.useMutation<ReorderTacticalLayerMutation, ReorderTacticalLayerMutationVariables>(ReorderTacticalLayerDocument, baseOptions);
      }
export type ReorderTacticalLayerMutationHookResult = ReturnType<typeof useReorderTacticalLayerMutation>;
export const TacticalMapUpdateDocument = gql`
    subscription TacticalMapUpdate($id: ID!) {
  tacticalMapUpdate(id: $id) {
    id
    name
    flight {
      id
    }
    interval
    layers {
      id
      name
      type
      items {
        id
        layerId
        font
        label
        fontSize
        fontColor
        icon
        size
        speed
        velocity {
          x
          y
        }
        location {
          x
          y
        }
        destination {
          x
          y
        }
        rotation
        opacity
        flash
        ijkl
        wasd
        thrusters
        rotationMatch
        thrusterControls {
          rotation
          reversed
          matchRotation
          up
          down
          left
          right
        }
      }
      paths {
        id
        layerId
        start {
          x
          y
        }
        end {
          x
          y
        }
        c1 {
          x
          y
        }
        c2 {
          x
          y
        }
        color
        width
        arrow
      }
      image
      color
      labels
      gridCols
      gridRows
      advance
      asset
      autoplay
      loop
      playbackSpeed
      opacity
      mute
    }
    frozen
    template
  }
}
    `;
export function useTacticalMapUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TacticalMapUpdateSubscription, TacticalMapUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TacticalMapUpdateSubscription, TacticalMapUpdateSubscriptionVariables>(TacticalMapUpdateDocument, baseOptions);
      }
export type TacticalMapUpdateSubscriptionHookResult = ReturnType<typeof useTacticalMapUpdateSubscription>;
export const TacticalMapListDocument = gql`
    subscription TacticalMapList {
  tacticalMapsUpdate {
    id
    name
    flight {
      id
    }
    template
  }
}
    `;
export function useTacticalMapListSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TacticalMapListSubscription, TacticalMapListSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TacticalMapListSubscription, TacticalMapListSubscriptionVariables>(TacticalMapListDocument, baseOptions);
      }
export type TacticalMapListSubscriptionHookResult = ReturnType<typeof useTacticalMapListSubscription>;
export const UpdateLayerDocument = gql`
    mutation UpdateLayer($mapId: ID!, $layer: TacticalLayerInput!) {
  updateTacticalMapLayer(mapId: $mapId, layer: $layer)
}
    `;
export function useUpdateLayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLayerMutation, UpdateLayerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLayerMutation, UpdateLayerMutationVariables>(UpdateLayerDocument, baseOptions);
      }
export type UpdateLayerMutationHookResult = ReturnType<typeof useUpdateLayerMutation>;
export const UpdateTacticalItemDocument = gql`
    mutation UpdateTacticalItem($mapId: ID!, $layerId: ID!, $item: TacticalItemInput!) {
  updateTacticalMapItem(mapId: $mapId, layerId: $layerId, item: $item)
}
    `;
export function useUpdateTacticalItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTacticalItemMutation, UpdateTacticalItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTacticalItemMutation, UpdateTacticalItemMutationVariables>(UpdateTacticalItemDocument, baseOptions);
      }
export type UpdateTacticalItemMutationHookResult = ReturnType<typeof useUpdateTacticalItemMutation>;
export const UpdateTacticalPathDocument = gql`
    mutation UpdateTacticalPath($mapId: ID!, $layerId: ID!, $path: TacticalPathInput!) {
  updateTacticalMapPath(mapId: $mapId, layerId: $layerId, path: $path)
}
    `;
export function useUpdateTacticalPathMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTacticalPathMutation, UpdateTacticalPathMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTacticalPathMutation, UpdateTacticalPathMutationVariables>(UpdateTacticalPathDocument, baseOptions);
      }
export type UpdateTacticalPathMutationHookResult = ReturnType<typeof useUpdateTacticalPathMutation>;
export const ProbeEquipmentDocument = gql`
    query ProbeEquipment {
  probeEquipment {
    id
    name
  }
}
    `;
export function useProbeEquipmentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProbeEquipmentQuery, ProbeEquipmentQueryVariables>) {
        return ApolloReactHooks.useQuery<ProbeEquipmentQuery, ProbeEquipmentQueryVariables>(ProbeEquipmentDocument, baseOptions);
      }
export type ProbeEquipmentQueryHookResult = ReturnType<typeof useProbeEquipmentQuery>;
export const ActivateTaskFlowDocument = gql`
    mutation ActivateTaskFlow($id: ID!, $simulatorId: ID!) {
  taskFlowActivate(id: $id, simulatorId: $simulatorId)
}
    `;
export function useActivateTaskFlowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ActivateTaskFlowMutation, ActivateTaskFlowMutationVariables>) {
        return ApolloReactHooks.useMutation<ActivateTaskFlowMutation, ActivateTaskFlowMutationVariables>(ActivateTaskFlowDocument, baseOptions);
      }
export type ActivateTaskFlowMutationHookResult = ReturnType<typeof useActivateTaskFlowMutation>;
export const TaskFlowListDocument = gql`
    subscription TaskFlowList {
  taskFlows {
    id
    name
    category
  }
}
    `;
export function useTaskFlowListSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TaskFlowListSubscription, TaskFlowListSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TaskFlowListSubscription, TaskFlowListSubscriptionVariables>(TaskFlowListDocument, baseOptions);
      }
export type TaskFlowListSubscriptionHookResult = ReturnType<typeof useTaskFlowListSubscription>;
export const TaskFlowSubDocument = gql`
    subscription TaskFlowSub($simulatorId: ID) {
  taskFlows(simulatorId: $simulatorId) {
    id
    name
    category
    currentStep
    steps {
      id
      name
      completeAll
      delay
      activeTasks {
        id
        station
        definition
        verified
      }
      completed
    }
    completed
  }
}
    `;
export function useTaskFlowSubSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TaskFlowSubSubscription, TaskFlowSubSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TaskFlowSubSubscription, TaskFlowSubSubscriptionVariables>(TaskFlowSubDocument, baseOptions);
      }
export type TaskFlowSubSubscriptionHookResult = ReturnType<typeof useTaskFlowSubSubscription>;
export const TemplateDocument = gql`
    query Template($simulatorId: ID!) {
  _template(simulatorId: $simulatorId) {
    ...TemplateFragment
  }
}
    ${TemplateFragmentFragmentDoc}`;
export function useTemplateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TemplateQuery, TemplateQueryVariables>) {
        return ApolloReactHooks.useQuery<TemplateQuery, TemplateQueryVariables>(TemplateDocument, baseOptions);
      }
export type TemplateQueryHookResult = ReturnType<typeof useTemplateQuery>;
export const TemplateUpdateDocument = gql`
    subscription TemplateUpdate($simulatorId: ID!) {
  _templateUpdate(simulatorId: $simulatorId) {
    ...TemplateFragment
    __typename
  }
}
    ${TemplateFragmentFragmentDoc}`;
export function useTemplateUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TemplateUpdateSubscription, TemplateUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TemplateUpdateSubscription, TemplateUpdateSubscriptionVariables>(TemplateUpdateDocument, baseOptions);
      }
export type TemplateUpdateSubscriptionHookResult = ReturnType<typeof useTemplateUpdateSubscription>;
export const AddMissionDocument = gql`
    mutation AddMission($name: String!) {
  createMission(name: $name)
}
    `;
export function useAddMissionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddMissionMutation, AddMissionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddMissionMutation, AddMissionMutationVariables>(AddMissionDocument, baseOptions);
      }
export type AddMissionMutationHookResult = ReturnType<typeof useAddMissionMutation>;
export const ExecuteMacrosDocument = gql`
    mutation ExecuteMacros($simulatorId: ID!, $macros: [MacroInput]!) {
  triggerMacros(simulatorId: $simulatorId, macros: $macros)
}
    `;
export function useExecuteMacrosMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ExecuteMacrosMutation, ExecuteMacrosMutationVariables>) {
        return ApolloReactHooks.useMutation<ExecuteMacrosMutation, ExecuteMacrosMutationVariables>(ExecuteMacrosDocument, baseOptions);
      }
export type ExecuteMacrosMutationHookResult = ReturnType<typeof useExecuteMacrosMutation>;
export const SetSimulatorMissionDocument = gql`
    mutation SetSimulatorMission($simulatorId: ID!, $missionId: ID!, $stepId: ID) {
  setSimulatorMission(
    simulatorId: $simulatorId
    missionId: $missionId
    stepId: $stepId
  )
}
    `;
export function useSetSimulatorMissionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetSimulatorMissionMutation, SetSimulatorMissionMutationVariables>) {
        return ApolloReactHooks.useMutation<SetSimulatorMissionMutation, SetSimulatorMissionMutationVariables>(SetSimulatorMissionDocument, baseOptions);
      }
export type SetSimulatorMissionMutationHookResult = ReturnType<typeof useSetSimulatorMissionMutation>;
export const SetSimulatorTimelineStepDocument = gql`
    mutation SetSimulatorTimelineStep($simulatorId: ID!, $auxTimelineId: ID, $step: Int!) {
  setSimulatorTimelineStep(
    simulatorId: $simulatorId
    timelineId: $auxTimelineId
    step: $step
  )
}
    `;
export function useSetSimulatorTimelineStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetSimulatorTimelineStepMutation, SetSimulatorTimelineStepMutationVariables>) {
        return ApolloReactHooks.useMutation<SetSimulatorTimelineStepMutation, SetSimulatorTimelineStepMutationVariables>(SetSimulatorTimelineStepDocument, baseOptions);
      }
export type SetSimulatorTimelineStepMutationHookResult = ReturnType<typeof useSetSimulatorTimelineStepMutation>;
export const TimelineSimulatorDocument = gql`
    subscription TimelineSimulator($simulatorId: ID!) {
  simulatorsUpdate(simulatorId: $simulatorId) {
    id
    currentTimelineStep
    executedTimelineSteps
    missionConfigs
    stationSet {
      id
    }
    mission {
      id
    }
  }
}
    `;
export function useTimelineSimulatorSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TimelineSimulatorSubscription, TimelineSimulatorSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TimelineSimulatorSubscription, TimelineSimulatorSubscriptionVariables>(TimelineSimulatorDocument, baseOptions);
      }
export type TimelineSimulatorSubscriptionHookResult = ReturnType<typeof useTimelineSimulatorSubscription>;
export const TimelineMissionDocument = gql`
    subscription TimelineMission {
  missionsUpdate {
    id
    name
    description
    category
    timeline {
      id
      name
      order
      description
      timelineItems {
        id
        name
        type
        args
        event
        delay
      }
    }
  }
}
    `;
export function useTimelineMissionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TimelineMissionSubscription, TimelineMissionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TimelineMissionSubscription, TimelineMissionSubscriptionVariables>(TimelineMissionDocument, baseOptions);
      }
export type TimelineMissionSubscriptionHookResult = ReturnType<typeof useTimelineMissionSubscription>;
export const TractorBeamTargetLabelDocument = gql`
    mutation TractorBeamTargetLabel($id: ID!, $beam: ID!, $label: String!) {
  setTractorBeamTargetLabel(id: $id, beam: $beam, label: $label)
}
    `;
export function useTractorBeamTargetLabelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamTargetLabelMutation, TractorBeamTargetLabelMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamTargetLabelMutation, TractorBeamTargetLabelMutationVariables>(TractorBeamTargetLabelDocument, baseOptions);
      }
export type TractorBeamTargetLabelMutationHookResult = ReturnType<typeof useTractorBeamTargetLabelMutation>;
export const TractorBeamStateDocument = gql`
    mutation TractorBeamState($id: ID!, $beam: ID!, $state: Boolean!) {
  setTractorBeamState(id: $id, beam: $beam, state: $state)
}
    `;
export function useTractorBeamStateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamStateMutation, TractorBeamStateMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamStateMutation, TractorBeamStateMutationVariables>(TractorBeamStateDocument, baseOptions);
      }
export type TractorBeamStateMutationHookResult = ReturnType<typeof useTractorBeamStateMutation>;
export const TractorBeamStrengthDocument = gql`
    mutation TractorBeamStrength($id: ID!, $beam: ID!, $strength: Float!) {
  setTractorBeamStrength(id: $id, beam: $beam, strength: $strength)
}
    `;
export function useTractorBeamStrengthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamStrengthMutation, TractorBeamStrengthMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamStrengthMutation, TractorBeamStrengthMutationVariables>(TractorBeamStrengthDocument, baseOptions);
      }
export type TractorBeamStrengthMutationHookResult = ReturnType<typeof useTractorBeamStrengthMutation>;
export const TractorBeamStressDocument = gql`
    mutation TractorBeamStress($id: ID!, $beam: ID!, $stress: Float!) {
  setTractorBeamStress(id: $id, beam: $beam, stress: $stress)
}
    `;
export function useTractorBeamStressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamStressMutation, TractorBeamStressMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamStressMutation, TractorBeamStressMutationVariables>(TractorBeamStressDocument, baseOptions);
      }
export type TractorBeamStressMutationHookResult = ReturnType<typeof useTractorBeamStressMutation>;
export const TractorBeamUpdateDocument = gql`
    subscription TractorBeamUpdate($simulatorId: ID!) {
  tractorBeamUpdate(simulatorId: $simulatorId) {
    id
    name
    displayName
    beams {
      id
      state
      target
      targetLabel
      strength
      stress
      scanning
    }
    damage {
      damaged
      report
    }
    power {
      power
      powerLevels
    }
  }
}
    `;
export function useTractorBeamUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TractorBeamUpdateSubscription, TractorBeamUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TractorBeamUpdateSubscription, TractorBeamUpdateSubscriptionVariables>(TractorBeamUpdateDocument, baseOptions);
      }
export type TractorBeamUpdateSubscriptionHookResult = ReturnType<typeof useTractorBeamUpdateSubscription>;
export const TractorBeamTargetDocument = gql`
    mutation TractorBeamTarget($id: ID!, $beam: ID!, $state: Boolean!) {
  setTractorBeamTarget(id: $id, beam: $beam, target: $state)
}
    `;
export function useTractorBeamTargetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamTargetMutation, TractorBeamTargetMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamTargetMutation, TractorBeamTargetMutationVariables>(TractorBeamTargetDocument, baseOptions);
      }
export type TractorBeamTargetMutationHookResult = ReturnType<typeof useTractorBeamTargetMutation>;
export const ClientChangedDocument = gql`
    subscription ClientChanged {
  clientChanged {
    id
    label
    mobile
    cards
    flight {
      id
      name
      date
      simulators {
        id
        name
      }
    }
    simulator {
      id
      name
      alertlevel
      layout
      interfaces
      stations {
        name
      }
    }
    station {
      name
    }
    loginName
    loginState
    training
    soundPlayer
  }
}
    `;
export function useClientChangedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ClientChangedSubscription, ClientChangedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ClientChangedSubscription, ClientChangedSubscriptionVariables>(ClientChangedDocument, baseOptions);
      }
export type ClientChangedSubscriptionHookResult = ReturnType<typeof useClientChangedSubscription>;
export const DisconnectClientDocument = gql`
    mutation DisconnectClient($client: ID!) {
  clientDisconnect(client: $client)
}
    `;
export function useDisconnectClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DisconnectClientMutation, DisconnectClientMutationVariables>) {
        return ApolloReactHooks.useMutation<DisconnectClientMutation, DisconnectClientMutationVariables>(DisconnectClientDocument, baseOptions);
      }
export type DisconnectClientMutationHookResult = ReturnType<typeof useDisconnectClientMutation>;
export const FlightsSubDocument = gql`
    subscription FlightsSub {
  flightsUpdate {
    id
    name
    date
    running
    simulators {
      id
      name
      stations {
        name
      }
    }
  }
}
    `;
export function useFlightsSubSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<FlightsSubSubscription, FlightsSubSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<FlightsSubSubscription, FlightsSubSubscriptionVariables>(FlightsSubDocument, baseOptions);
      }
export type FlightsSubSubscriptionHookResult = ReturnType<typeof useFlightsSubSubscription>;
export const ClientsInterfacesAndKeyboardsDocument = gql`
    query ClientsInterfacesAndKeyboards {
  interfaces {
    id
    name
  }
  keyboard {
    id
    name
  }
  dmxSets {
    id
    name
  }
}
    `;
export function useClientsInterfacesAndKeyboardsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClientsInterfacesAndKeyboardsQuery, ClientsInterfacesAndKeyboardsQueryVariables>) {
        return ApolloReactHooks.useQuery<ClientsInterfacesAndKeyboardsQuery, ClientsInterfacesAndKeyboardsQueryVariables>(ClientsInterfacesAndKeyboardsDocument, baseOptions);
      }
export type ClientsInterfacesAndKeyboardsQueryHookResult = ReturnType<typeof useClientsInterfacesAndKeyboardsQuery>;
export const SetClientFlightDocument = gql`
    mutation SetClientFlight($client: ID!, $id: ID!) {
  clientSetFlight(client: $client, flightId: $id)
}
    `;
export function useSetClientFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetClientFlightMutation, SetClientFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<SetClientFlightMutation, SetClientFlightMutationVariables>(SetClientFlightDocument, baseOptions);
      }
export type SetClientFlightMutationHookResult = ReturnType<typeof useSetClientFlightMutation>;
export const SetClientSimulatorDocument = gql`
    mutation SetClientSimulator($client: ID!, $id: ID!) {
  clientSetSimulator(client: $client, simulatorId: $id)
}
    `;
export function useSetClientSimulatorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetClientSimulatorMutation, SetClientSimulatorMutationVariables>) {
        return ApolloReactHooks.useMutation<SetClientSimulatorMutation, SetClientSimulatorMutationVariables>(SetClientSimulatorDocument, baseOptions);
      }
export type SetClientSimulatorMutationHookResult = ReturnType<typeof useSetClientSimulatorMutation>;
export const SetClientStationDocument = gql`
    mutation SetClientStation($client: ID!, $id: ID!) {
  clientSetStation(client: $client, stationName: $id)
}
    `;
export function useSetClientStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetClientStationMutation, SetClientStationMutationVariables>) {
        return ApolloReactHooks.useMutation<SetClientStationMutation, SetClientStationMutationVariables>(SetClientStationDocument, baseOptions);
      }
export type SetClientStationMutationHookResult = ReturnType<typeof useSetClientStationMutation>;
export const SetSoundPlayerDocument = gql`
    mutation SetSoundPlayer($id: ID!, $soundPlayer: Boolean!) {
  clientSetSoundPlayer(client: $id, soundPlayer: $soundPlayer)
}
    `;
export function useSetSoundPlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetSoundPlayerMutation, SetSoundPlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<SetSoundPlayerMutation, SetSoundPlayerMutationVariables>(SetSoundPlayerDocument, baseOptions);
      }
export type SetSoundPlayerMutationHookResult = ReturnType<typeof useSetSoundPlayerMutation>;
export const ApplyClientSetDocument = gql`
    mutation ApplyClientSet($id: ID!, $flightId: ID!, $simulatorId: ID!, $templateId: ID!, $stationSetId: ID!) {
  applyClientSet(
    id: $id
    flightId: $flightId
    simulatorId: $simulatorId
    templateId: $templateId
    stationSetId: $stationSetId
  )
}
    `;
export function useApplyClientSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ApplyClientSetMutation, ApplyClientSetMutationVariables>) {
        return ApolloReactHooks.useMutation<ApplyClientSetMutation, ApplyClientSetMutationVariables>(ApplyClientSetDocument, baseOptions);
      }
export type ApplyClientSetMutationHookResult = ReturnType<typeof useApplyClientSetMutation>;
export const DeleteFlightDocument = gql`
    mutation DeleteFlight($flightId: ID!) {
  deleteFlight(flightId: $flightId)
}
    `;
export function useDeleteFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFlightMutation, DeleteFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteFlightMutation, DeleteFlightMutationVariables>(DeleteFlightDocument, baseOptions);
      }
export type DeleteFlightMutationHookResult = ReturnType<typeof useDeleteFlightMutation>;
export const FlightDocument = gql`
    query Flight {
  flights {
    id
    name
    flightType
    transmitted
    running
  }
}
    `;
export function useFlightQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FlightQuery, FlightQueryVariables>) {
        return ApolloReactHooks.useQuery<FlightQuery, FlightQueryVariables>(FlightDocument, baseOptions);
      }
export type FlightQueryHookResult = ReturnType<typeof useFlightQuery>;
export const PauseFlightDocument = gql`
    mutation PauseFlight($flightId: ID!) {
  pauseFlight(flightId: $flightId)
}
    `;
export function usePauseFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PauseFlightMutation, PauseFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<PauseFlightMutation, PauseFlightMutationVariables>(PauseFlightDocument, baseOptions);
      }
export type PauseFlightMutationHookResult = ReturnType<typeof usePauseFlightMutation>;
export const ResetFlightDocument = gql`
    mutation ResetFlight($flightId: ID!) {
  resetFlight(flightId: $flightId, full: true)
}
    `;
export function useResetFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetFlightMutation, ResetFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetFlightMutation, ResetFlightMutationVariables>(ResetFlightDocument, baseOptions);
      }
export type ResetFlightMutationHookResult = ReturnType<typeof useResetFlightMutation>;
export const LobbyResumeFlightDocument = gql`
    mutation LobbyResumeFlight($flightId: ID!) {
  resumeFlight(flightId: $flightId)
}
    `;
export function useLobbyResumeFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LobbyResumeFlightMutation, LobbyResumeFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<LobbyResumeFlightMutation, LobbyResumeFlightMutationVariables>(LobbyResumeFlightDocument, baseOptions);
      }
export type LobbyResumeFlightMutationHookResult = ReturnType<typeof useLobbyResumeFlightMutation>;
export const SetsPickerDocument = gql`
    query SetsPicker($flightId: ID) {
  flights(id: $flightId) {
    id
    name
    simulators {
      id
      templateId
      name
      stationSet {
        id
        name
      }
    }
  }
  sets {
    id
    name
    clients {
      id
      client {
        id
      }
      simulator {
        id
        name
      }
      stationSet {
        id
        name
      }
      station
    }
  }
}
    `;
export function useSetsPickerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SetsPickerQuery, SetsPickerQueryVariables>) {
        return ApolloReactHooks.useQuery<SetsPickerQuery, SetsPickerQueryVariables>(SetsPickerDocument, baseOptions);
      }
export type SetsPickerQueryHookResult = ReturnType<typeof useSetsPickerQuery>;
export const TransmitFlightDocument = gql`
    mutation TransmitFlight($flightId: ID!) {
  assignSpaceEdventuresFlightRecord(flightId: $flightId)
}
    `;
export function useTransmitFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TransmitFlightMutation, TransmitFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<TransmitFlightMutation, TransmitFlightMutationVariables>(TransmitFlightDocument, baseOptions);
      }
export type TransmitFlightMutationHookResult = ReturnType<typeof useTransmitFlightMutation>;
export const DmxConfigCreateDocument = gql`
    mutation DMXConfigCreate($name: String!) {
  dmxConfigCreate(name: $name)
}
    `;
export function useDmxConfigCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigCreateMutation, DmxConfigCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigCreateMutation, DmxConfigCreateMutationVariables>(DmxConfigCreateDocument, baseOptions);
      }
export type DmxConfigCreateMutationHookResult = ReturnType<typeof useDmxConfigCreateMutation>;
export const DmxConfigDuplicateDocument = gql`
    mutation DMXConfigDuplicate($id: ID!, $name: String!) {
  dmxConfigDuplicate(id: $id, name: $name)
}
    `;
export function useDmxConfigDuplicateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigDuplicateMutation, DmxConfigDuplicateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigDuplicateMutation, DmxConfigDuplicateMutationVariables>(DmxConfigDuplicateDocument, baseOptions);
      }
export type DmxConfigDuplicateMutationHookResult = ReturnType<typeof useDmxConfigDuplicateMutation>;
export const DmxConfigRemoveDocument = gql`
    mutation DMXConfigRemove($id: ID!) {
  dmxConfigRemove(id: $id)
}
    `;
export function useDmxConfigRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigRemoveMutation, DmxConfigRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigRemoveMutation, DmxConfigRemoveMutationVariables>(DmxConfigRemoveDocument, baseOptions);
      }
export type DmxConfigRemoveMutationHookResult = ReturnType<typeof useDmxConfigRemoveMutation>;
export const DmxConfigSetActionStrengthDocument = gql`
    mutation DMXConfigSetActionStrength($id: ID!, $actionStrength: Float!) {
  dmxConfigSetActionStrength(id: $id, actionStrength: $actionStrength)
}
    `;
export function useDmxConfigSetActionStrengthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigSetActionStrengthMutation, DmxConfigSetActionStrengthMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigSetActionStrengthMutation, DmxConfigSetActionStrengthMutationVariables>(DmxConfigSetActionStrengthDocument, baseOptions);
      }
export type DmxConfigSetActionStrengthMutationHookResult = ReturnType<typeof useDmxConfigSetActionStrengthMutation>;
export const DmxConfigSetConfigDocument = gql`
    mutation DMXConfigSetConfig($id: ID!, $config: JSON!) {
  dmxConfigSetConfig(id: $id, config: $config)
}
    `;
export function useDmxConfigSetConfigMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigSetConfigMutation, DmxConfigSetConfigMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigSetConfigMutation, DmxConfigSetConfigMutationVariables>(DmxConfigSetConfigDocument, baseOptions);
      }
export type DmxConfigSetConfigMutationHookResult = ReturnType<typeof useDmxConfigSetConfigMutation>;
export const DmxConfigSetNameDocument = gql`
    mutation DMXConfigSetName($id: ID!, $name: String!) {
  dmxConfigSetName(id: $id, name: $name)
}
    `;
export function useDmxConfigSetNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxConfigSetNameMutation, DmxConfigSetNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxConfigSetNameMutation, DmxConfigSetNameMutationVariables>(DmxConfigSetNameDocument, baseOptions);
      }
export type DmxConfigSetNameMutationHookResult = ReturnType<typeof useDmxConfigSetNameMutation>;
export const DmxConfigsDocument = gql`
    subscription DMXConfigs {
  dmxConfigs {
    id
    name
    config
    actionStrength
  }
}
    `;
export function useDmxConfigsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<DmxConfigsSubscription, DmxConfigsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<DmxConfigsSubscription, DmxConfigsSubscriptionVariables>(DmxConfigsDocument, baseOptions);
      }
export type DmxConfigsSubscriptionHookResult = ReturnType<typeof useDmxConfigsSubscription>;
export const DmxDeviceCreateDocument = gql`
    mutation DMXDeviceCreate($name: String!) {
  dmxDeviceCreate(name: $name)
}
    `;
export function useDmxDeviceCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxDeviceCreateMutation, DmxDeviceCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxDeviceCreateMutation, DmxDeviceCreateMutationVariables>(DmxDeviceCreateDocument, baseOptions);
      }
export type DmxDeviceCreateMutationHookResult = ReturnType<typeof useDmxDeviceCreateMutation>;
export const DmxDeviceRemoveDocument = gql`
    mutation DMXDeviceRemove($id: ID!) {
  dmxDeviceRemove(id: $id)
}
    `;
export function useDmxDeviceRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxDeviceRemoveMutation, DmxDeviceRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxDeviceRemoveMutation, DmxDeviceRemoveMutationVariables>(DmxDeviceRemoveDocument, baseOptions);
      }
export type DmxDeviceRemoveMutationHookResult = ReturnType<typeof useDmxDeviceRemoveMutation>;
export const DmxDeviceSetChannelsDocument = gql`
    mutation DMXDeviceSetChannels($id: ID!, $channels: [DMXChannelProperty!]!) {
  dmxDeviceSetChannels(id: $id, channels: $channels)
}
    `;
export function useDmxDeviceSetChannelsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxDeviceSetChannelsMutation, DmxDeviceSetChannelsMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxDeviceSetChannelsMutation, DmxDeviceSetChannelsMutationVariables>(DmxDeviceSetChannelsDocument, baseOptions);
      }
export type DmxDeviceSetChannelsMutationHookResult = ReturnType<typeof useDmxDeviceSetChannelsMutation>;
export const DmxDeviceSetNameDocument = gql`
    mutation DMXDeviceSetName($id: ID!, $name: String!) {
  dmxDeviceSetName(id: $id, name: $name)
}
    `;
export function useDmxDeviceSetNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxDeviceSetNameMutation, DmxDeviceSetNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxDeviceSetNameMutation, DmxDeviceSetNameMutationVariables>(DmxDeviceSetNameDocument, baseOptions);
      }
export type DmxDeviceSetNameMutationHookResult = ReturnType<typeof useDmxDeviceSetNameMutation>;
export const DmxDevicesDocument = gql`
    subscription DMXDevices {
  dmxDevices {
    id
    name
    channels
  }
}
    `;
export function useDmxDevicesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<DmxDevicesSubscription, DmxDevicesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<DmxDevicesSubscription, DmxDevicesSubscriptionVariables>(DmxDevicesDocument, baseOptions);
      }
export type DmxDevicesSubscriptionHookResult = ReturnType<typeof useDmxDevicesSubscription>;
export const DmxFixtureCreateDocument = gql`
    mutation DMXFixtureCreate($name: String!, $dmxSetId: ID!, $dmxDeviceId: ID!) {
  dmxFixtureCreate(name: $name, DMXSetId: $dmxSetId, DMXDeviceId: $dmxDeviceId)
}
    `;
export function useDmxFixtureCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureCreateMutation, DmxFixtureCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureCreateMutation, DmxFixtureCreateMutationVariables>(DmxFixtureCreateDocument, baseOptions);
      }
export type DmxFixtureCreateMutationHookResult = ReturnType<typeof useDmxFixtureCreateMutation>;
export const DmxFixtureRemoveDocument = gql`
    mutation DMXFixtureRemove($id: ID!, $dmxSetId: ID!) {
  dmxFixtureRemove(id: $id, DMXSetId: $dmxSetId)
}
    `;
export function useDmxFixtureRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureRemoveMutation, DmxFixtureRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureRemoveMutation, DmxFixtureRemoveMutationVariables>(DmxFixtureRemoveDocument, baseOptions);
      }
export type DmxFixtureRemoveMutationHookResult = ReturnType<typeof useDmxFixtureRemoveMutation>;
export const DmxFixtureSetChannelDocument = gql`
    mutation DMXFixtureSetChannel($id: ID!, $channel: Int!) {
  dmxFixtureSetChannel(id: $id, channel: $channel)
}
    `;
export function useDmxFixtureSetChannelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetChannelMutation, DmxFixtureSetChannelMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetChannelMutation, DmxFixtureSetChannelMutationVariables>(DmxFixtureSetChannelDocument, baseOptions);
      }
export type DmxFixtureSetChannelMutationHookResult = ReturnType<typeof useDmxFixtureSetChannelMutation>;
export const DmxFixtureSetDmxDeviceDocument = gql`
    mutation DMXFixtureSetDMXDevice($id: ID!, $deviceId: ID!) {
  dmxFixtureSetDMXDevice(id: $id, DMXDeviceID: $deviceId)
}
    `;
export function useDmxFixtureSetDmxDeviceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetDmxDeviceMutation, DmxFixtureSetDmxDeviceMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetDmxDeviceMutation, DmxFixtureSetDmxDeviceMutationVariables>(DmxFixtureSetDmxDeviceDocument, baseOptions);
      }
export type DmxFixtureSetDmxDeviceMutationHookResult = ReturnType<typeof useDmxFixtureSetDmxDeviceMutation>;
export const DmxFixtureSetModeDocument = gql`
    mutation DMXFixtureSetMode($id: ID!, $mode: DMXFixtureMode!) {
  dmxFixtureSetMode(id: $id, mode: $mode)
}
    `;
export function useDmxFixtureSetModeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetModeMutation, DmxFixtureSetModeMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetModeMutation, DmxFixtureSetModeMutationVariables>(DmxFixtureSetModeDocument, baseOptions);
      }
export type DmxFixtureSetModeMutationHookResult = ReturnType<typeof useDmxFixtureSetModeMutation>;
export const DmxFixtureSetNameDocument = gql`
    mutation DMXFixtureSetName($id: ID!, $name: String!) {
  dmxFixtureSetName(id: $id, name: $name)
}
    `;
export function useDmxFixtureSetNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetNameMutation, DmxFixtureSetNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetNameMutation, DmxFixtureSetNameMutationVariables>(DmxFixtureSetNameDocument, baseOptions);
      }
export type DmxFixtureSetNameMutationHookResult = ReturnType<typeof useDmxFixtureSetNameMutation>;
export const DmxFixtureSetPassiveChannelsDocument = gql`
    mutation DMXFixtureSetPassiveChannels($id: ID!, $passiveChannels: DMXPassiveChannelsInput!) {
  dmxFixtureSetPassiveChannels(id: $id, passiveChannels: $passiveChannels)
}
    `;
export function useDmxFixtureSetPassiveChannelsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetPassiveChannelsMutation, DmxFixtureSetPassiveChannelsMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetPassiveChannelsMutation, DmxFixtureSetPassiveChannelsMutationVariables>(DmxFixtureSetPassiveChannelsDocument, baseOptions);
      }
export type DmxFixtureSetPassiveChannelsMutationHookResult = ReturnType<typeof useDmxFixtureSetPassiveChannelsMutation>;
export const DmxFixtureSetTagsDocument = gql`
    mutation DMXFixtureSetTags($id: ID!, $newTags: [String!]!) {
  dmxFixtureSetTags(id: $id, newTags: $newTags)
}
    `;
export function useDmxFixtureSetTagsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxFixtureSetTagsMutation, DmxFixtureSetTagsMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxFixtureSetTagsMutation, DmxFixtureSetTagsMutationVariables>(DmxFixtureSetTagsDocument, baseOptions);
      }
export type DmxFixtureSetTagsMutationHookResult = ReturnType<typeof useDmxFixtureSetTagsMutation>;
export const DmxFixturesDocument = gql`
    subscription DMXFixtures($simulatorId: ID, $clientId: ID) {
  dmxFixtures(simulatorId: $simulatorId, clientId: $clientId) {
    id
    name
    DMXDevice {
      id
      name
      channels
    }
    channel
    mode
    tags
    passiveChannels {
      amber
      white
      uv
      intensity
      strobe
      generic
      nothing
      color
    }
  }
}
    `;
export function useDmxFixturesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<DmxFixturesSubscription, DmxFixturesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<DmxFixturesSubscription, DmxFixturesSubscriptionVariables>(DmxFixturesDocument, baseOptions);
      }
export type DmxFixturesSubscriptionHookResult = ReturnType<typeof useDmxFixturesSubscription>;
export const DmxFixtureTagsDocument = gql`
    query DMXFixtureTags {
  dmxFixtures {
    id
    tags
  }
}
    `;
export function useDmxFixtureTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DmxFixtureTagsQuery, DmxFixtureTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<DmxFixtureTagsQuery, DmxFixtureTagsQueryVariables>(DmxFixtureTagsDocument, baseOptions);
      }
export type DmxFixtureTagsQueryHookResult = ReturnType<typeof useDmxFixtureTagsQuery>;
export const DmxSetCreateDocument = gql`
    mutation DMXSetCreate($name: String!) {
  dmxSetCreate(name: $name)
}
    `;
export function useDmxSetCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxSetCreateMutation, DmxSetCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxSetCreateMutation, DmxSetCreateMutationVariables>(DmxSetCreateDocument, baseOptions);
      }
export type DmxSetCreateMutationHookResult = ReturnType<typeof useDmxSetCreateMutation>;
export const DmxSetDuplicateDocument = gql`
    mutation DMXSetDuplicate($id: ID!, $name: String!) {
  dmxSetDuplicate(id: $id, name: $name)
}
    `;
export function useDmxSetDuplicateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxSetDuplicateMutation, DmxSetDuplicateMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxSetDuplicateMutation, DmxSetDuplicateMutationVariables>(DmxSetDuplicateDocument, baseOptions);
      }
export type DmxSetDuplicateMutationHookResult = ReturnType<typeof useDmxSetDuplicateMutation>;
export const DmxSetRemoveDocument = gql`
    mutation DMXSetRemove($id: ID!) {
  dmxSetRemove(id: $id)
}
    `;
export function useDmxSetRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxSetRemoveMutation, DmxSetRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxSetRemoveMutation, DmxSetRemoveMutationVariables>(DmxSetRemoveDocument, baseOptions);
      }
export type DmxSetRemoveMutationHookResult = ReturnType<typeof useDmxSetRemoveMutation>;
export const DmxSetSetNameDocument = gql`
    mutation DMXSetSetName($id: ID!, $name: String!) {
  dmxSetSetName(id: $id, name: $name)
}
    `;
export function useDmxSetSetNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DmxSetSetNameMutation, DmxSetSetNameMutationVariables>) {
        return ApolloReactHooks.useMutation<DmxSetSetNameMutation, DmxSetSetNameMutationVariables>(DmxSetSetNameDocument, baseOptions);
      }
export type DmxSetSetNameMutationHookResult = ReturnType<typeof useDmxSetSetNameMutation>;
export const DmxSetsDocument = gql`
    subscription DMXSets {
  dmxSets {
    id
    name
    fixtures {
      id
      name
      DMXDevice {
        id
        name
        class
        channels
      }
      channel
      mode
      tags
    }
  }
}
    `;
export function useDmxSetsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<DmxSetsSubscription, DmxSetsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<DmxSetsSubscription, DmxSetsSubscriptionVariables>(DmxSetsDocument, baseOptions);
      }
export type DmxSetsSubscriptionHookResult = ReturnType<typeof useDmxSetsSubscription>;
export const EntityCreateTemplateDocument = gql`
    mutation EntityCreateTemplate($name: String!) {
  entityCreate(flightId: "template", template: true) {
    id
  }
  entitySetTemplate(category: "generic")
  entitySetIdentity(name: $name)
  entitySetAppearance(meshType: cube, color: "#0088ff")
}
    `;
export function useEntityCreateTemplateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityCreateTemplateMutation, EntityCreateTemplateMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityCreateTemplateMutation, EntityCreateTemplateMutationVariables>(EntityCreateTemplateDocument, baseOptions);
      }
export type EntityCreateTemplateMutationHookResult = ReturnType<typeof useEntityCreateTemplateMutation>;
export const FlightSetupDocument = gql`
    query FlightSetup {
  simulators(template: true) {
    id
    name
    spaceEdventuresId
    stationSets {
      id
      name
      stations {
        name
        cards {
          name
          component
        }
        widgets
      }
    }
    capabilities {
      systems
      docking
    }
  }
  missions(aux: false) {
    id
    name
    description
    category
    requirements(all: true) {
      cards
      systems
      spaceEdventures
      docking
    }
  }
}
    `;
export function useFlightSetupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FlightSetupQuery, FlightSetupQueryVariables>) {
        return ApolloReactHooks.useQuery<FlightSetupQuery, FlightSetupQueryVariables>(FlightSetupDocument, baseOptions);
      }
export type FlightSetupQueryHookResult = ReturnType<typeof useFlightSetupQuery>;
export const FlightTypesDocument = gql`
    query FlightTypes {
  thorium {
    spaceEdventuresCenter {
      id
      name
      flightTypes {
        id
        name
        classHours
        flightHours
      }
    }
  }
}
    `;
export function useFlightTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FlightTypesQuery, FlightTypesQueryVariables>) {
        return ApolloReactHooks.useQuery<FlightTypesQuery, FlightTypesQueryVariables>(FlightTypesDocument, baseOptions);
      }
export type FlightTypesQueryHookResult = ReturnType<typeof useFlightTypesQuery>;
export const StartFlightDocument = gql`
    mutation StartFlight($name: String!, $simulators: [SimulatorInput!]!, $flightType: String) {
  startFlight(name: $name, simulators: $simulators, flightType: $flightType)
}
    `;
export function useStartFlightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartFlightMutation, StartFlightMutationVariables>) {
        return ApolloReactHooks.useMutation<StartFlightMutation, StartFlightMutationVariables>(StartFlightDocument, baseOptions);
      }
export type StartFlightMutationHookResult = ReturnType<typeof useStartFlightMutation>;
export const CreateNewFlightSetDocument = gql`
    mutation CreateNewFlightSet($flightSet: FlightSetInput!) {
  createFlightSet(flightSet: $flightSet)
}
    `;
export function useCreateNewFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNewFlightSetMutation, CreateNewFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNewFlightSetMutation, CreateNewFlightSetMutationVariables>(CreateNewFlightSetDocument, baseOptions);
      }
export type CreateNewFlightSetMutationHookResult = ReturnType<typeof useCreateNewFlightSetMutation>;
export const DeleteFlightSetDocument = gql`
    mutation DeleteFlightSet($id: ID!) {
  deleteFlightSet(id: $id)
}
    `;
export function useDeleteFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFlightSetMutation, DeleteFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteFlightSetMutation, DeleteFlightSetMutationVariables>(DeleteFlightSetDocument, baseOptions);
      }
export type DeleteFlightSetMutationHookResult = ReturnType<typeof useDeleteFlightSetMutation>;
export const GetAllFlightSetsDocument = gql`
    query GetAllFlightSets {
  getAllFlightSets {
    id
    name
    backgroundImg
    startOptions {
      id
      name
      riskModifier
      imgUrl
      secondsForStartup
    }
    speedOptions {
      id
      name
      speedModifier
      riskModifier
      requiresMaxEngines
      imgUrl
    }
    exitOptions {
      id
      name
      riskModifier
      imgUrl
    }
    pointsOfInterest {
      id
      name
      location {
        x
        y
      }
      isVisible
      isFogOfWar
      speedIndex
      riskIndex
      type {
        category
        imageUri
      }
      information {
        basicInformation
        hasBasicInformation
        detailedInformation
        hasDetailedInformation
        secretInformation
        hasSecretInformation
      }
      iconUrl
      fullImageUrl
      transitOptions {
        name
        timeModifier
        riskModifier
        iconUrl
      }
      showName
      arrivalMacros {
        id
        event
        args
        delay
        noCancelOnReset
        needsConfig
      }
      leaveMacros {
        id
        event
        args
        delay
        noCancelOnReset
        needsConfig
      }
      transitMacros {
        id
        event
        args
        delay
        noCancelOnReset
        needsConfig
      }
    }
    defaultStartingLocation {
      x
      y
    }
    borders {
      name
      id
      location {
        side
      }
      iconUrl
      riskIndex
    }
    imageMaxX
    imageMaxY
    pixelsPerSecond
    label
    probeLaunchRangeRadius
    addOnTraining
    pixelDistanceModifier
    probeSpeedModifier
  }
}
    `;
export function useGetAllFlightSetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllFlightSetsQuery, GetAllFlightSetsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllFlightSetsQuery, GetAllFlightSetsQueryVariables>(GetAllFlightSetsDocument, baseOptions);
      }
export type GetAllFlightSetsQueryHookResult = ReturnType<typeof useGetAllFlightSetsQuery>;
export const UpdateFlightSetDocument = gql`
    mutation UpdateFlightSet($id: ID!, $flightSet: FlightSetInput!) {
  updateFlightSet(id: $id, flightSet: $flightSet)
}
    `;
export function useUpdateFlightSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFlightSetMutation, UpdateFlightSetMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateFlightSetMutation, UpdateFlightSetMutationVariables>(UpdateFlightSetDocument, baseOptions);
      }
export type UpdateFlightSetMutationHookResult = ReturnType<typeof useUpdateFlightSetMutation>;
export const HackingPresetCreateDocument = gql`
    mutation HackingPresetCreate($name: String!) {
  createHackingPreset(name: $name)
}
    `;
export function useHackingPresetCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingPresetCreateMutation, HackingPresetCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingPresetCreateMutation, HackingPresetCreateMutationVariables>(HackingPresetCreateDocument, baseOptions);
      }
export type HackingPresetCreateMutationHookResult = ReturnType<typeof useHackingPresetCreateMutation>;
export const HackingPresetDeleteDocument = gql`
    mutation HackingPresetDelete($id: ID!) {
  deleteHackingPreset(id: $id)
}
    `;
export function useHackingPresetDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingPresetDeleteMutation, HackingPresetDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingPresetDeleteMutation, HackingPresetDeleteMutationVariables>(HackingPresetDeleteDocument, baseOptions);
      }
export type HackingPresetDeleteMutationHookResult = ReturnType<typeof useHackingPresetDeleteMutation>;
export const HackingPresetsDocument = gql`
    query HackingPresets {
  hackingPresets {
    id
    name
    logs
    longRange
    remoteControl
    fileViewer
    longRangeMessages {
      id
      title
      message
    }
    commandLines
    files {
      id
      name
      level
      corrupted
      restoring
    }
  }
}
    `;
export function useHackingPresetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HackingPresetsQuery, HackingPresetsQueryVariables>) {
        return ApolloReactHooks.useQuery<HackingPresetsQuery, HackingPresetsQueryVariables>(HackingPresetsDocument, baseOptions);
      }
export type HackingPresetsQueryHookResult = ReturnType<typeof useHackingPresetsQuery>;
export const HackingPresetUpdateDocument = gql`
    mutation HackingPresetUpdate($id: ID!, $preset: JSON!) {
  updateHackingPreset(id: $id, preset: $preset)
}
    `;
export function useHackingPresetUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<HackingPresetUpdateMutation, HackingPresetUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<HackingPresetUpdateMutation, HackingPresetUpdateMutationVariables>(HackingPresetUpdateDocument, baseOptions);
      }
export type HackingPresetUpdateMutationHookResult = ReturnType<typeof useHackingPresetUpdateMutation>;
export const MacroDuplicateDocument = gql`
    mutation MacroDuplicate($id: ID!) {
  duplicateMacro(id: $id)
}
    `;
export function useMacroDuplicateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MacroDuplicateMutation, MacroDuplicateMutationVariables>) {
        return ApolloReactHooks.useMutation<MacroDuplicateMutation, MacroDuplicateMutationVariables>(MacroDuplicateDocument, baseOptions);
      }
export type MacroDuplicateMutationHookResult = ReturnType<typeof useMacroDuplicateMutation>;
export const MacroDuplicateActionDocument = gql`
    mutation MacroDuplicateAction($id: ID!, $actionId: ID!) {
  duplicateMacroAction(id: $id, actionId: $actionId)
}
    `;
export function useMacroDuplicateActionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MacroDuplicateActionMutation, MacroDuplicateActionMutationVariables>) {
        return ApolloReactHooks.useMutation<MacroDuplicateActionMutation, MacroDuplicateActionMutationVariables>(MacroDuplicateActionDocument, baseOptions);
      }
export type MacroDuplicateActionMutationHookResult = ReturnType<typeof useMacroDuplicateActionMutation>;
export const TimelineAddItemDocument = gql`
    mutation TimelineAddItem($simulatorId: ID, $missionId: ID, $timelineStepId: ID!, $timelineItem: TimelineItemInput!) {
  addTimelineItemToTimelineStep(
    simulatorId: $simulatorId
    missionId: $missionId
    timelineStepId: $timelineStepId
    timelineItem: $timelineItem
  )
}
    `;
export function useTimelineAddItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineAddItemMutation, TimelineAddItemMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineAddItemMutation, TimelineAddItemMutationVariables>(TimelineAddItemDocument, baseOptions);
      }
export type TimelineAddItemMutationHookResult = ReturnType<typeof useTimelineAddItemMutation>;
export const TimelineAddStepDocument = gql`
    mutation TimelineAddStep($simulatorId: ID, $missionId: ID, $name: String!, $description: String) {
  addTimelineStep(
    simulatorId: $simulatorId
    missionId: $missionId
    name: $name
    description: $description
  )
}
    `;
export function useTimelineAddStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineAddStepMutation, TimelineAddStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineAddStepMutation, TimelineAddStepMutationVariables>(TimelineAddStepDocument, baseOptions);
      }
export type TimelineAddStepMutationHookResult = ReturnType<typeof useTimelineAddStepMutation>;
export const TimelineDuplicateItemDocument = gql`
    mutation TimelineDuplicateItem($missionId: ID!, $timelineStepId: ID!, $timelineItemId: ID!) {
  timelineDuplicateItem(
    missionId: $missionId
    timelineStepId: $timelineStepId
    timelineItemId: $timelineItemId
  )
}
    `;
export function useTimelineDuplicateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineDuplicateItemMutation, TimelineDuplicateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineDuplicateItemMutation, TimelineDuplicateItemMutationVariables>(TimelineDuplicateItemDocument, baseOptions);
      }
export type TimelineDuplicateItemMutationHookResult = ReturnType<typeof useTimelineDuplicateItemMutation>;
export const TimelineDuplicateStepDocument = gql`
    mutation TimelineDuplicateStep($missionId: ID!, $timelineStepId: ID!) {
  duplicateTimelineStep(missionId: $missionId, timelineStepId: $timelineStepId)
}
    `;
export function useTimelineDuplicateStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineDuplicateStepMutation, TimelineDuplicateStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineDuplicateStepMutation, TimelineDuplicateStepMutationVariables>(TimelineDuplicateStepDocument, baseOptions);
      }
export type TimelineDuplicateStepMutationHookResult = ReturnType<typeof useTimelineDuplicateStepMutation>;
export const EditMissionDocument = gql`
    mutation EditMission($missionId: ID!, $name: String, $description: String, $category: String, $aux: Boolean) {
  editMission(
    missionId: $missionId
    name: $name
    description: $description
    category: $category
    aux: $aux
  )
}
    `;
export function useEditMissionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditMissionMutation, EditMissionMutationVariables>) {
        return ApolloReactHooks.useMutation<EditMissionMutation, EditMissionMutationVariables>(EditMissionDocument, baseOptions);
      }
export type EditMissionMutationHookResult = ReturnType<typeof useEditMissionMutation>;
export const IntrospectionQueryDocument = gql`
    query IntrospectionQuery {
  __schema {
    mutationType {
      name
      description
      fields {
        name
        description
      }
    }
  }
}
    `;
export function useIntrospectionQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntrospectionQueryQuery, IntrospectionQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<IntrospectionQueryQuery, IntrospectionQueryQueryVariables>(IntrospectionQueryDocument, baseOptions);
      }
export type IntrospectionQueryQueryHookResult = ReturnType<typeof useIntrospectionQueryQuery>;
export const MissionSubscriptionDocument = gql`
    subscription MissionSubscription($missionId: ID!) {
  missionsUpdate(missionId: $missionId) {
    id
    name
    description
    category
    aux
    extraRequirements {
      systems
      cards
    }
    requirements {
      systems
      cards
      spaceEdventures
      docking
    }
    timeline {
      id
      name
      description
      order
      timelineItems {
        id
        name
        type
        event
        args
        delay
        needsConfig
        noCancelOnReset
      }
    }
  }
}
    `;
export function useMissionSubscriptionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<MissionSubscriptionSubscription, MissionSubscriptionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<MissionSubscriptionSubscription, MissionSubscriptionSubscriptionVariables>(MissionSubscriptionDocument, baseOptions);
      }
export type MissionSubscriptionSubscriptionHookResult = ReturnType<typeof useMissionSubscriptionSubscription>;
export const RemoveMissionDocument = gql`
    mutation RemoveMission($id: ID!) {
  removeMission(missionId: $id)
}
    `;
export function useRemoveMissionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveMissionMutation, RemoveMissionMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveMissionMutation, RemoveMissionMutationVariables>(RemoveMissionDocument, baseOptions);
      }
export type RemoveMissionMutationHookResult = ReturnType<typeof useRemoveMissionMutation>;
export const TimelineRemoveItemDocument = gql`
    mutation TimelineRemoveItem($missionId: ID!, $timelineStepId: ID!, $timelineItemId: ID!) {
  removeTimelineStepItem(
    missionId: $missionId
    timelineStepId: $timelineStepId
    timelineItemId: $timelineItemId
  )
}
    `;
export function useTimelineRemoveItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineRemoveItemMutation, TimelineRemoveItemMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineRemoveItemMutation, TimelineRemoveItemMutationVariables>(TimelineRemoveItemDocument, baseOptions);
      }
export type TimelineRemoveItemMutationHookResult = ReturnType<typeof useTimelineRemoveItemMutation>;
export const TimelineRemoveStepDocument = gql`
    mutation TimelineRemoveStep($missionId: ID!, $timelineStepId: ID!) {
  removeTimelineStep(missionId: $missionId, timelineStepId: $timelineStepId)
}
    `;
export function useTimelineRemoveStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineRemoveStepMutation, TimelineRemoveStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineRemoveStepMutation, TimelineRemoveStepMutationVariables>(TimelineRemoveStepDocument, baseOptions);
      }
export type TimelineRemoveStepMutationHookResult = ReturnType<typeof useTimelineRemoveStepMutation>;
export const TimelineReorderItemDocument = gql`
    mutation TimelineReorderItem($missionId: ID, $timelineStepId: ID!, $timelineItemId: ID!, $order: Int!) {
  reorderTimelineItem(
    missionId: $missionId
    timelineStepId: $timelineStepId
    timelineItemId: $timelineItemId
    order: $order
  )
}
    `;
export function useTimelineReorderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineReorderItemMutation, TimelineReorderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineReorderItemMutation, TimelineReorderItemMutationVariables>(TimelineReorderItemDocument, baseOptions);
      }
export type TimelineReorderItemMutationHookResult = ReturnType<typeof useTimelineReorderItemMutation>;
export const TimelineReorderStepDocument = gql`
    mutation TimelineReorderStep($missionId: ID, $timelineStepId: ID!, $order: Int!) {
  reorderTimelineStep(
    missionId: $missionId
    timelineStepId: $timelineStepId
    order: $order
  )
}
    `;
export function useTimelineReorderStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineReorderStepMutation, TimelineReorderStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineReorderStepMutation, TimelineReorderStepMutationVariables>(TimelineReorderStepDocument, baseOptions);
      }
export type TimelineReorderStepMutationHookResult = ReturnType<typeof useTimelineReorderStepMutation>;
export const MissionSetRequirementsDocument = gql`
    mutation MissionSetRequirements($missionId: ID!, $requirements: RequirementInput!) {
  missionSetExtraRequirements(missionId: $missionId, requirements: $requirements)
}
    `;
export function useMissionSetRequirementsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MissionSetRequirementsMutation, MissionSetRequirementsMutationVariables>) {
        return ApolloReactHooks.useMutation<MissionSetRequirementsMutation, MissionSetRequirementsMutationVariables>(MissionSetRequirementsDocument, baseOptions);
      }
export type MissionSetRequirementsMutationHookResult = ReturnType<typeof useMissionSetRequirementsMutation>;
export const TimelineUpdateItemDocument = gql`
    mutation TimelineUpdateItem($simulatorId: ID, $missionId: ID, $timelineStepId: ID!, $timelineItemId: ID!, $timelineItem: TimelineItemInput!) {
  updateTimelineStepItem(
    simulatorId: $simulatorId
    missionId: $missionId
    timelineStepId: $timelineStepId
    timelineItemId: $timelineItemId
    updateTimelineItem: $timelineItem
  )
}
    `;
export function useTimelineUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineUpdateItemMutation, TimelineUpdateItemMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineUpdateItemMutation, TimelineUpdateItemMutationVariables>(TimelineUpdateItemDocument, baseOptions);
      }
export type TimelineUpdateItemMutationHookResult = ReturnType<typeof useTimelineUpdateItemMutation>;
export const TimelineUpdateStepDocument = gql`
    mutation TimelineUpdateStep($simulatorId: ID, $missionId: ID, $timelineStepId: ID!, $name: String, $description: String) {
  updateTimelineStep(
    simulatorId: $simulatorId
    missionId: $missionId
    timelineStepId: $timelineStepId
    name: $name
    description: $description
  )
}
    `;
export function useTimelineUpdateStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TimelineUpdateStepMutation, TimelineUpdateStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TimelineUpdateStepMutation, TimelineUpdateStepMutationVariables>(TimelineUpdateStepDocument, baseOptions);
      }
export type TimelineUpdateStepMutationHookResult = ReturnType<typeof useTimelineUpdateStepMutation>;
export const AddClientDocument = gql`
    mutation AddClient($id: ID!, $client: SetClientInput!) {
  addClientToSet(id: $id, client: $client)
}
    `;
export function useAddClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddClientMutation, AddClientMutationVariables>) {
        return ApolloReactHooks.useMutation<AddClientMutation, AddClientMutationVariables>(AddClientDocument, baseOptions);
      }
export type AddClientMutationHookResult = ReturnType<typeof useAddClientMutation>;
export const AddSetDocument = gql`
    mutation AddSet($name: String!) {
  createSet(name: $name)
}
    `;
export function useAddSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSetMutation, AddSetMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSetMutation, AddSetMutationVariables>(AddSetDocument, baseOptions);
      }
export type AddSetMutationHookResult = ReturnType<typeof useAddSetMutation>;
export const RemoveClientFromSetDocument = gql`
    mutation RemoveClientFromSet($id: ID!, $client: ID!) {
  removeClientFromSet(id: $id, clientId: $client)
}
    `;
export function useRemoveClientFromSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveClientFromSetMutation, RemoveClientFromSetMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveClientFromSetMutation, RemoveClientFromSetMutationVariables>(RemoveClientFromSetDocument, baseOptions);
      }
export type RemoveClientFromSetMutationHookResult = ReturnType<typeof useRemoveClientFromSetMutation>;
export const RemoveSetDocument = gql`
    mutation RemoveSet($id: ID!) {
  removeSet(id: $id)
}
    `;
export function useRemoveSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveSetMutation, RemoveSetMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveSetMutation, RemoveSetMutationVariables>(RemoveSetDocument, baseOptions);
      }
export type RemoveSetMutationHookResult = ReturnType<typeof useRemoveSetMutation>;
export const RenameSetDocument = gql`
    mutation RenameSet($id: ID!, $name: String!) {
  renameSet(id: $id, name: $name)
}
    `;
export function useRenameSetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RenameSetMutation, RenameSetMutationVariables>) {
        return ApolloReactHooks.useMutation<RenameSetMutation, RenameSetMutationVariables>(RenameSetDocument, baseOptions);
      }
export type RenameSetMutationHookResult = ReturnType<typeof useRenameSetMutation>;
export const SetKeyboardAndInterfaceDocument = gql`
    query SetKeyboardAndInterface($id: ID) {
  simulators(id: $id) {
    interfaces
  }
  interfaces {
    id
    name
  }
  keyboard {
    id
    name
  }
  dmxSets {
    id
    name
  }
}
    `;
export function useSetKeyboardAndInterfaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SetKeyboardAndInterfaceQuery, SetKeyboardAndInterfaceQueryVariables>) {
        return ApolloReactHooks.useQuery<SetKeyboardAndInterfaceQuery, SetKeyboardAndInterfaceQueryVariables>(SetKeyboardAndInterfaceDocument, baseOptions);
      }
export type SetKeyboardAndInterfaceQueryHookResult = ReturnType<typeof useSetKeyboardAndInterfaceQuery>;
export const SetsDocument = gql`
    query Sets {
  simulators(template: true) {
    id
    name
    layout
    systems {
      id
      type
    }
    stationSets {
      id
      name
      stations {
        name
      }
    }
  }
  sets {
    id
    name
    clients {
      id
      client {
        id
      }
      simulator {
        id
        name
      }
      stationSet {
        id
        name
      }
      station
      secondary
      soundPlayer
    }
  }
  clients {
    id
    cards
    mobile
  }
}
    `;
export function useSetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SetsQuery, SetsQueryVariables>) {
        return ApolloReactHooks.useQuery<SetsQuery, SetsQueryVariables>(SetsDocument, baseOptions);
      }
export type SetsQueryHookResult = ReturnType<typeof useSetsQuery>;
export const UpdateSetClientDocument = gql`
    mutation UpdateSetClient($id: ID!, $clientId: ID!, $secondary: Boolean, $soundPlayer: Boolean) {
  updateSetClient(
    id: $id
    client: {id: $clientId, secondary: $secondary, soundPlayer: $soundPlayer}
  )
}
    `;
export function useUpdateSetClientMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSetClientMutation, UpdateSetClientMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSetClientMutation, UpdateSetClientMutationVariables>(UpdateSetClientDocument, baseOptions);
      }
export type UpdateSetClientMutationHookResult = ReturnType<typeof useUpdateSetClientMutation>;
export const AddCardDocument = gql`
    mutation AddCard($id: ID!, $name: String!, $cardName: String!, $cardComponent: String!, $cardIcon: String) {
  addCardToStation(
    stationSetID: $id
    stationName: $name
    cardName: $cardName
    cardComponent: $cardComponent
    cardIcon: $cardIcon
  )
}
    `;
export function useAddCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCardMutation, AddCardMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCardMutation, AddCardMutationVariables>(AddCardDocument, baseOptions);
      }
export type AddCardMutationHookResult = ReturnType<typeof useAddCardMutation>;
export const AddStationDocument = gql`
    mutation AddStation($id: ID!, $name: String!) {
  addStationToStationSet(stationSetID: $id, stationName: $name)
}
    `;
export function useAddStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddStationMutation, AddStationMutationVariables>) {
        return ApolloReactHooks.useMutation<AddStationMutation, AddStationMutationVariables>(AddStationDocument, baseOptions);
      }
export type AddStationMutationHookResult = ReturnType<typeof useAddStationMutation>;
export const StationSetDuplicateDocument = gql`
    mutation StationSetDuplicate($stationSetID: ID!, $name: String!) {
  duplicateStationSet(stationSetID: $stationSetID, name: $name)
}
    `;
export function useStationSetDuplicateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StationSetDuplicateMutation, StationSetDuplicateMutationVariables>) {
        return ApolloReactHooks.useMutation<StationSetDuplicateMutation, StationSetDuplicateMutationVariables>(StationSetDuplicateDocument, baseOptions);
      }
export type StationSetDuplicateMutationHookResult = ReturnType<typeof useStationSetDuplicateMutation>;
export const PanelsAndInterfacesDocument = gql`
    query PanelsAndInterfaces {
  softwarePanels {
    id
    name
  }
  interfaces {
    id
    name
  }
}
    `;
export function usePanelsAndInterfacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PanelsAndInterfacesQuery, PanelsAndInterfacesQueryVariables>) {
        return ApolloReactHooks.useQuery<PanelsAndInterfacesQuery, PanelsAndInterfacesQueryVariables>(PanelsAndInterfacesDocument, baseOptions);
      }
export type PanelsAndInterfacesQueryHookResult = ReturnType<typeof usePanelsAndInterfacesQuery>;
export const RemoveCardDocument = gql`
    mutation RemoveCard($id: ID!, $stationName: String!, $cardName: String!) {
  removeCardFromStation(
    stationSetID: $id
    stationName: $stationName
    cardName: $cardName
  )
}
    `;
export function useRemoveCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveCardMutation, RemoveCardMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveCardMutation, RemoveCardMutationVariables>(RemoveCardDocument, baseOptions);
      }
export type RemoveCardMutationHookResult = ReturnType<typeof useRemoveCardMutation>;
export const RemoveStationDocument = gql`
    mutation RemoveStation($id: ID!, $stationName: String!) {
  removeStationFromStationSet(stationSetID: $id, stationName: $stationName)
}
    `;
export function useRemoveStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveStationMutation, RemoveStationMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveStationMutation, RemoveStationMutationVariables>(RemoveStationDocument, baseOptions);
      }
export type RemoveStationMutationHookResult = ReturnType<typeof useRemoveStationMutation>;
export const RenameStationDocument = gql`
    mutation RenameStation($id: ID!, $name: String!, $newName: String!) {
  editStationInStationSet(
    stationSetID: $id
    stationName: $name
    newStationName: $newName
  )
}
    `;
export function useRenameStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RenameStationMutation, RenameStationMutationVariables>) {
        return ApolloReactHooks.useMutation<RenameStationMutation, RenameStationMutationVariables>(RenameStationDocument, baseOptions);
      }
export type RenameStationMutationHookResult = ReturnType<typeof useRenameStationMutation>;
export const ReorderStationWidgetsDocument = gql`
    mutation ReorderStationWidgets($id: ID!, $name: String!, $widget: String!, $order: Int!) {
  reorderStationWidgets(
    stationSetId: $id
    stationName: $name
    widget: $widget
    order: $order
  )
}
    `;
export function useReorderStationWidgetsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReorderStationWidgetsMutation, ReorderStationWidgetsMutationVariables>) {
        return ApolloReactHooks.useMutation<ReorderStationWidgetsMutation, ReorderStationWidgetsMutationVariables>(ReorderStationWidgetsDocument, baseOptions);
      }
export type ReorderStationWidgetsMutationHookResult = ReturnType<typeof useReorderStationWidgetsMutation>;
export const SetAmbianceDocument = gql`
    mutation SetAmbiance($stationSetID: ID!, $stationName: String!, $ambiance: String) {
  setStationAmbiance(
    stationSetID: $stationSetID
    stationName: $stationName
    ambiance: $ambiance
  )
}
    `;
export function useSetAmbianceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetAmbianceMutation, SetAmbianceMutationVariables>) {
        return ApolloReactHooks.useMutation<SetAmbianceMutation, SetAmbianceMutationVariables>(SetAmbianceDocument, baseOptions);
      }
export type SetAmbianceMutationHookResult = ReturnType<typeof useSetAmbianceMutation>;
export const SetStationCrewCountDocument = gql`
    mutation SetStationCrewCount($stationSetId: ID!, $crewCount: Int!) {
  setStationSetCrewCount(stationSetID: $stationSetId, crewCount: $crewCount)
}
    `;
export function useSetStationCrewCountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetStationCrewCountMutation, SetStationCrewCountMutationVariables>) {
        return ApolloReactHooks.useMutation<SetStationCrewCountMutation, SetStationCrewCountMutationVariables>(SetStationCrewCountDocument, baseOptions);
      }
export type SetStationCrewCountMutationHookResult = ReturnType<typeof useSetStationCrewCountMutation>;
export const SetStationDescriptionDocument = gql`
    mutation SetStationDescription($stationSetID: ID!, $stationName: String!, $description: String!) {
  setStationDescription(
    stationSetID: $stationSetID
    stationName: $stationName
    description: $description
  )
}
    `;
export function useSetStationDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetStationDescriptionMutation, SetStationDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<SetStationDescriptionMutation, SetStationDescriptionMutationVariables>(SetStationDescriptionDocument, baseOptions);
      }
export type SetStationDescriptionMutationHookResult = ReturnType<typeof useSetStationDescriptionMutation>;
export const SetStationLayoutDocument = gql`
    mutation SetStationLayout($id: ID!, $name: String!, $layout: String!) {
  setStationLayout(stationSetID: $id, stationName: $name, layout: $layout)
}
    `;
export function useSetStationLayoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetStationLayoutMutation, SetStationLayoutMutationVariables>) {
        return ApolloReactHooks.useMutation<SetStationLayoutMutation, SetStationLayoutMutationVariables>(SetStationLayoutDocument, baseOptions);
      }
export type SetStationLayoutMutationHookResult = ReturnType<typeof useSetStationLayoutMutation>;
export const StationSetTrainingDocument = gql`
    mutation StationSetTraining($stationSetID: ID!, $stationName: String!, $training: String!) {
  setStationTraining(
    stationSetID: $stationSetID
    stationName: $stationName
    training: $training
  )
}
    `;
export function useStationSetTrainingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StationSetTrainingMutation, StationSetTrainingMutationVariables>) {
        return ApolloReactHooks.useMutation<StationSetTrainingMutation, StationSetTrainingMutationVariables>(StationSetTrainingDocument, baseOptions);
      }
export type StationSetTrainingMutationHookResult = ReturnType<typeof useStationSetTrainingMutation>;
export const ToggleStationMessageGroupDocument = gql`
    mutation ToggleStationMessageGroup($stationSetId: ID!, $station: String!, $group: String!, $state: Boolean!) {
  toggleStationMessageGroup(
    stationSetId: $stationSetId
    station: $station
    group: $group
    state: $state
  )
}
    `;
export function useToggleStationMessageGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleStationMessageGroupMutation, ToggleStationMessageGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleStationMessageGroupMutation, ToggleStationMessageGroupMutationVariables>(ToggleStationMessageGroupDocument, baseOptions);
      }
export type ToggleStationMessageGroupMutationHookResult = ReturnType<typeof useToggleStationMessageGroupMutation>;
export const ToggleStationExecDocument = gql`
    mutation ToggleStationExec($stationSetID: ID!, $stationName: String!, $exec: Boolean!) {
  setStationExecutive(
    stationSetID: $stationSetID
    stationName: $stationName
    exec: $exec
  )
}
    `;
export function useToggleStationExecMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleStationExecMutation, ToggleStationExecMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleStationExecMutation, ToggleStationExecMutationVariables>(ToggleStationExecDocument, baseOptions);
      }
export type ToggleStationExecMutationHookResult = ReturnType<typeof useToggleStationExecMutation>;
export const ToggleStationLoginDocument = gql`
    mutation ToggleStationLogin($stationSetID: ID!, $stationName: String!, $login: Boolean!) {
  setStationLogin(
    stationSetID: $stationSetID
    stationName: $stationName
    login: $login
  )
}
    `;
export function useToggleStationLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleStationLoginMutation, ToggleStationLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleStationLoginMutation, ToggleStationLoginMutationVariables>(ToggleStationLoginDocument, baseOptions);
      }
export type ToggleStationLoginMutationHookResult = ReturnType<typeof useToggleStationLoginMutation>;
export const ToggleStationWidgetDocument = gql`
    mutation ToggleStationWidget($stationSetID: ID!, $stationName: String!, $widget: String!, $state: Boolean!) {
  toggleStationWidgets(
    stationSetID: $stationSetID
    stationName: $stationName
    widget: $widget
    state: $state
  )
}
    `;
export function useToggleStationWidgetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleStationWidgetMutation, ToggleStationWidgetMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleStationWidgetMutation, ToggleStationWidgetMutationVariables>(ToggleStationWidgetDocument, baseOptions);
      }
export type ToggleStationWidgetMutationHookResult = ReturnType<typeof useToggleStationWidgetMutation>;
export const UpdateStationCardDocument = gql`
    mutation UpdateStationCard($stationSetId: ID!, $stationName: String!, $cardName: String!, $name: String, $component: String, $icon: String) {
  editCardInStationSet(
    stationSetID: $stationSetId
    stationName: $stationName
    cardName: $cardName
    newCardName: $name
    cardComponent: $component
    cardIcon: $icon
  )
}
    `;
export function useUpdateStationCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateStationCardMutation, UpdateStationCardMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateStationCardMutation, UpdateStationCardMutationVariables>(UpdateStationCardDocument, baseOptions);
      }
export type UpdateStationCardMutationHookResult = ReturnType<typeof useUpdateStationCardMutation>;
export const SystemSetWingDocument = gql`
    mutation SystemSetWing($systemId: ID!, $wing: String!) {
  systemSetWing(systemId: $systemId, wing: $wing)
}
    `;
export function useSystemSetWingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SystemSetWingMutation, SystemSetWingMutationVariables>) {
        return ApolloReactHooks.useMutation<SystemSetWingMutation, SystemSetWingMutationVariables>(SystemSetWingDocument, baseOptions);
      }
export type SystemSetWingMutationHookResult = ReturnType<typeof useSystemSetWingMutation>;
export const SensorsSetPingsDocument = gql`
    mutation SensorsSetPings($id: ID!, $ping: Boolean!) {
  sensorsSetHasPing(id: $id, ping: $ping)
}
    `;
export function useSensorsSetPingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SensorsSetPingsMutation, SensorsSetPingsMutationVariables>) {
        return ApolloReactHooks.useMutation<SensorsSetPingsMutation, SensorsSetPingsMutationVariables>(SensorsSetPingsDocument, baseOptions);
      }
export type SensorsSetPingsMutationHookResult = ReturnType<typeof useSensorsSetPingsMutation>;
export const ReactorSetWingsDocument = gql`
    mutation ReactorSetWings($id: ID!, $hasWings: Boolean!) {
  reactorSetHasWings(id: $id, hasWings: $hasWings)
}
    `;
export function useReactorSetWingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReactorSetWingsMutation, ReactorSetWingsMutationVariables>) {
        return ApolloReactHooks.useMutation<ReactorSetWingsMutation, ReactorSetWingsMutationVariables>(ReactorSetWingsDocument, baseOptions);
      }
export type ReactorSetWingsMutationHookResult = ReturnType<typeof useReactorSetWingsMutation>;
export const TractorBeamSetCountDocument = gql`
    mutation TractorBeamSetCount($id: ID!, $beams: Int!) {
  setTractorBeamCount(id: $id, beams: $beams)
}
    `;
export function useTractorBeamSetCountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TractorBeamSetCountMutation, TractorBeamSetCountMutationVariables>) {
        return ApolloReactHooks.useMutation<TractorBeamSetCountMutation, TractorBeamSetCountMutationVariables>(TractorBeamSetCountDocument, baseOptions);
      }
export type TractorBeamSetCountMutationHookResult = ReturnType<typeof useTractorBeamSetCountMutation>;
export const StealthSetSensorSonarDocument = gql`
    mutation StealthSetSensorSonar($id: ID!, $sonar: Boolean!) {
  stealthSensorsSonar(id: $id, sonar: $sonar)
}
    `;
export function useStealthSetSensorSonarMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StealthSetSensorSonarMutation, StealthSetSensorSonarMutationVariables>) {
        return ApolloReactHooks.useMutation<StealthSetSensorSonarMutation, StealthSetSensorSonarMutationVariables>(StealthSetSensorSonarDocument, baseOptions);
      }
export type StealthSetSensorSonarMutationHookResult = ReturnType<typeof useStealthSetSensorSonarMutation>;
export const RemoveSimulatorDocument = gql`
    mutation RemoveSimulator($id: ID!) {
  removeSimulator(simulatorId: $id)
}
    `;
export function useRemoveSimulatorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveSimulatorMutation, RemoveSimulatorMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveSimulatorMutation, RemoveSimulatorMutationVariables>(RemoveSimulatorDocument, baseOptions);
      }
export type RemoveSimulatorMutationHookResult = ReturnType<typeof useRemoveSimulatorMutation>;
export const SimulatorsConfigDocument = gql`
    subscription SimulatorsConfig {
  simulatorsUpdate(template: true) {
    id
    name
    alertlevel
    layout
    caps
    exocomps
    panels
    missionConfigs
    commandLines
    triggers
    interfaces
    midiSets
    stepDamage
    verifyStep
    hasPrinter
    hasLegs
    bridgeOfficerMessaging
    spaceEdventuresId
    requiredDamageSteps {
      id
      name
      args {
        end
        cleanup
        name
        orders
        room
        preamble
        type
        message
        code
        inventory
        destination
        equipment
        query
        reactivate
      }
    }
    optionalDamageSteps {
      id
      name
      args {
        end
        cleanup
        name
        orders
        room
        preamble
        type
        message
        code
        inventory
        destination
        equipment
        query
        reactivate
      }
    }
    damageTasks {
      id
      taskTemplate {
        id
        name
        definition
        reportTypes
      }
      required
      nextSteps {
        id
        name
        definition
      }
    }
    assets {
      mesh
      texture
      side
      top
      logo
      bridge
    }
    soundEffects
    systems {
      id
      type
      name
      displayName
      upgradeName
      upgradeMacros {
        id
        event
        args
        delay
      }
      requiredDamageSteps {
        id
        name
        args {
          end
          cleanup
          name
          orders
          room
          preamble
          type
          message
          code
          inventory
          destination
          equipment
          query
          reactivate
        }
      }
      optionalDamageSteps {
        id
        name
        args {
          end
          cleanup
          name
          orders
          room
          preamble
          type
          message
          code
          inventory
          destination
          equipment
          query
          reactivate
        }
      }
      damageTasks {
        id
        taskTemplate {
          id
          name
          definition
          reportTypes
        }
        required
        nextSteps {
          id
          name
          definition
        }
      }
    }
    stationSets {
      id
      name
      crewCount
      stations {
        name
        description
        tags
        training
        ambiance
        login
        executive
        messageGroups
        layout
        widgets
        cards {
          name
          component
        }
      }
    }
  }
}
    `;
export function useSimulatorsConfigSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SimulatorsConfigSubscription, SimulatorsConfigSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SimulatorsConfigSubscription, SimulatorsConfigSubscriptionVariables>(SimulatorsConfigDocument, baseOptions);
      }
export type SimulatorsConfigSubscriptionHookResult = ReturnType<typeof useSimulatorsConfigSubscription>;
export const StationSetConfigDocument = gql`
    subscription StationSetConfig {
  stationSetUpdate {
    id
    name
    crewCount
    simulator {
      id
    }
    stations {
      name
      description
      tags
      training
      ambiance
      login
      messageGroups
      executive
      widgets
      layout
      cards {
        name
        component
      }
    }
  }
}
    `;
export function useStationSetConfigSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<StationSetConfigSubscription, StationSetConfigSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<StationSetConfigSubscription, StationSetConfigSubscriptionVariables>(StationSetConfigDocument, baseOptions);
      }
export type StationSetConfigSubscriptionHookResult = ReturnType<typeof useStationSetConfigSubscription>;
export const StationSetTagsDocument = gql`
    mutation StationSetTags($stationSetId: ID!, $stationName: String!, $tags: [String!]!) {
  setStationTags(
    stationSetID: $stationSetId
    stationName: $stationName
    tags: $tags
  )
}
    `;
export function useStationSetTagsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StationSetTagsMutation, StationSetTagsMutationVariables>) {
        return ApolloReactHooks.useMutation<StationSetTagsMutation, StationSetTagsMutationVariables>(StationSetTagsDocument, baseOptions);
      }
export type StationSetTagsMutationHookResult = ReturnType<typeof useStationSetTagsMutation>;
export const AddTaskTemplateDocument = gql`
    mutation AddTaskTemplate($definition: String!) {
  addTaskTemplate(definition: $definition)
}
    `;
export function useAddTaskTemplateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTaskTemplateMutation, AddTaskTemplateMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTaskTemplateMutation, AddTaskTemplateMutationVariables>(AddTaskTemplateDocument, baseOptions);
      }
export type AddTaskTemplateMutationHookResult = ReturnType<typeof useAddTaskTemplateMutation>;
export const ImportTemplatesDocument = gql`
    mutation ImportTemplates {
  importTaskTemplates
}
    `;
export function useImportTemplatesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ImportTemplatesMutation, ImportTemplatesMutationVariables>) {
        return ApolloReactHooks.useMutation<ImportTemplatesMutation, ImportTemplatesMutationVariables>(ImportTemplatesDocument, baseOptions);
      }
export type ImportTemplatesMutationHookResult = ReturnType<typeof useImportTemplatesMutation>;
export const RemoveTaskTemplateDocument = gql`
    mutation RemoveTaskTemplate($id: ID!) {
  removeTaskTemplate(id: $id)
}
    `;
export function useRemoveTaskTemplateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTaskTemplateMutation, RemoveTaskTemplateMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveTaskTemplateMutation, RemoveTaskTemplateMutationVariables>(RemoveTaskTemplateDocument, baseOptions);
      }
export type RemoveTaskTemplateMutationHookResult = ReturnType<typeof useRemoveTaskTemplateMutation>;
export const RenameTaskTemplateDocument = gql`
    mutation RenameTaskTemplate($id: ID!, $name: String!) {
  renameTaskTemplate(id: $id, name: $name)
}
    `;
export function useRenameTaskTemplateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RenameTaskTemplateMutation, RenameTaskTemplateMutationVariables>) {
        return ApolloReactHooks.useMutation<RenameTaskTemplateMutation, RenameTaskTemplateMutationVariables>(RenameTaskTemplateDocument, baseOptions);
      }
export type RenameTaskTemplateMutationHookResult = ReturnType<typeof useRenameTaskTemplateMutation>;
export const SetTaskMacroDocument = gql`
    mutation SetTaskMacro($id: ID!, $macros: [ActionInput!]!) {
  setTaskTemplateMacros(id: $id, macros: $macros)
}
    `;
export function useSetTaskMacroMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTaskMacroMutation, SetTaskMacroMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTaskMacroMutation, SetTaskMacroMutationVariables>(SetTaskMacroDocument, baseOptions);
      }
export type SetTaskMacroMutationHookResult = ReturnType<typeof useSetTaskMacroMutation>;
export const SetTaskPreMacroDocument = gql`
    mutation SetTaskPreMacro($id: ID!, $macros: [ActionInput!]!) {
  setTaskTemplatePreMacros(id: $id, macros: $macros)
}
    `;
export function useSetTaskPreMacroMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTaskPreMacroMutation, SetTaskPreMacroMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTaskPreMacroMutation, SetTaskPreMacroMutationVariables>(SetTaskPreMacroDocument, baseOptions);
      }
export type SetTaskPreMacroMutationHookResult = ReturnType<typeof useSetTaskPreMacroMutation>;
export const SetTaskTemplateReportTypesDocument = gql`
    mutation SetTaskTemplateReportTypes($id: ID!, $reportTypes: [String]!) {
  setTaskTemplateReportTypes(id: $id, reportTypes: $reportTypes)
}
    `;
export function useSetTaskTemplateReportTypesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTaskTemplateReportTypesMutation, SetTaskTemplateReportTypesMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTaskTemplateReportTypesMutation, SetTaskTemplateReportTypesMutationVariables>(SetTaskTemplateReportTypesDocument, baseOptions);
      }
export type SetTaskTemplateReportTypesMutationHookResult = ReturnType<typeof useSetTaskTemplateReportTypesMutation>;
export const SetTaskTemplateValuesDocument = gql`
    mutation SetTaskTemplateValues($id: ID!, $values: JSON!) {
  setTaskTemplateValues(id: $id, values: $values)
}
    `;
export function useSetTaskTemplateValuesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTaskTemplateValuesMutation, SetTaskTemplateValuesMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTaskTemplateValuesMutation, SetTaskTemplateValuesMutationVariables>(SetTaskTemplateValuesDocument, baseOptions);
      }
export type SetTaskTemplateValuesMutationHookResult = ReturnType<typeof useSetTaskTemplateValuesMutation>;
export const TaskDefinitionsDocument = gql`
    query TaskDefinitions {
  taskDefinitions {
    id
    class
    name
    stations {
      name
      cards {
        name
        component
      }
    }
    valuesInput
    valuesValue
    active
  }
  thorium {
    addedTaskTemplates
  }
}
    `;
export function useTaskDefinitionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TaskDefinitionsQuery, TaskDefinitionsQueryVariables>) {
        return ApolloReactHooks.useQuery<TaskDefinitionsQuery, TaskDefinitionsQueryVariables>(TaskDefinitionsDocument, baseOptions);
      }
export type TaskDefinitionsQueryHookResult = ReturnType<typeof useTaskDefinitionsQuery>;
export const TaskFlowAddDocument = gql`
    mutation TaskFlowAdd($name: String!) {
  taskFlowAdd(name: $name)
}
    `;
export function useTaskFlowAddMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowAddMutation, TaskFlowAddMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowAddMutation, TaskFlowAddMutationVariables>(TaskFlowAddDocument, baseOptions);
      }
export type TaskFlowAddMutationHookResult = ReturnType<typeof useTaskFlowAddMutation>;
export const TaskFlowAddStepDocument = gql`
    mutation TaskFlowAddStep($id: ID!, $name: String!) {
  taskFlowAddStep(id: $id, name: $name)
}
    `;
export function useTaskFlowAddStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowAddStepMutation, TaskFlowAddStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowAddStepMutation, TaskFlowAddStepMutationVariables>(TaskFlowAddStepDocument, baseOptions);
      }
export type TaskFlowAddStepMutationHookResult = ReturnType<typeof useTaskFlowAddStepMutation>;
export const TaskFlowRemoveDocument = gql`
    mutation TaskFlowRemove($id: ID!) {
  taskFlowRemove(id: $id)
}
    `;
export function useTaskFlowRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowRemoveMutation, TaskFlowRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowRemoveMutation, TaskFlowRemoveMutationVariables>(TaskFlowRemoveDocument, baseOptions);
      }
export type TaskFlowRemoveMutationHookResult = ReturnType<typeof useTaskFlowRemoveMutation>;
export const TaskFlowRemoveStepDocument = gql`
    mutation TaskFlowRemoveStep($id: ID!, $stepId: ID!) {
  taskFlowRemoveStep(id: $id, stepId: $stepId)
}
    `;
export function useTaskFlowRemoveStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowRemoveStepMutation, TaskFlowRemoveStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowRemoveStepMutation, TaskFlowRemoveStepMutationVariables>(TaskFlowRemoveStepDocument, baseOptions);
      }
export type TaskFlowRemoveStepMutationHookResult = ReturnType<typeof useTaskFlowRemoveStepMutation>;
export const TaskFlowRenameDocument = gql`
    mutation TaskFlowRename($id: ID!, $name: String!) {
  taskFlowRename(id: $id, name: $name)
}
    `;
export function useTaskFlowRenameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowRenameMutation, TaskFlowRenameMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowRenameMutation, TaskFlowRenameMutationVariables>(TaskFlowRenameDocument, baseOptions);
      }
export type TaskFlowRenameMutationHookResult = ReturnType<typeof useTaskFlowRenameMutation>;
export const TaskFlowRenameStepDocument = gql`
    mutation TaskFlowRenameStep($id: ID!, $stepId: ID!, $name: String!) {
  taskFlowRenameStep(id: $id, stepId: $stepId, name: $name)
}
    `;
export function useTaskFlowRenameStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowRenameStepMutation, TaskFlowRenameStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowRenameStepMutation, TaskFlowRenameStepMutationVariables>(TaskFlowRenameStepDocument, baseOptions);
      }
export type TaskFlowRenameStepMutationHookResult = ReturnType<typeof useTaskFlowRenameStepMutation>;
export const TaskFlowReorderStepDocument = gql`
    mutation TaskFlowReorderStep($id: ID!, $stepId: ID!, $order: Int!) {
  taskFlowReorderStep(id: $id, stepId: $stepId, order: $order)
}
    `;
export function useTaskFlowReorderStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowReorderStepMutation, TaskFlowReorderStepMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowReorderStepMutation, TaskFlowReorderStepMutationVariables>(TaskFlowReorderStepDocument, baseOptions);
      }
export type TaskFlowReorderStepMutationHookResult = ReturnType<typeof useTaskFlowReorderStepMutation>;
export const TaskFlowSetCategoryDocument = gql`
    mutation TaskFlowSetCategory($id: ID!, $category: String!) {
  taskFlowSetCategory(id: $id, category: $category)
}
    `;
export function useTaskFlowSetCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowSetCategoryMutation, TaskFlowSetCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowSetCategoryMutation, TaskFlowSetCategoryMutationVariables>(TaskFlowSetCategoryDocument, baseOptions);
      }
export type TaskFlowSetCategoryMutationHookResult = ReturnType<typeof useTaskFlowSetCategoryMutation>;
export const TaskFlowStepAddTaskDocument = gql`
    mutation TaskFlowStepAddTask($id: ID!, $stepId: ID!, $task: TaskInput!) {
  taskFlowStepAddTask(id: $id, stepId: $stepId, task: $task)
}
    `;
export function useTaskFlowStepAddTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowStepAddTaskMutation, TaskFlowStepAddTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowStepAddTaskMutation, TaskFlowStepAddTaskMutationVariables>(TaskFlowStepAddTaskDocument, baseOptions);
      }
export type TaskFlowStepAddTaskMutationHookResult = ReturnType<typeof useTaskFlowStepAddTaskMutation>;
export const TaskFlowStepEditTaskDocument = gql`
    mutation TaskFlowStepEditTask($id: ID!, $stepId: ID!, $taskId: ID!, $task: TaskInput!) {
  taskFlowStepEditTask(id: $id, stepId: $stepId, taskId: $taskId, task: $task)
}
    `;
export function useTaskFlowStepEditTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowStepEditTaskMutation, TaskFlowStepEditTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowStepEditTaskMutation, TaskFlowStepEditTaskMutationVariables>(TaskFlowStepEditTaskDocument, baseOptions);
      }
export type TaskFlowStepEditTaskMutationHookResult = ReturnType<typeof useTaskFlowStepEditTaskMutation>;
export const TaskFlowStepRemoveTaskDocument = gql`
    mutation TaskFlowStepRemoveTask($id: ID!, $stepId: ID!, $taskId: ID!) {
  taskFlowStepRemoveTask(id: $id, stepId: $stepId, taskId: $taskId)
}
    `;
export function useTaskFlowStepRemoveTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowStepRemoveTaskMutation, TaskFlowStepRemoveTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowStepRemoveTaskMutation, TaskFlowStepRemoveTaskMutationVariables>(TaskFlowStepRemoveTaskDocument, baseOptions);
      }
export type TaskFlowStepRemoveTaskMutationHookResult = ReturnType<typeof useTaskFlowStepRemoveTaskMutation>;
export const TaskFlowStepCompleteAllDocument = gql`
    mutation TaskFlowStepCompleteAll($id: ID!, $stepId: ID!, $completeAll: Boolean!) {
  taskFlowStepSetCompleteAll(id: $id, stepId: $stepId, completeAll: $completeAll)
}
    `;
export function useTaskFlowStepCompleteAllMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowStepCompleteAllMutation, TaskFlowStepCompleteAllMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowStepCompleteAllMutation, TaskFlowStepCompleteAllMutationVariables>(TaskFlowStepCompleteAllDocument, baseOptions);
      }
export type TaskFlowStepCompleteAllMutationHookResult = ReturnType<typeof useTaskFlowStepCompleteAllMutation>;
export const TaskFlowStepDelayDocument = gql`
    mutation TaskFlowStepDelay($id: ID!, $stepId: ID!, $delay: Int!) {
  taskFlowStepSetDelay(id: $id, stepId: $stepId, delay: $delay)
}
    `;
export function useTaskFlowStepDelayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskFlowStepDelayMutation, TaskFlowStepDelayMutationVariables>) {
        return ApolloReactHooks.useMutation<TaskFlowStepDelayMutation, TaskFlowStepDelayMutationVariables>(TaskFlowStepDelayDocument, baseOptions);
      }
export type TaskFlowStepDelayMutationHookResult = ReturnType<typeof useTaskFlowStepDelayMutation>;
export const TaskFlowsConfigDocument = gql`
    subscription TaskFlowsConfig {
  taskFlows {
    id
    name
    category
    steps {
      id
      name
      tasks {
        id
        station
        stationTags
        definition
        values
        private
        macros {
          id
          event
          args
          delay
        }
        preMacros {
          id
          event
          args
          delay
        }
      }
      delay
      completeAll
    }
  }
}
    `;
export function useTaskFlowsConfigSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TaskFlowsConfigSubscription, TaskFlowsConfigSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TaskFlowsConfigSubscription, TaskFlowsConfigSubscriptionVariables>(TaskFlowsConfigDocument, baseOptions);
      }
export type TaskFlowsConfigSubscriptionHookResult = ReturnType<typeof useTaskFlowsConfigSubscription>;
export const TaskTemplatesDocument = gql`
    subscription TaskTemplates {
  taskTemplatesUpdate {
    id
    name
    definition
    values
    reportTypes
    macros {
      id
      event
      args
      delay
    }
    preMacros {
      id
      event
      args
      delay
    }
  }
}
    `;
export function useTaskTemplatesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<TaskTemplatesSubscription, TaskTemplatesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<TaskTemplatesSubscription, TaskTemplatesSubscriptionVariables>(TaskTemplatesDocument, baseOptions);
      }
export type TaskTemplatesSubscriptionHookResult = ReturnType<typeof useTaskTemplatesSubscription>;
export const EntityRemoveEngineDocument = gql`
    mutation EntityRemoveEngine($id: ID!, $type: EntityEngineEnum!) {
  entityRemoveEngine(id: $id, type: $type)
}
    `;
export function useEntityRemoveEngineMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveEngineMutation, EntityRemoveEngineMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveEngineMutation, EntityRemoveEngineMutationVariables>(EntityRemoveEngineDocument, baseOptions);
      }
export type EntityRemoveEngineMutationHookResult = ReturnType<typeof useEntityRemoveEngineMutation>;
export const EntityRemoveThrustersDocument = gql`
    mutation EntityRemoveThrusters($id: ID!) {
  entityRemoveThrusters(id: $id)
}
    `;
export function useEntityRemoveThrustersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveThrustersMutation, EntityRemoveThrustersMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveThrustersMutation, EntityRemoveThrustersMutationVariables>(EntityRemoveThrustersDocument, baseOptions);
      }
export type EntityRemoveThrustersMutationHookResult = ReturnType<typeof useEntityRemoveThrustersMutation>;
export const EntitySetEngineDocument = gql`
    mutation EntitySetEngine($id: ID!, $type: EntityEngineEnum!, $maxSpeed: Float, $currentSpeed: Float) {
  entitySetEngine(
    id: $id
    type: $type
    maxSpeed: $maxSpeed
    currentSpeed: $currentSpeed
  )
}
    `;
export function useEntitySetEngineMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetEngineMutation, EntitySetEngineMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetEngineMutation, EntitySetEngineMutationVariables>(EntitySetEngineDocument, baseOptions);
      }
export type EntitySetEngineMutationHookResult = ReturnType<typeof useEntitySetEngineMutation>;
export const EntitySetThrustersDocument = gql`
    mutation EntitySetThrusters($id: ID!, $rotationSpeed: Float, $movementSpeed: Float, $direction: CoordinatesInput, $rotationDelta: CoordinatesInput) {
  entitySetThrusters(
    id: $id
    rotationSpeed: $rotationSpeed
    movementSpeed: $movementSpeed
    direction: $direction
    rotationDelta: $rotationDelta
  )
}
    `;
export function useEntitySetThrustersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetThrustersMutation, EntitySetThrustersMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetThrustersMutation, EntitySetThrustersMutationVariables>(EntitySetThrustersDocument, baseOptions);
      }
export type EntitySetThrustersMutationHookResult = ReturnType<typeof useEntitySetThrustersMutation>;
export const EntitiesSetPositionDocument = gql`
    mutation EntitiesSetPosition($entities: [EntitiesLocationInput!]!) {
  entitiesSetPosition(entities: $entities)
}
    `;
export function useEntitiesSetPositionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitiesSetPositionMutation, EntitiesSetPositionMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitiesSetPositionMutation, EntitiesSetPositionMutationVariables>(EntitiesSetPositionDocument, baseOptions);
      }
export type EntitiesSetPositionMutationHookResult = ReturnType<typeof useEntitiesSetPositionMutation>;
export const EntityCreateDocument = gql`
    mutation EntityCreate($flightId: ID!, $position: EntityCoordinatesInput!, $name: String!, $stageParentId: ID!, $color: String, $meshType: MeshTypeEnum!, $modelAsset: String, $materialMapAsset: String, $ringMapAsset: String, $cloudMapAsset: String, $emissiveColor: String, $emissiveIntensity: Float, $glowMode: GlowModeEnum, $glowColor: String, $lightIntensity: Float, $lightDecay: Float, $lightColor: String) {
  entityCreate(flightId: $flightId) {
    id
  }
  entitySetStageChild(parentId: $stageParentId)
  entitySetLocation(position: $position)
  entitySetIdentity(name: $name)
  entitySetAppearance(
    color: $color
    meshType: $meshType
    modelAsset: $modelAsset
    materialMapAsset: $materialMapAsset
    ringMapAsset: $ringMapAsset
    cloudMapAsset: $cloudMapAsset
    emissiveColor: $emissiveColor
    emissiveIntensity: $emissiveIntensity
  )
  entitySetGlow(glowMode: $glowMode, color: $glowColor)
  entitySetLight(
    intensity: $lightIntensity
    color: $lightColor
    decay: $lightDecay
  )
}
    `;
export function useEntityCreateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityCreateMutation, EntityCreateMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityCreateMutation, EntityCreateMutationVariables>(EntityCreateDocument, baseOptions);
      }
export type EntityCreateMutationHookResult = ReturnType<typeof useEntityCreateMutation>;
export const EntitiesDocument = gql`
    query Entities($flightId: ID!) {
  entities(flightId: $flightId, inert: true) {
    ...EntityData
  }
}
    ${EntityDataFragmentDoc}`;
export function useEntitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EntitiesQuery, EntitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<EntitiesQuery, EntitiesQueryVariables>(EntitiesDocument, baseOptions);
      }
export type EntitiesQueryHookResult = ReturnType<typeof useEntitiesQuery>;
export const EntityRemoveDocument = gql`
    mutation EntityRemove($id: [ID!]!) {
  entityRemove(id: $id)
}
    `;
export function useEntityRemoveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveMutation, EntityRemoveMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveMutation, EntityRemoveMutationVariables>(EntityRemoveDocument, baseOptions);
      }
export type EntityRemoveMutationHookResult = ReturnType<typeof useEntityRemoveMutation>;
export const EntityRemoveGlowDocument = gql`
    mutation EntityRemoveGlow($id: ID!) {
  entityRemoveGlow(id: $id)
}
    `;
export function useEntityRemoveGlowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveGlowMutation, EntityRemoveGlowMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveGlowMutation, EntityRemoveGlowMutationVariables>(EntityRemoveGlowDocument, baseOptions);
      }
export type EntityRemoveGlowMutationHookResult = ReturnType<typeof useEntityRemoveGlowMutation>;
export const EntityRemoveLightDocument = gql`
    mutation EntityRemoveLight($id: ID!) {
  entityRemoveLight(id: $id)
}
    `;
export function useEntityRemoveLightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveLightMutation, EntityRemoveLightMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveLightMutation, EntityRemoveLightMutationVariables>(EntityRemoveLightDocument, baseOptions);
      }
export type EntityRemoveLightMutationHookResult = ReturnType<typeof useEntityRemoveLightMutation>;
export const EntityRemoveStageDocument = gql`
    mutation EntityRemoveStage($id: ID!) {
  entityRemoveStage(id: $id)
}
    `;
export function useEntityRemoveStageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntityRemoveStageMutation, EntityRemoveStageMutationVariables>) {
        return ApolloReactHooks.useMutation<EntityRemoveStageMutation, EntityRemoveStageMutationVariables>(EntityRemoveStageDocument, baseOptions);
      }
export type EntityRemoveStageMutationHookResult = ReturnType<typeof useEntityRemoveStageMutation>;
export const EntitySetAppearanceDocument = gql`
    mutation EntitySetAppearance($id: ID!, $color: String, $meshType: MeshTypeEnum, $modelAsset: String, $materialMapAsset: String, $cloudMapAsset: String, $ringMapAsset: String, $emissiveColor: String, $emissiveIntensity: Float, $scale: Float) {
  entitySetAppearance(
    id: $id
    color: $color
    meshType: $meshType
    modelAsset: $modelAsset
    materialMapAsset: $materialMapAsset
    cloudMapAsset: $cloudMapAsset
    ringMapAsset: $ringMapAsset
    emissiveColor: $emissiveColor
    emissiveIntensity: $emissiveIntensity
    scale: $scale
  )
}
    `;
export function useEntitySetAppearanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetAppearanceMutation, EntitySetAppearanceMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetAppearanceMutation, EntitySetAppearanceMutationVariables>(EntitySetAppearanceDocument, baseOptions);
      }
export type EntitySetAppearanceMutationHookResult = ReturnType<typeof useEntitySetAppearanceMutation>;
export const EntitySetGlowDocument = gql`
    mutation EntitySetGlow($id: ID!, $glowMode: GlowModeEnum, $color: String) {
  entitySetGlow(id: $id, glowMode: $glowMode, color: $color)
}
    `;
export function useEntitySetGlowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetGlowMutation, EntitySetGlowMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetGlowMutation, EntitySetGlowMutationVariables>(EntitySetGlowDocument, baseOptions);
      }
export type EntitySetGlowMutationHookResult = ReturnType<typeof useEntitySetGlowMutation>;
export const EntitySetIdentityDocument = gql`
    mutation EntitySetIdentity($id: ID!, $name: String!) {
  entitySetIdentity(id: $id, name: $name)
}
    `;
export function useEntitySetIdentityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetIdentityMutation, EntitySetIdentityMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetIdentityMutation, EntitySetIdentityMutationVariables>(EntitySetIdentityDocument, baseOptions);
      }
export type EntitySetIdentityMutationHookResult = ReturnType<typeof useEntitySetIdentityMutation>;
export const EntitySetLightDocument = gql`
    mutation EntitySetLight($id: ID!, $color: String, $intensity: Float, $decay: Float) {
  entitySetLight(id: $id, color: $color, intensity: $intensity, decay: $decay)
}
    `;
export function useEntitySetLightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetLightMutation, EntitySetLightMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetLightMutation, EntitySetLightMutationVariables>(EntitySetLightDocument, baseOptions);
      }
export type EntitySetLightMutationHookResult = ReturnType<typeof useEntitySetLightMutation>;
export const EntitySetLocationDocument = gql`
    mutation EntitySetLocation($id: ID!, $position: EntityCoordinatesInput, $velocity: EntityCoordinatesInput, $acceleration: EntityCoordinatesInput, $rotation: QuaternionInput, $rotationVelocity: EntityCoordinatesInput, $rotationAcceleration: EntityCoordinatesInput) {
  entitySetLocation(
    id: $id
    position: $position
    velocity: $velocity
    acceleration: $acceleration
    rotation: $rotation
    rotationVelocity: $rotationVelocity
    rotationAcceleration: $rotationAcceleration
  )
}
    `;
export function useEntitySetLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetLocationMutation, EntitySetLocationMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetLocationMutation, EntitySetLocationMutationVariables>(EntitySetLocationDocument, baseOptions);
      }
export type EntitySetLocationMutationHookResult = ReturnType<typeof useEntitySetLocationMutation>;
export const EntitySetRotationVelocityMagnitudeDocument = gql`
    mutation EntitySetRotationVelocityMagnitude($id: ID!, $rotationVelocity: CoordinatesInput!) {
  entitySetRotationVelocityMagnitude(id: $id, rotationVelocity: $rotationVelocity)
}
    `;
export function useEntitySetRotationVelocityMagnitudeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetRotationVelocityMagnitudeMutation, EntitySetRotationVelocityMagnitudeMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetRotationVelocityMagnitudeMutation, EntitySetRotationVelocityMagnitudeMutationVariables>(EntitySetRotationVelocityMagnitudeDocument, baseOptions);
      }
export type EntitySetRotationVelocityMagnitudeMutationHookResult = ReturnType<typeof useEntitySetRotationVelocityMagnitudeMutation>;
export const EntitySetStageDocument = gql`
    mutation EntitySetStage($id: ID!, $scaleLabel: String, $scaleLabelShort: String, $skyboxKey: String) {
  entitySetStage(
    id: $id
    scaleLabel: $scaleLabel
    scaleLabelShort: $scaleLabelShort
    skyboxKey: $skyboxKey
  )
}
    `;
export function useEntitySetStageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetStageMutation, EntitySetStageMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetStageMutation, EntitySetStageMutationVariables>(EntitySetStageDocument, baseOptions);
      }
export type EntitySetStageMutationHookResult = ReturnType<typeof useEntitySetStageMutation>;
export const EntitySetTemplateDocument = gql`
    mutation EntitySetTemplate($id: ID, $category: String!) {
  entitySetTemplate(id: $id, category: $category)
}
    `;
export function useEntitySetTemplateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EntitySetTemplateMutation, EntitySetTemplateMutationVariables>) {
        return ApolloReactHooks.useMutation<EntitySetTemplateMutation, EntitySetTemplateMutationVariables>(EntitySetTemplateDocument, baseOptions);
      }
export type EntitySetTemplateMutationHookResult = ReturnType<typeof useEntitySetTemplateMutation>;
export const SoundPickerDocument = gql`
    query SoundPicker {
  assetFolders {
    id
    name
    fullPath
    folderPath
    objects {
      id
      name
      fullPath
    }
  }
}
    `;
export function useSoundPickerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SoundPickerQuery, SoundPickerQueryVariables>) {
        return ApolloReactHooks.useQuery<SoundPickerQuery, SoundPickerQueryVariables>(SoundPickerDocument, baseOptions);
      }
export type SoundPickerQueryHookResult = ReturnType<typeof useSoundPickerQuery>;