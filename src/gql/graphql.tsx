import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = null | T;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    }
  | T;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { output: boolean; input: boolean };
  String: { output: string; input: string };
  timestamptz: { output: any; input: any };
  Float: { output: number; input: number };
  Int: { output: number; input: number };
  ObjectID: { output: any; input: any };
  ID: { output: string; input: string };
  uuid: { output: any; input: any };
  Date: { output: any; input: any };
};

export type Address = {
  address?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  __typename?: 'Address';
};

export type Capsule = {
  original_launch?: Maybe<Scalars['Date']['output']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  reuse_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  landings?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  dragon?: Maybe<Dragon>;
  __typename?: 'Capsule';
};

export type CapsuleMission = {
  name?: Maybe<Scalars['String']['output']>;
  flight?: Maybe<Scalars['Int']['output']>;
  __typename?: 'CapsuleMission';
};

export type CapsulesFind = {
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  landings?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Core = {
  water_landing?: Maybe<Scalars['Boolean']['output']>;
  original_launch?: Maybe<Scalars['Date']['output']>;
  rtls_landings?: Maybe<Scalars['Int']['output']>;
  rtls_attempts?: Maybe<Scalars['Int']['output']>;
  asds_landings?: Maybe<Scalars['Int']['output']>;
  asds_attempts?: Maybe<Scalars['Int']['output']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  reuse_count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  __typename?: 'Core';
};

export type CoreMission = {
  name?: Maybe<Scalars['String']['output']>;
  flight?: Maybe<Scalars['Int']['output']>;
  __typename?: 'CoreMission';
};

export type CoresFind = {
  water_landing?: InputMaybe<Scalars['Boolean']['input']>;
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  rtls_landings?: InputMaybe<Scalars['Int']['input']>;
  rtls_attempts?: InputMaybe<Scalars['Int']['input']>;
  asds_landings?: InputMaybe<Scalars['Int']['input']>;
  asds_attempts?: InputMaybe<Scalars['Int']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  missions?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
};

export type Distance = {
  meters?: Maybe<Scalars['Float']['output']>;
  feet?: Maybe<Scalars['Float']['output']>;
  __typename?: 'Distance';
};

export type Dragon = {
  sidewall_angle_deg?: Maybe<Scalars['Float']['output']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  orbit_duration_yr?: Maybe<Scalars['Int']['output']>;
  first_flight?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  crew_capacity?: Maybe<Scalars['Int']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  dry_mass_lb?: Maybe<Scalars['Int']['output']>;
  dry_mass_kg?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  heat_shield?: Maybe<DragonHeatShield>;
  id?: Maybe<Scalars['ID']['output']>;
  return_payload_vol?: Maybe<Volume>;
  launch_payload_vol?: Maybe<Volume>;
  return_payload_mass?: Maybe<Mass>;
  launch_payload_mass?: Maybe<Mass>;
  height_w_trunk?: Maybe<Distance>;
  trunk?: Maybe<DragonTrunk>;
  diameter?: Maybe<Distance>;
  __typename?: 'Dragon';
};

export type DragonHeatShield = {
  dev_partner?: Maybe<Scalars['String']['output']>;
  size_meters?: Maybe<Scalars['Float']['output']>;
  temp_degrees?: Maybe<Scalars['Int']['output']>;
  material?: Maybe<Scalars['String']['output']>;
  __typename?: 'DragonHeatShield';
};

export type DragonPressurizedCapsule = {
  __typename?: 'DragonPressurizedCapsule';
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  fuel_2?: Maybe<Scalars['String']['output']>;
  fuel_1?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  pods?: Maybe<Scalars['Int']['output']>;
  __typename?: 'DragonThrust';
  thrust?: Maybe<Force>;
};

export type DragonTrunk = {
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
  __typename?: 'DragonTrunk';
};

export type DragonTrunkCargo = {
  unpressurized_cargo?: Maybe<Scalars['Boolean']['output']>;
  solar_array?: Maybe<Scalars['Int']['output']>;
  __typename?: 'DragonTrunkCargo';
};

export type Force = {
  lbf?: Maybe<Scalars['Float']['output']>;
  kN?: Maybe<Scalars['Float']['output']>;
  __typename?: 'Force';
};

export type HistoriesResult = {
  data?: Maybe<Array<Maybe<History>>>;
  __typename?: 'HistoriesResult';
  result?: Maybe<Result>;
};

export type History = {
  event_date_unix?: Maybe<Scalars['Date']['output']>;
  event_date_utc?: Maybe<Scalars['Date']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  flight?: Maybe<Launch>;
  __typename?: 'History';
  links?: Maybe<Link>;
};

export type HistoryFind = {
  flight_number?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Info = {
  cto_propulsion?: Maybe<Scalars['String']['output']>;
  launch_sites?: Maybe<Scalars['Int']['output']>;
  valuation?: Maybe<Scalars['Float']['output']>;
  test_sites?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  founder?: Maybe<Scalars['String']['output']>;
  employees?: Maybe<Scalars['Int']['output']>;
  vehicles?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  founded?: Maybe<Scalars['Int']['output']>;
  cto?: Maybe<Scalars['String']['output']>;
  coo?: Maybe<Scalars['String']['output']>;
  ceo?: Maybe<Scalars['String']['output']>;
  headquarters?: Maybe<Address>;
  links?: Maybe<InfoLinks>;
  __typename?: 'Info';
};

export type InfoLinks = {
  elon_twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  flickr?: Maybe<Scalars['String']['output']>;
  __typename?: 'InfoLinks';
};

export type Landpad = {
  successful_landings?: Maybe<Scalars['String']['output']>;
  attempted_landings?: Maybe<Scalars['String']['output']>;
  landing_type?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  __typename?: 'Landpad';
};

export type Launch = {
  mission_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tentative_max_precision?: Maybe<Scalars['String']['output']>;
  static_fire_date_unix?: Maybe<Scalars['Date']['output']>;
  static_fire_date_utc?: Maybe<Scalars['Date']['output']>;
  launch_success?: Maybe<Scalars['Boolean']['output']>;
  launch_date_local?: Maybe<Scalars['Date']['output']>;
  launch_date_unix?: Maybe<Scalars['Date']['output']>;
  launch_date_utc?: Maybe<Scalars['Date']['output']>;
  is_tentative?: Maybe<Scalars['Boolean']['output']>;
  mission_name?: Maybe<Scalars['String']['output']>;
  launch_year?: Maybe<Scalars['String']['output']>;
  upcoming?: Maybe<Scalars['Boolean']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  telemetry?: Maybe<LaunchTelemetry>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  launch_site?: Maybe<LaunchSite>;
  rocket?: Maybe<LaunchRocket>;
  links?: Maybe<LaunchLinks>;
  __typename?: 'Launch';
};

export type LaunchFind = {
  fairings_recovery_attempt?: InputMaybe<Scalars['String']['input']>;
  tentative_max_precision?: InputMaybe<Scalars['String']['input']>;
  second_stage_block?: InputMaybe<Scalars['String']['input']>;
  fairings_recovered?: InputMaybe<Scalars['String']['input']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
  side_core2_reuse?: InputMaybe<Scalars['String']['input']>;
  side_core1_reuse?: InputMaybe<Scalars['String']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  launch_date_local?: InputMaybe<Scalars['Date']['input']>;
  landing_vehicle?: InputMaybe<Scalars['String']['input']>;
  fairings_reused?: InputMaybe<Scalars['String']['input']>;
  site_name_long?: InputMaybe<Scalars['String']['input']>;
  launch_success?: InputMaybe<Scalars['String']['input']>;
  landing_intent?: InputMaybe<Scalars['String']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  fairings_reuse?: InputMaybe<Scalars['String']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  launch_date_utc?: InputMaybe<Scalars['Date']['input']>;
  fairings_ship?: InputMaybe<Scalars['String']['input']>;
  capsule_reuse?: InputMaybe<Scalars['String']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  mission_name?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  landing_type?: InputMaybe<Scalars['String']['input']>;
  land_success?: InputMaybe<Scalars['String']['input']>;
  rocket_type?: InputMaybe<Scalars['String']['input']>;
  rocket_name?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  launch_year?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  core_serial?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
  mission_id?: InputMaybe<Scalars['String']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  core_reuse?: InputMaybe<Scalars['String']['input']>;
  cap_serial?: InputMaybe<Scalars['String']['input']>;
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  tentative?: InputMaybe<Scalars['String']['input']>;
  site_name?: InputMaybe<Scalars['String']['input']>;
  rocket_id?: InputMaybe<Scalars['String']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  gridfins?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  core_flight?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['String']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  ship?: InputMaybe<Scalars['String']['input']>;
  legs?: InputMaybe<Scalars['String']['input']>;
  tbd?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type LaunchLinks = {
  flickr_images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mission_patch_small?: Maybe<Scalars['String']['output']>;
  reddit_recovery?: Maybe<Scalars['String']['output']>;
  reddit_campaign?: Maybe<Scalars['String']['output']>;
  reddit_launch?: Maybe<Scalars['String']['output']>;
  mission_patch?: Maybe<Scalars['String']['output']>;
  reddit_media?: Maybe<Scalars['String']['output']>;
  article_link?: Maybe<Scalars['String']['output']>;
  video_link?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  presskit?: Maybe<Scalars['String']['output']>;
  __typename?: 'LaunchLinks';
};

export type LaunchRocket = {
  rocket_type?: Maybe<Scalars['String']['output']>;
  rocket_name?: Maybe<Scalars['String']['output']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  fairings?: Maybe<LaunchRocketFairings>;
  __typename?: 'LaunchRocket';
  rocket?: Maybe<Rocket>;
};

export type LaunchRocketFairings = {
  recovery_attempt?: Maybe<Scalars['Boolean']['output']>;
  recovered?: Maybe<Scalars['Boolean']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
  ship?: Maybe<Scalars['String']['output']>;
  __typename?: 'LaunchRocketFairings';
};

export type LaunchRocketFirstStage = {
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
  __typename?: 'LaunchRocketFirstStage';
};

export type LaunchRocketFirstStageCore = {
  landing_vehicle?: Maybe<Scalars['String']['output']>;
  landing_intent?: Maybe<Scalars['Boolean']['output']>;
  land_success?: Maybe<Scalars['Boolean']['output']>;
  landing_type?: Maybe<Scalars['String']['output']>;
  gridfins?: Maybe<Scalars['Boolean']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
  legs?: Maybe<Scalars['Boolean']['output']>;
  __typename?: 'LaunchRocketFirstStageCore';
  flight?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  core?: Maybe<Core>;
};

export type LaunchRocketSecondStage = {
  payloads?: Maybe<Array<Maybe<Payload>>>;
  block?: Maybe<Scalars['Int']['output']>;
  __typename?: 'LaunchRocketSecondStage';
};

export type LaunchSite = {
  site_name_long?: Maybe<Scalars['String']['output']>;
  site_name?: Maybe<Scalars['String']['output']>;
  site_id?: Maybe<Scalars['String']['output']>;
  __typename?: 'LaunchSite';
};

export type LaunchTelemetry = {
  flight_club?: Maybe<Scalars['String']['output']>;
  __typename?: 'LaunchTelemetry';
};

export type LaunchesPastResult = {
  data?: Maybe<Array<Maybe<Launch>>>;
  __typename?: 'LaunchesPastResult';
  result?: Maybe<Result>;
};

export type Launchpad = {
  successful_launches?: Maybe<Scalars['Int']['output']>;
  attempted_launches?: Maybe<Scalars['Int']['output']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Location>;
  __typename?: 'Launchpad';
};

export type Link = {
  wikipedia?: Maybe<Scalars['String']['output']>;
  article?: Maybe<Scalars['String']['output']>;
  reddit?: Maybe<Scalars['String']['output']>;
  __typename?: 'Link';
};

export type Location = {
  longitude?: Maybe<Scalars['Float']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  __typename?: 'Location';
};

export type Mass = {
  lb?: Maybe<Scalars['Int']['output']>;
  kg?: Maybe<Scalars['Int']['output']>;
  __typename?: 'Mass';
};

export type Mission = {
  manufacturers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  id?: Maybe<Scalars['ID']['output']>;
  __typename?: 'Mission';
};

export type MissionResult = {
  data?: Maybe<Array<Maybe<Mission>>>;
  __typename?: 'MissionResult';
  result?: Maybe<Result>;
};

export type MissionsFind = {
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  __typename?: 'Mutation';
};

export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

export type MutationInsert_UsersArgs = {
  on_conflict?: InputMaybe<Users_On_Conflict>;
  objects: Array<Users_Insert_Input>;
};

export type MutationUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type Payload = {
  customers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  payload_mass_lbs?: Maybe<Scalars['Float']['output']>;
  payload_mass_kg?: Maybe<Scalars['Float']['output']>;
  payload_type?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  reused?: Maybe<Scalars['Boolean']['output']>;
  orbit?: Maybe<Scalars['String']['output']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  id?: Maybe<Scalars['ID']['output']>;
  __typename?: 'Payload';
};

export type PayloadOrbitParams = {
  semi_major_axis_km?: Maybe<Scalars['Float']['output']>;
  reference_system?: Maybe<Scalars['String']['output']>;
  arg_of_pericenter?: Maybe<Scalars['Float']['output']>;
  inclination_deg?: Maybe<Scalars['Float']['output']>;
  lifespan_years?: Maybe<Scalars['Float']['output']>;
  periapsis_km?: Maybe<Scalars['Float']['output']>;
  mean_anomaly?: Maybe<Scalars['Float']['output']>;
  eccentricity?: Maybe<Scalars['Float']['output']>;
  mean_motion?: Maybe<Scalars['Float']['output']>;
  apoapsis_km?: Maybe<Scalars['Float']['output']>;
  period_min?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  regime?: Maybe<Scalars['String']['output']>;
  raan?: Maybe<Scalars['Float']['output']>;
  epoch?: Maybe<Scalars['Date']['output']>;
  __typename?: 'PayloadOrbitParams';
};

export type PayloadsFind = {
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['Boolean']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['ID']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
};

export type Query = {
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  historiesResult?: Maybe<HistoriesResult>;
  histories?: Maybe<Array<Maybe<History>>>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missions?: Maybe<Array<Maybe<Mission>>>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missionsResult?: Maybe<MissionResult>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  rocketsResult?: Maybe<RocketsResult>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  cores?: Maybe<Array<Maybe<Core>>>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  shipsResult?: Maybe<ShipsResult>;
  launchpad?: Maybe<Launchpad>;
  launchLatest?: Maybe<Launch>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  roadster?: Maybe<Roadster>;
  launchNext?: Maybe<Launch>;
  payload?: Maybe<Payload>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  mission?: Maybe<Mission>;
  landpad?: Maybe<Landpad>;
  history?: Maybe<History>;
  capsule?: Maybe<Capsule>;
  rocket?: Maybe<Rocket>;
  launch?: Maybe<Launch>;
  dragon?: Maybe<Dragon>;
  company?: Maybe<Info>;
  __typename?: 'Query';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  ship?: Maybe<Ship>;
  core?: Maybe<Core>;
};

export type QueryCapsuleArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCapsulesArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CapsulesFind>;
};

export type QueryCapsulesPastArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CapsulesFind>;
};

export type QueryCapsulesUpcomingArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CapsulesFind>;
};

export type QueryCoreArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCoresArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CoresFind>;
};

export type QueryCoresPastArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CoresFind>;
};

export type QueryCoresUpcomingArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<CoresFind>;
};

export type QueryDragonArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDragonsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryHistoriesArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<HistoryFind>;
};

export type QueryHistoriesResultArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<HistoryFind>;
};

export type QueryHistoryArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLandpadArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLandpadsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLaunchArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLaunchesArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<LaunchFind>;
};

export type QueryLaunchesPastArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<LaunchFind>;
};

export type QueryLaunchesPastResultArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<LaunchFind>;
};

export type QueryLaunchesUpcomingArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<LaunchFind>;
};

export type QueryLaunchpadArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLaunchpadsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMissionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMissionsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<MissionsFind>;
};

export type QueryMissionsResultArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<MissionsFind>;
};

export type QueryPayloadArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPayloadsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<PayloadsFind>;
};

export type QueryRocketArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRocketsArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRocketsResultArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryShipArgs = {
  id: Scalars['ID']['input'];
};

export type QueryShipsArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<ShipsFind>;
};

export type QueryShipsResultArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<ShipsFind>;
};

export type QueryUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type QueryUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Result = {
  totalCount?: Maybe<Scalars['Int']['output']>;
  __typename?: 'Result';
};

export type Roadster = {
  semi_major_axis_au?: Maybe<Scalars['Float']['output']>;
  earth_distance_mi?: Maybe<Scalars['Float']['output']>;
  earth_distance_km?: Maybe<Scalars['Float']['output']>;
  mars_distance_mi?: Maybe<Scalars['Float']['output']>;
  mars_distance_km?: Maybe<Scalars['Float']['output']>;
  launch_date_unix?: Maybe<Scalars['Date']['output']>;
  launch_date_utc?: Maybe<Scalars['Date']['output']>;
  periapsis_arg?: Maybe<Scalars['Float']['output']>;
  launch_mass_lbs?: Maybe<Scalars['Int']['output']>;
  periapsis_au?: Maybe<Scalars['Float']['output']>;
  launch_mass_kg?: Maybe<Scalars['Int']['output']>;
  eccentricity?: Maybe<Scalars['Float']['output']>;
  period_days?: Maybe<Scalars['Float']['output']>;
  inclination?: Maybe<Scalars['Float']['output']>;
  apoapsis_au?: Maybe<Scalars['Float']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  orbit_type?: Maybe<Scalars['Float']['output']>;
  speed_mph?: Maybe<Scalars['Float']['output']>;
  speed_kph?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  epoch_jd?: Maybe<Scalars['Float']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  norad_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  __typename?: 'Roadster';
};

export type Rocket = {
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  success_rate_pct?: Maybe<Scalars['Int']['output']>;
  cost_per_launch?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  first_flight?: Maybe<Scalars['Date']['output']>;
  wikipedia?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  boosters?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stages?: Maybe<Scalars['Int']['output']>;
  second_stage?: Maybe<RocketSecondStage>;
  landing_legs?: Maybe<RocketLandingLegs>;
  first_stage?: Maybe<RocketFirstStage>;
  id?: Maybe<Scalars['ID']['output']>;
  engines?: Maybe<RocketEngines>;
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
  __typename?: 'Rocket';
  mass?: Maybe<Mass>;
};

export type RocketEngines = {
  thrust_to_weight?: Maybe<Scalars['Float']['output']>;
  engine_loss_max?: Maybe<Scalars['String']['output']>;
  propellant_2?: Maybe<Scalars['String']['output']>;
  propellant_1?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
  __typename?: 'RocketEngines';
};

export type RocketFirstStage = {
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>;
  burn_time_sec?: Maybe<Scalars['Int']['output']>;
  reusable?: Maybe<Scalars['Boolean']['output']>;
  engines?: Maybe<Scalars['Int']['output']>;
  thrust_sea_level?: Maybe<Force>;
  __typename?: 'RocketFirstStage';
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  material?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  __typename?: 'RocketLandingLegs';
};

export type RocketPayloadWeight = {
  name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lb?: Maybe<Scalars['Int']['output']>;
  kg?: Maybe<Scalars['Int']['output']>;
  __typename?: 'RocketPayloadWeight';
};

export type RocketSecondStage = {
  fuel_amount_tons?: Maybe<Scalars['Float']['output']>;
  burn_time_sec?: Maybe<Scalars['Int']['output']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  engines?: Maybe<Scalars['Int']['output']>;
  __typename?: 'RocketSecondStage';
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: 'RocketSecondStagePayloadCompositeFairing';
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1?: Maybe<Scalars['String']['output']>;
  __typename?: 'RocketSecondStagePayloads';
};

export type RocketsResult = {
  data?: Maybe<Array<Maybe<Rocket>>>;
  __typename?: 'RocketsResult';
  result?: Maybe<Result>;
};

export type Ship = {
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  successful_landings?: Maybe<Scalars['Int']['output']>;
  attempted_landings?: Maybe<Scalars['Int']['output']>;
  home_port?: Maybe<Scalars['String']['output']>;
  year_built?: Maybe<Scalars['Int']['output']>;
  weight_lbs?: Maybe<Scalars['Int']['output']>;
  speed_kn?: Maybe<Scalars['Float']['output']>;
  course_deg?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  weight_kg?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  model?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  mmsi?: Maybe<Scalars['Int']['output']>;
  imo?: Maybe<Scalars['Int']['output']>;
  abs?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<ShipLocation>;
  __typename?: 'Ship';
};

export type ShipLocation = {
  longitude?: Maybe<Scalars['Float']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  __typename?: 'ShipLocation';
};

export type ShipMission = {
  flight?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  __typename?: 'ShipMission';
};

export type ShipsFind = {
  successful_landings?: InputMaybe<Scalars['Int']['input']>;
  attempted_landings?: InputMaybe<Scalars['Int']['input']>;
  home_port?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  year_built?: InputMaybe<Scalars['Int']['input']>;
  weight_lbs?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  course_deg?: InputMaybe<Scalars['Int']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  weight_kg?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  speed_kn?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  class?: InputMaybe<Scalars['Int']['input']>;
  mmsi?: InputMaybe<Scalars['Int']['input']>;
  imo?: InputMaybe<Scalars['Int']['input']>;
  abs?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ShipsResult = {
  data?: Maybe<Array<Maybe<Ship>>>;
  __typename?: 'ShipsResult';
  result?: Maybe<Result>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _similar?: InputMaybe<Scalars['String']['input']>;
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nlike?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  __typename?: 'Subscription';
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
};

export type SubscriptionUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Volume = {
  cubic_meters?: Maybe<Scalars['Int']['output']>;
  cubic_feet?: Maybe<Scalars['Int']['output']>;
  __typename?: 'Volume';
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update',
}

/** column ordering options */
export enum Order_By {
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the ascending order, nulls last */
  Asc = 'asc',
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "users" */
export type Users = {
  twitter?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['timestamptz']['output'];
  rocket?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  __typename?: 'users';
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  __typename?: 'users_aggregate';
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']['output']>;
  __typename?: 'users_aggregate_fields';
  min?: Maybe<Users_Min_Fields>;
  max?: Maybe<Users_Max_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  columns?: InputMaybe<Array<Users_Select_Column>>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  min?: InputMaybe<Users_Min_Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  count?: InputMaybe<Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  on_conflict?: InputMaybe<Users_On_Conflict>;
  data: Array<Users_Insert_Input>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  _or?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter?: InputMaybe<String_Comparison_Exp>;
  rocket?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  _not?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  UsersPkey = 'users_pkey',
  Primary = 'primary',
  Unique = 'unique',
  Key = 'key',
  Or = 'or',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  __typename?: 'users_max_fields';
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  rocket?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  __typename?: 'users_min_fields';
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']['output'];
  __typename?: 'users_mutation_response';
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  on_conflict?: InputMaybe<Users_On_Conflict>;
  data: Users_Insert_Input;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  update_columns: Array<Users_Update_Column>;
  constraint: Users_Constraint;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Timestamp = 'timestamp',
  Twitter = 'twitter',
  Rocket = 'rocket',
  Column = 'column',
  Name = 'name',
  Id = 'id',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Timestamp = 'timestamp',
  Twitter = 'twitter',
  Rocket = 'rocket',
  Column = 'column',
  Name = 'name',
  Id = 'id',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _eq?: InputMaybe<Scalars['uuid']['input']>;
};

export type GetCompanyLeadersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompanyLeadersQuery = {
  company?: {
    __typename?: 'Info';
    ceo?: string | null;
    cto?: string | null;
    coo?: string | null;
  } | null;
  __typename?: 'Query';
};

export type GetSeoQueryVariables = Exact<{ [key: string]: never }>;

export type GetSeoQuery = {
  company?: {
    __typename?: 'Info';
    ceo?: string | null;
    cto?: string | null;
    coo?: string | null;
  } | null;
  __typename?: 'Query';
};

export type CompanyLeadersFragment = {
  __typename?: 'Info';
  ceo?: string | null;
  coo?: string | null;
  cto?: string | null;
};

export type GetCompanyInfoWithFragmentQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCompanyInfoWithFragmentQuery = {
  company?: {
    headquarters?: {
      address?: string | null;
      __typename?: 'Address';
      state?: string | null;
      city?: string | null;
    } | null;
    cto?: string | null;
    coo?: string | null;
    ceo?: string | null;
    __typename?: 'Info';
  } | null;
  __typename?: 'Query';
};

export type CompanyInfoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type CompanyInfoQueryQuery = {
  company?: {
    headquarters?: {
      address?: string | null;
      __typename?: 'Address';
      state?: string | null;
      city?: string | null;
    } | null;
    cto?: string | null;
    coo?: string | null;
    ceo?: string | null;
    __typename?: 'Info';
  } | null;
  __typename?: 'Query';
};

export const CompanyLeadersFragmentDoc = gql`
  fragment companyLeaders on Info {
    ceo
    coo
    cto
  }
`;
export const GetCompanyLeadersDocument = gql`
  query GetCompanyLeaders {
    company {
      ceo
      cto
      coo
    }
  }
`;

/**
 * __useGetCompanyLeadersQuery__
 *
 * To run a query within a React component, call `useGetCompanyLeadersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyLeadersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyLeadersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyLeadersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompanyLeadersQuery,
    GetCompanyLeadersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCompanyLeadersQuery,
    GetCompanyLeadersQueryVariables
  >(GetCompanyLeadersDocument, options);
}
export function useGetCompanyLeadersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyLeadersQuery,
    GetCompanyLeadersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompanyLeadersQuery,
    GetCompanyLeadersQueryVariables
  >(GetCompanyLeadersDocument, options);
}
export type GetCompanyLeadersQueryHookResult = ReturnType<
  typeof useGetCompanyLeadersQuery
>;
export type GetCompanyLeadersLazyQueryHookResult = ReturnType<
  typeof useGetCompanyLeadersLazyQuery
>;
export type GetCompanyLeadersQueryResult = Apollo.QueryResult<
  GetCompanyLeadersQuery,
  GetCompanyLeadersQueryVariables
>;
export const GetSeoDocument = gql`
  query GetSeo {
    company {
      ceo
      cto
      coo
    }
  }
`;

/**
 * __useGetSeoQuery__
 *
 * To run a query within a React component, call `useGetSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSeoQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSeoQuery, GetSeoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSeoQuery, GetSeoQueryVariables>(
    GetSeoDocument,
    options
  );
}
export function useGetSeoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSeoQuery, GetSeoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSeoQuery, GetSeoQueryVariables>(
    GetSeoDocument,
    options
  );
}
export type GetSeoQueryHookResult = ReturnType<typeof useGetSeoQuery>;
export type GetSeoLazyQueryHookResult = ReturnType<typeof useGetSeoLazyQuery>;
export type GetSeoQueryResult = Apollo.QueryResult<
  GetSeoQuery,
  GetSeoQueryVariables
>;
export const GetCompanyInfoWithFragmentDocument = gql`
  query GetCompanyInfoWithFragment {
    company {
      ...companyLeaders
      headquarters {
        address
        city
        state
      }
    }
  }
  ${CompanyLeadersFragmentDoc}
`;

/**
 * __useGetCompanyInfoWithFragmentQuery__
 *
 * To run a query within a React component, call `useGetCompanyInfoWithFragmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyInfoWithFragmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyInfoWithFragmentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyInfoWithFragmentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCompanyInfoWithFragmentQuery,
    GetCompanyInfoWithFragmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCompanyInfoWithFragmentQuery,
    GetCompanyInfoWithFragmentQueryVariables
  >(GetCompanyInfoWithFragmentDocument, options);
}
export function useGetCompanyInfoWithFragmentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCompanyInfoWithFragmentQuery,
    GetCompanyInfoWithFragmentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCompanyInfoWithFragmentQuery,
    GetCompanyInfoWithFragmentQueryVariables
  >(GetCompanyInfoWithFragmentDocument, options);
}
export type GetCompanyInfoWithFragmentQueryHookResult = ReturnType<
  typeof useGetCompanyInfoWithFragmentQuery
>;
export type GetCompanyInfoWithFragmentLazyQueryHookResult = ReturnType<
  typeof useGetCompanyInfoWithFragmentLazyQuery
>;
export type GetCompanyInfoWithFragmentQueryResult = Apollo.QueryResult<
  GetCompanyInfoWithFragmentQuery,
  GetCompanyInfoWithFragmentQueryVariables
>;
export const CompanyInfoQueryDocument = gql`
  query CompanyInfoQuery {
    company {
      ceo
      coo
      cto
      headquarters {
        address
        city
        state
      }
    }
  }
`;

/**
 * __useCompanyInfoQueryQuery__
 *
 * To run a query within a React component, call `useCompanyInfoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyInfoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyInfoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyInfoQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CompanyInfoQueryQuery,
    CompanyInfoQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompanyInfoQueryQuery, CompanyInfoQueryQueryVariables>(
    CompanyInfoQueryDocument,
    options
  );
}
export function useCompanyInfoQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyInfoQueryQuery,
    CompanyInfoQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyInfoQueryQuery,
    CompanyInfoQueryQueryVariables
  >(CompanyInfoQueryDocument, options);
}
export type CompanyInfoQueryQueryHookResult = ReturnType<
  typeof useCompanyInfoQueryQuery
>;
export type CompanyInfoQueryLazyQueryHookResult = ReturnType<
  typeof useCompanyInfoQueryLazyQuery
>;
export type CompanyInfoQueryQueryResult = Apollo.QueryResult<
  CompanyInfoQueryQuery,
  CompanyInfoQueryQueryVariables
>;
