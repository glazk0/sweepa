/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ActiveSkillDetailsResponse {
  id?: string | null;
  type?: EntityType;
  name?: string | null;
  elementDetails?: ElementSummaryResponse;
  description?: string | null;
  element?: string | null;
  category?: string | null;
  /** @format int64 */
  power: number;
  /** @format int64 */
  minRange: number;
  /** @format int64 */
  maxRange: number;
  /** @format int64 */
  coolTime: number;
  effectType1?: string | null;
  /** @format int64 */
  effectValue1: number;
  effectType2?: string | null;
  /** @format int64 */
  effectValue2: number;
  specialAttackRateInfos?: SpecialAttackRateInfo[] | null;
  isWeaponDamage: boolean;
  disabledData: boolean;
  pals?: PalSkillLevelResponse[] | null;
}

export interface ActiveSkillDetailsResponseEnveloped {
  data?: ActiveSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface ActiveSkillSummaryResponse {
  id?: string | null;
  type?: EntityType;
  name?: string | null;
  elementDetails?: ElementSummaryResponse;
}

export interface ActiveSkillSummaryResponseIEnumerableEnveloped {
  data?: ActiveSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BuildObjectDetailsResponse {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
  type: EntityType;
  iconPath?: string | null;
  /** @minLength 1 */
  description: string;
  properties: BuildObjectProperties;
  materials: BuildObjectMaterial[];
  itemsMap: Record<string, ItemSummaryResponse>;
}

export interface BuildObjectDetailsResponseEnveloped {
  data?: BuildObjectDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BuildObjectMaterial {
  itemId?: string | null;
  /** @format int64 */
  count?: number;
}

export interface BuildObjectProperties {
  MapObjectId?: string | null;
  TypeA?: string | null;
  /** @format int64 */
  RedialIndex?: number;
  TypeB?: string | null;
  /** @format int64 */
  Rank?: number;
  /** @format int64 */
  BuildCapacity?: number;
  /** @format int64 */
  RequiredBuildWorkAmount?: number;
  /** @format int64 */
  AssetValue?: number;
  RequiredEnergyType?: string | null;
  /** @format int64 */
  ConsumeEnergySpeed?: number;
  Material4_Id?: any;
  /** @format int64 */
  Material4_Count?: number | null;
  bInstallAtReticle?: boolean;
  /** @format int64 */
  InstallNeighborThreshold?: number;
  bIsInstallOnlyOnBase?: boolean;
  bIsInstallOnlyInDoor?: boolean;
  bIsInstallOnlyHubAround?: boolean;
  bInstallableNoObstacleFromCamera?: boolean;
  Material3_Id?: any;
  /** @format int64 */
  Material3_Count?: number | null;
  Material2_Id?: any;
  /** @format int64 */
  Material2_Count?: number | null;
  Material1_Id?: any;
  /** @format int64 */
  Material1_Count?: number | null;
}

export interface BuildObjectSummaryResponse {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
  type: EntityType;
  iconPath?: string | null;
}

export interface BuildObjectSummaryResponseIEnumerableEnveloped {
  data?: BuildObjectSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface Drop {
  characterId?: string | null;
  /** @format int64 */
  dropRate?: number;
  /** @format int64 */
  min?: number;
  /** @format int64 */
  max?: number;
}

export interface ElementSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  smallIcon?: string | null;
  largeIcon?: string | null;
}

export interface ElementSummaryResponseIEnumerableEnveloped {
  data?: ElementSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export enum EntityType {
  ActiveSkill = "ActiveSkill",
  Structure = "Structure",
  Item = "Item",
  Pal = "Pal",
  PartnerSkill = "PartnerSkill",
  PassiveSkill = "PassiveSkill",
  Recipe = "Recipe",
  Tech = "Tech",
  Element = "Element",
  Work = "Work",
}

export interface Filter {
  filterId?: string | null;
  filterTitle?: string | null;
  values?: FilterOption[] | null;
}

export interface FilterOption {
  optionId?: string | null;
  optionTitle?: string | null;
}

export interface FoodEffect {
  /** @format int64 */
  effectTime?: number;
  effectType?: string | null;
  /** @format int64 */
  effectValue?: number;
}

export interface Ingredient {
  itemId?: string | null;
  /** @format int64 */
  quantity?: number;
}

export interface ItemDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
  elementDetails?: ElementSummaryResponse;
  /** @minLength 1 */
  description: string;
  properties: ItemProperties;
  sources?: ItemSources;
  dropSourcesMap: Record<string, PalSummaryResponse>;
  recipesMap: Record<string, RecipeSummaryResponse>;
  foodEffects?: FoodEffect[] | null;
  passiveSkill?: PassiveSkillSummaryResponse;
}

export interface ItemDetailsResponseEnveloped {
  data?: ItemDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface ItemProperties {
  TypeA?: string | null;
  TypeB?: string | null;
  /** @format int64 */
  Rank?: number;
  /** @format int64 */
  Rarity?: number;
  /** @format int64 */
  MaxStackCount?: number;
  /** @format double */
  Weight?: number;
  /** @format int64 */
  Price?: number;
  /** @format int64 */
  SortID?: number;
  bInTreasureBox?: boolean;
  bNotConsumed?: boolean;
  bEnableHandcraft?: boolean;
  /** @format int64 */
  TechnologyTreeLock?: number;
  ItemStaticClass?: string | null;
  ItemDynamicClass?: string | null;
  ItemActorClass?: string | null;
  ItemStaticMeshName?: string | null;
  VisualBlueprintClassName?: string | null;
  VisualBlueprintClassSoft?: VisualBlueprintClassSoft;
  DropItemType?: string | null;
  /** @format int64 */
  Editor_RowNameHash?: number;
  /** @format int64 */
  RestoreSatiety?: number;
  /** @format int64 */
  RestoreConcentration?: number;
  /** @format int64 */
  RestoreSanity?: number;
  /** @format int64 */
  RestoreHealth?: number;
  /** @format int64 */
  GrantEffect1Id?: number;
  /** @format int64 */
  GrantEffect1Time?: number;
  /** @format int64 */
  GrantEffect2Id?: number;
  /** @format int64 */
  GrantEffect2Time?: number;
  /** @format int64 */
  GrantEffect3Id?: number;
  /** @format int64 */
  GrantEffect3Time?: number;
  /** @format int64 */
  Durability?: number;
  ElementType?: string | null;
  bSleepWeapon?: boolean;
  /** @format int64 */
  MagazineSize?: number;
  /** @format int64 */
  SneakAttackRate?: number;
  /** @format int64 */
  PhysicalAttackValue?: number;
  /** @format int64 */
  HPValue?: number;
  /** @format int64 */
  PhysicalDefenseValue?: number;
  /** @format int64 */
  ShieldValue?: number;
  /** @format int64 */
  MagicAttackValue?: number;
  /** @format int64 */
  MagicDefenseValue?: number;
  PassiveSkillName?: string | null;
  WazaID?: string | null;
  /** @format double */
  CorruptionFactor?: number;
  /** @format int64 */
  FloatValue1?: number;
}

export interface ItemSources {
  drops?: Drop[] | null;
  treasureBoxes?: TreasureBox[] | null;
  recipes?: string[] | null;
}

export interface ItemSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
  elementDetails?: ElementSummaryResponse;
}

export interface ItemSummaryResponseIEnumerableEnveloped {
  data?: ItemSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export enum Language {
  En = "En",
  Ja = "Ja",
  De = "De",
  Es = "Es",
  Fr = "Fr",
  It = "It",
  Ko = "Ko",
  PtBr = "PtBr",
  Ru = "Ru",
  ZhHans = "ZhHans",
  ZhHant = "ZhHant",
}

export interface Metadata {
  title?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  type?: string | null;
  locale?: string | null;
}

export interface PalActiveSkill {
  skillId?: string | null;
  /** @format int64 */
  level?: number;
}

export interface PalBreedingResponse {
  parent1?: PalSummaryResponse;
  parent2?: PalSummaryResponse;
  child?: PalSummaryResponse;
}

export interface PalBreedingResponseEnveloped {
  data?: PalBreedingResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PalBreedingResponseIEnumerableEnveloped {
  data?: PalBreedingResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PalDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @format int64 */
  paldexIndex: number;
  prefix?: string | null;
  iconPath?: string | null;
  shortDescription?: string | null;
  longDescription?: string | null;
  paldexDistributions?: PaldexDistributions;
  parameters: Parameters;
  drops?: PalDrop[] | null;
  activeSkills?: PalActiveSkill[] | null;
  passiveSkills?: string[] | null;
  workSuitabilities: PalWorkSuitability[];
  skillsMap: Record<string, ActiveSkillSummaryResponse>;
  workSummariesMap: Record<string, WorkSummaryResponse>;
  elementType1?: ElementSummaryResponse;
  elementType2?: ElementSummaryResponse;
  dropsMap: Record<string, ItemSummaryResponse>;
  passiveSkillsMap: Record<string, PassiveSkillSummaryResponse>;
  partnerSkill: PartnerSkillSummaryResponse;
  breedingChildren: PalBreedingResponse[];
  breedingParents: PalBreedingResponse[];
}

export interface PalDetailsResponseEnveloped {
  data?: PalDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PalDrop {
  itemId?: string | null;
  /** @format int64 */
  rate?: number;
  /** @format int64 */
  min?: number;
  /** @format int64 */
  max?: number;
  tableId?: string | null;
}

export interface PalSkillLevelResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @format int64 */
  paldexIndex: number;
  prefix?: string | null;
  iconPath?: string | null;
  /** @format int64 */
  level: number;
}

export interface PalSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @format int64 */
  paldexIndex: number;
  prefix?: string | null;
  iconPath?: string | null;
}

export interface PalSummaryResponseIEnumerableEnveloped {
  data?: PalSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PalWorkSuitability {
  workId?: string | null;
  /** @format int64 */
  level?: number;
}

export interface PaldexDistributions {
  dayTimeLocations?: TimeLocation[] | null;
  /** @format double */
  dayTimeRadius?: number;
  nightTimeLocations?: TimeLocation[] | null;
  /** @format double */
  nightTimeRadius?: number;
}

export interface Parameters {
  OverrideNameTextID?: string | null;
  NamePrefixID?: string | null;
  OverridePartnerSkillTextID?: string | null;
  IsPal?: boolean;
  Tribe?: string | null;
  BPClass?: string | null;
  /** @format int64 */
  ZukanIndex?: number;
  ZukanIndexSuffix?: string | null;
  Size?: string | null;
  /** @format int64 */
  Rarity?: number;
  ElementType1?: string | null;
  ElementType2?: string | null;
  GenusCategory?: string | null;
  Organization?: string | null;
  weapon?: string | null;
  WeaponEquip?: boolean;
  /** @format int64 */
  HP?: number;
  /** @format int64 */
  MeleeAttack?: number;
  /** @format int64 */
  ShotAttack?: number;
  /** @format int64 */
  Defense?: number;
  /** @format int64 */
  Support?: number;
  /** @format int64 */
  CraftSpeed?: number;
  /** @format double */
  EnemyReceiveDamageRate?: number;
  /** @format double */
  CaptureRateCorrect?: number;
  /** @format int64 */
  ExpRatio?: number;
  /** @format int64 */
  Price?: number;
  AIResponse?: string | null;
  AISightResponse?: string | null;
  /** @format int64 */
  SlowWalkSpeed?: number;
  /** @format int64 */
  WalkSpeed?: number;
  /** @format int64 */
  RunSpeed?: number;
  /** @format int64 */
  RideSprintSpeed?: number;
  /** @format int64 */
  TransportSpeed?: number;
  IsBoss?: boolean;
  IsTowerBoss?: boolean;
  BattleBGM?: string | null;
  IgnoreLeanBack?: boolean;
  IgnoreBlowAway?: boolean;
  /** @format int64 */
  MaxFullStomach?: number;
  /** @format int64 */
  FullStomachDecreaseRate?: number;
  /** @format int64 */
  FoodAmount?: number;
  /** @format int64 */
  ViewingDistance?: number;
  /** @format int64 */
  ViewingAngle?: number;
  /** @format int64 */
  HearingRate?: number;
  NooseTrap?: boolean;
  Nocturnal?: boolean;
  /** @format int64 */
  BiologicalGrade?: number;
  Predator?: boolean;
  Edible?: boolean;
  /** @format int64 */
  Stamina?: number;
  /** @format int64 */
  MaleProbability?: number;
  /** @format int64 */
  CombiRank?: number;
  /** @format int64 */
  WorkSuitability_EmitFlame?: number;
  /** @format int64 */
  WorkSuitability_Watering?: number;
  /** @format int64 */
  WorkSuitability_Seeding?: number;
  /** @format int64 */
  WorkSuitability_GenerateElectricity?: number;
  /** @format int64 */
  WorkSuitability_Handcraft?: number;
  /** @format int64 */
  WorkSuitability_Collection?: number;
  /** @format int64 */
  WorkSuitability_Deforest?: number;
  /** @format int64 */
  WorkSuitability_Mining?: number;
  /** @format int64 */
  WorkSuitability_OilExtraction?: number;
  /** @format int64 */
  WorkSuitability_ProductMedicine?: number;
  /** @format int64 */
  WorkSuitability_Cool?: number;
  /** @format int64 */
  WorkSuitability_Transport?: number;
  /** @format int64 */
  WorkSuitability_MonsterFarm?: number;
  PassiveSkill1?: string | null;
  PassiveSkill2?: string | null;
  PassiveSkill3?: any;
  PassiveSkill4?: any;
  metadata?: ParametersMetadata;
}

export interface ParametersMetadata {
  name?: string | null;
  type?: string | null;
  file?: string | null;
  path?: string | null;
}

export interface PartnerSkillDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
  pals: string[];
  palsMap: Record<string, PalSummaryResponse>;
}

export interface PartnerSkillDetailsResponseEnveloped {
  data?: PartnerSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PartnerSkillSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
}

export interface PartnerSkillSummaryResponseIEnumerableEnveloped {
  data?: PartnerSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PassiveSkillDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  description: string;
  iconPath?: string | null;
  effects: PassiveSkillEffect[];
  properties: PassiveSkillProperties;
  pals: string[];
  items: string[];
  itemsMap: Record<string, ItemSummaryResponse>;
  palsMap: Record<string, PalSummaryResponse>;
}

export interface PassiveSkillDetailsResponseEnveloped {
  data?: PassiveSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PassiveSkillEffect {
  type?: string | null;
  /** @format int64 */
  value?: number;
  target?: string | null;
}

export interface PassiveSkillProperties {
  invokeActiveOtomo?: boolean;
  invokeWorker?: boolean;
  invokeRiding?: boolean;
  invokeReserve?: boolean;
  invokeInOtomo?: boolean;
  invokeAlways?: boolean;
  addPal?: boolean;
  addRarePal?: boolean;
  addShotWeapon?: boolean;
  addMeleeWeapon?: boolean;
  addArmor?: boolean;
  addAccessory?: boolean;
}

export interface PassiveSkillSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  description: string;
  iconPath?: string | null;
}

export interface PassiveSkillSummaryResponseIEnumerableEnveloped {
  data?: PassiveSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export enum PassiveSkillType {
  Unknown = "Unknown",
  Pal = "Pal",
  Weapon = "Weapon",
  Armor = "Armor",
  Accessory = "Accessory",
}

export interface RecipeDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  outputItemId: string;
  /** @format int64 */
  outputQuantity: number;
  outputItem: ItemSummaryResponse;
  /** @format int64 */
  workAmount: number;
  /** @format int64 */
  workableAttribute: number;
  /** @minLength 1 */
  unlockItemId: string;
  /** @minLength 1 */
  energyType: string;
  /** @format int64 */
  energyAmount: number;
  unlockTech?: string[] | null;
  ingredients: Ingredient[];
  itemsMap: Record<string, ItemSummaryResponse>;
  techsMap: Record<string, TechSummaryResponse>;
}

export interface RecipeDetailsResponseEnveloped {
  data?: RecipeDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface RecipeSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  outputItemId: string;
  /** @format int64 */
  outputQuantity: number;
  outputItem: ItemSummaryResponse;
}

export interface RecipeSummaryResponseIEnumerableEnveloped {
  data?: RecipeSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface SearchResponse {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
  subTitle?: string | null;
  type: EntityType;
  iconPath?: string | null;
  /** @format double */
  score: number;
}

export interface SpecialAttackRateInfo {
  Type?: string | null;
  /** @format double */
  Rate?: number;
}

export interface TechDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @format int64 */
  levelCap: number;
  /** @format int64 */
  tier: number;
  /** @format int64 */
  cost: number;
  iconPath?: string | null;
  description?: string | null;
  /** @format int64 */
  requireBossDefeatNum: number;
  isBossTechnology: boolean;
  requiredTechnology?: string | null;
  unlocksBuildObjects?: string[] | null;
  unlocksItemRecipes?: string[] | null;
  recipesMap: Record<string, RecipeSummaryResponse>;
  buildObjectsMap: Record<string, BuildObjectSummaryResponse>;
  requiredTech?: TechSummaryResponse;
}

export interface TechDetailsResponseEnveloped {
  data?: TechDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface TechSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  /** @format int64 */
  levelCap: number;
  /** @format int64 */
  tier: number;
  /** @format int64 */
  cost: number;
  iconPath?: string | null;
}

export interface TechSummaryResponseIEnumerableEnveloped {
  data?: TechSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface TimeLocation {
  /** @format double */
  x?: number;
  /** @format double */
  y?: number;
}

export interface TreasureBox {
  treasureId?: string | null;
  /** @format int64 */
  min?: number;
  /** @format int64 */
  max?: number;
  dropRate?: any;
}

export interface VisualBlueprintClassSoft {
  AssetPathName?: string | null;
  SubPathString?: string | null;
}

export interface WorkDetailsResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
  pals: WorkSuitabilityPalResponse[];
}

export interface WorkDetailsResponseEnveloped {
  data?: WorkDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface WorkSuitabilityPalResponse {
  pal?: PalSummaryResponse;
  /** @format int32 */
  level?: number;
}

export interface WorkSummaryResponse {
  /** @minLength 1 */
  id: string;
  type: EntityType;
  /** @minLength 1 */
  name: string;
  iconPath?: string | null;
}

export interface WorkSummaryResponseIEnumerableEnveloped {
  data?: WorkSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}
