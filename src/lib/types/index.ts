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
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  elementDetails?: ElementSummaryResponse;
  props: ActiveSkillProperties;
  specialAttackRateInfos?: ActiveSkillSpecialAttackRateInfo[] | null;
  palsWithSkill?: ActiveSkillPalInfo[] | null;
}

export interface ActiveSkillDetailsResponseEnveloped {
  data?: ActiveSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface ActiveSkillPalInfo {
  palId?: string | null;
  /** @format int32 */
  level?: number;
}

export interface ActiveSkillProperties {
  type: EPalWazaID;
  element: EPalElementType;
  category: EPalWazaCategory;
  ignoreRandomInherit: boolean;
  /** @format int32 */
  power: number;
  /** @format int32 */
  minRange: number;
  /** @format int32 */
  maxRange: number;
  /** @format float */
  coolTime: number;
  effectType1?: EPalAdditionalEffectType;
  /** @format int32 */
  effectValue1: number;
  effectType2?: EPalAdditionalEffectType;
  /** @format int32 */
  effectValue2: number;
  isWeaponDamage: boolean;
  disabledData: boolean;
}

export interface ActiveSkillSpecialAttackRateInfo {
  type?: EPalSpecialAttackRateType;
  /** @format float */
  rate?: number;
}

export interface ActiveSkillSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  elementDetails?: ElementSummaryResponse;
}

export interface ActiveSkillSummaryResponseIEnumerableEnveloped {
  data?: ActiveSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BreedingSummaryResponse {
  parent1?: CharacterSummaryResponse;
  parent2?: CharacterSummaryResponse;
  child?: CharacterSummaryResponse;
}

export interface BreedingSummaryResponseEnveloped {
  data?: BreedingSummaryResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BreedingSummaryResponseIEnumerableEnveloped {
  data?: BreedingSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BuildObjectDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  props: BuildObjectProperties;
  materials?: BuildObjectMaterial[] | null;
  itemsMap: Record<string, ItemSummaryResponse>;
}

export interface BuildObjectDetailsResponseEnveloped {
  data?: BuildObjectDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface BuildObjectMaterial {
  itemId?: string | null;
  /** @format int32 */
  quantity?: number;
}

export interface BuildObjectProperties {
  /** @minLength 1 */
  mapObjectId: string;
  typeA: EPalBuildObjectTypeA;
  /** @format int32 */
  redialIndex: number;
  typeB: EPalBuildObjectTypeB;
  /** @format int32 */
  rank: number;
  /** @format int32 */
  buildCapacity: number;
  /** @format float */
  requiredBuildWorkAmount: number;
  /** @format int32 */
  assetValue: number;
  requiredEnergyType: EPalEnergyType;
  /** @format float */
  consumeEnergySpeed: number;
  installAtReticle: boolean;
  /** @format float */
  installNeighborThreshold: number;
  isInstallOnlyOnBase: boolean;
  isInstallOnlyInDoor: boolean;
  isInstallOnlyHubAround: boolean;
  installableNoObstacleFromCamera: boolean;
}

export interface BuildObjectSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
}

export interface BuildObjectSummaryResponseIEnumerableEnveloped {
  data?: BuildObjectSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface CharacterActiveSkill {
  activeSkillId?: string | null;
  /** @format int32 */
  level?: number;
}

export interface CharacterBreedingResult {
  parent1?: string | null;
  parent2?: string | null;
  child?: string | null;
}

export interface CharacterDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  namePrefix?: string | null;
  /** @format int32 */
  paldexIndex: number;
  elements?: string[] | null;
  props: CharacterProperties;
  firstActivationInfo?: string | null;
  shortDescription?: string | null;
  paldexDistributions?: PaldexDistribution;
  drops?: ItemDrop[] | null;
  activeSkills?: CharacterActiveSkill[] | null;
  workSuitabilities?: CharacterWorkSuitability[] | null;
  partnerSkillId?: string | null;
  passiveSkills?: string[] | null;
  breedingChildren: CharacterBreedingResult[];
  breedingParents: CharacterBreedingResult[];
}

export interface CharacterDetailsResponseEnveloped {
  data?: CharacterDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface CharacterProperties {
  isPal: boolean;
  tribe: EPalTribeID;
  /** @minLength 1 */
  bpClass: string;
  /** @format int32 */
  zukanIndex: number;
  zukanIndexSuffix?: string | null;
  size: EPalSizeType;
  /** @format int32 */
  rarity: number;
  elementType1: EPalElementType;
  elementType2: EPalElementType;
  genusCategory: EPalGenusCategoryType;
  organization: EPalOrganizationType;
  weapon: EPalWeaponType;
  weaponEquip: boolean;
  /** @format int32 */
  hp: number;
  /** @format int32 */
  meleeAttack: number;
  /** @format int32 */
  shotAttack: number;
  /** @format int32 */
  defense: number;
  /** @format int32 */
  support: number;
  /** @format int32 */
  craftSpeed: number;
  /** @format float */
  enemyReceiveDamageRate: number;
  /** @format float */
  captureRateCorrect: number;
  /** @format float */
  expRatio: number;
  /** @format float */
  price: number;
  /** @minLength 1 */
  aiResponse: string;
  /** @minLength 1 */
  aiSightResponse: string;
  /** @format int32 */
  slowWalkSpeed: number;
  /** @format int32 */
  walkSpeed: number;
  /** @format int32 */
  runSpeed: number;
  /** @format int32 */
  rideSprintSpeed: number;
  /** @format int32 */
  transportSpeed: number;
  isBoss: boolean;
  isTowerBoss: boolean;
  battleBgm: EPalBattleBGMType;
  ignoreLeanBack: boolean;
  ignoreBlowAway: boolean;
  /** @format int32 */
  maxFullStomach: number;
  /** @format float */
  fullStomachDecreaseRate: number;
  /** @format int32 */
  foodAmount: number;
  /** @format int32 */
  viewingDistance: number;
  /** @format int32 */
  viewingAngle: number;
  /** @format float */
  hearingRate: number;
  nooseTrap: boolean;
  nocturnal: boolean;
  /** @format int32 */
  biologicalGrade: number;
  predator: boolean;
  edible: boolean;
  /** @format int32 */
  stamina: number;
  /** @format int32 */
  maleProbability: number;
  /** @format int32 */
  combiRank: number;
}

export interface CharacterSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  namePrefix?: string | null;
  /** @format int32 */
  paldexIndex: number;
  elements?: string[] | null;
}

export interface CharacterSummaryResponseIEnumerableEnveloped {
  data?: CharacterSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface CharacterWorkSuitability {
  workSuitabilityId?: string | null;
  /** @format int32 */
  rank?: number;
}

export interface Coordinate {
  /** @format double */
  x?: number;
  /** @format double */
  y?: number;
  /** @format double */
  z?: number;
}

export enum EPalActionType {
  None = "None",
  Sleep = "Sleep",
  WakeUp = "WakeUp",
  Death = "Death",
  Revive = "Revive",
  Menace = "Menace",
  Eat = "Eat",
  Stan = "Stan",
  KnockBack = "KnockBack",
  BlowAway = "BlowAway",
  GeneralAttack = "GeneralAttack",
  MeleeSkill = "MeleeSkill",
  ShootSkill = "ShootSkill",
  JumpAction = "JumpAction",
  RollingAction = "RollingAction",
  FullRideAction = "FullRideAction",
  Turn90R = "Turn90R",
  Turn90L = "Turn90L",
  Turn180R = "Turn180R",
  Turn180L = "Turn180L",
  TurnToTarget = "TurnToTarget",
  DiscoverySomething = "DiscoverySomething",
  ForwardWalk = "ForwardWalk",
  BackwardWalk = "BackwardWalk",
  Provocation = "Provocation",
  CommonWork = "CommonWork",
  Architecture = "Architecture",
  Deforest = "Deforest",
  Mining = "Mining",
  Feeding = "Feeding",
  GrowupPromotion = "GrowupPromotion",
  Watering = "Watering",
  WateringOneshot = "WateringOneshot",
  Harvest = "Harvest",
  GenerateEnergy = "GenerateEnergy",
  GenerateEnergyFire = "GenerateEnergyFire",
  GenerateEnergyElectric = "GenerateEnergyElectric",
  Cooking = "Cooking",
  Happy = "Happy",
  IdleInSpa = "IdleInSpa",
  Ignition = "Ignition",
  TransportItem = "TransportItem",
  Cool = "Cool",
  SpawnItem = "SpawnItem",
  Resuscitation = "Resuscitation",
  Liftup = "Liftup",
  BeLiftup = "BeLiftup",
  Throw = "Throw",
  BeThrown = "BeThrown",
  HumanFeeding = "HumanFeeding",
  HumanFeedingDoMotion = "HumanFeeding_DoMotion",
  GetupUtubuseOrRight = "GetupUtubuse_orRight",
  GetupAomukeOrRight = "GetupAomuke_orRight",
  WaitLoadingAction = "WaitLoadingAction",
  HumanPetting = "HumanPetting",
  PalPetting = "PalPetting",
  Talk = "Talk",
  ListenA = "Listen_A",
  ListenB = "Listen_B",
  ChairSit = "ChairSit",
  ChairSitMeal = "ChairSitMeal",
  ChairSitDrink = "ChairSitDrink",
  ChairSitMeat = "ChairSitMeat",
  GroundSit = "GroundSit",
  SpawnOtomoPal = "SpawnOtomoPal",
  PartnerSkill = "PartnerSkill",
  CommandPal = "CommandPal",
  ReturnOtomoPal = "ReturnOtomoPal",
  StepForward = "Step_Forward",
  StepBack = "Step_Back",
  StepLeft = "Step_Left",
  StepRight = "Step_Right",
  ElectricShock = "ElectricShock",
  UnlockCagePalLock = "UnlockCagePalLock",
  CutPalMeat = "CutPalMeat",
  Grappling = "Grappling",
  PalRandomRest = "PalRandomRest",
  EPalActionTypeMAX = "EPalActionType_MAX",
}

export enum EPalAdditionalEffectType {
  None = "None",
  Stun = "Stun",
  Sleep = "Sleep",
  Poison = "Poison",
  Burn = "Burn",
  Wetness = "Wetness",
  Freeze = "Freeze",
  Electrical = "Electrical",
  Muddy = "Muddy",
  IvyCling = "IvyCling",
  Darkness = "Darkness",
  AttackUp = "AttackUp",
  DefenseUp = "DefenseUp",
  Recovery = "Recovery",
  TrapLegHold = "Trap_LegHold",
  EPalAdditionalEffectTypeMAX = "EPalAdditionalEffectType_MAX",
}

export enum EPalBattleBGMType {
  None = "None",
  Cute = "Cute",
  Cool = "Cool",
  Strong = "Strong",
  HumanCommon = "Human_Common",
  HumanVillain = "Human_Villain",
  FieldBoss = "FieldBoss",
  Legend = "Legend",
  TowerBoss = "TowerBoss",
  EPalBattleBGMTypeMAX = "EPalBattleBGMType_MAX",
}

export enum EPalBuildObjectTypeA {
  Product = "Product",
  Pal = "Pal",
  Storage = "Storage",
  Food = "Food",
  Infrastructure = "Infrastructure",
  Light = "Light",
  Foundation = "Foundation",
  Defense = "Defense",
  Other = "Other",
  Furniture = "Furniture",
  Dismantle = "Dismantle",
  EPalBuildObjectTypeAMAX = "EPalBuildObjectTypeA_MAX",
}

export enum EPalBuildObjectTypeB {
  ProdCraft = "Prod_Craft",
  ProdResource = "Prod_Resource",
  ProdFurnace = "Prod_Furnace",
  ProdMedicine = "Prod_Medicine",
  PalCapture = "Pal_Capture",
  PalBreed = "Pal_Breed",
  PalModify = "Pal_Modify",
  InfraMedical = "Infra_Medical",
  InfraStorage = "Infra_Storage",
  InfraTrade = "Infra_Trade",
  InfraGeneratePower = "Infra_GeneratePower",
  InfraDefense = "Infra_Defense",
  InfraEnvironment = "Infra_Environment",
  FoodBasic = "Food_Basic",
  FoodAgriculture = "Food_Agriculture",
  FoodCooking = "Food_Cooking",
  FoodLivestock = "Food_Livestock",
  FoundBasic = "Found_Basic",
  FoundHouse = "Found_House",
  Other = "Other",
  EPalBuildObjectTypeBMAX = "EPalBuildObjectTypeB_MAX",
}

export enum EPalDropItemType {
  None = "None",
  UNKO = "UNKO",
  Max = "Max",
}

export enum EPalElementType {
  None = "None",
  Normal = "Normal",
  Fire = "Fire",
  Water = "Water",
  Leaf = "Leaf",
  Electricity = "Electricity",
  Ice = "Ice",
  Earth = "Earth",
  Dark = "Dark",
  Dragon = "Dragon",
  MAX = "MAX",
}

export enum EPalEnergyType {
  None = "None",
  Electric = "Electric",
  EPalEnergyTypeMAX = "EPalEnergyType_MAX",
}

export enum EPalFoodStatusEffectType {
  None = "None",
  Attack = "Attack",
  Defense = "Defense",
  HungerResist = "HungerResist",
  SANResist = "SANResist",
  WorkSpeed = "WorkSpeed",
  EPalFoodStatusEffectTypeMAX = "EPalFoodStatusEffectType_MAX",
}

export enum EPalGenusCategoryType {
  None = "None",
  Humanoid = "Humanoid",
  FourLegged = "FourLegged",
  Dragon = "Dragon",
  Fish = "Fish",
  Bird = "Bird",
  Monster = "Monster",
  Other = "Other",
  EPalGenusCategoryTypeMAX = "EPalGenusCategoryType_MAX",
}

export enum EPalItemTypeA {
  None = "None",
  Weapon = "Weapon",
  SpecialWeapon = "SpecialWeapon",
  Armor = "Armor",
  Accessory = "Accessory",
  Material = "Material",
  Consume = "Consume",
  Ammo = "Ammo",
  Food = "Food",
  Essential = "Essential",
  Glider = "Glider",
  MonsterEquipWeapon = "MonsterEquipWeapon",
  Blueprint = "Blueprint",
  EPalItemTypeAMAX = "EPalItemTypeA_MAX",
}

export enum EPalItemTypeB {
  None = "None",
  WeaponMelee = "WeaponMelee",
  WeaponBow = "WeaponBow",
  WeaponCrossbow = "WeaponCrossbow",
  WeaponHandgun = "WeaponHandgun",
  WeaponAssaultRifle = "WeaponAssaultRifle",
  WeaponSniperRifle = "WeaponSniperRifle",
  WeaponRocketLauncher = "WeaponRocketLauncher",
  WeaponShotgun = "WeaponShotgun",
  WeaponFlameThrower = "WeaponFlameThrower",
  WeaponGatlingGun = "WeaponGatlingGun",
  WeaponCollectionTool = "WeaponCollectionTool",
  WeaponThrowObject = "WeaponThrowObject",
  SPWeaponCaptureBall = "SPWeaponCaptureBall",
  SPWeaponDamageTrap = "SPWeaponDamageTrap",
  SPWeaponCaptureTrap = "SPWeaponCaptureTrap",
  SPWeaponCaptureRope = "SPWeaponCaptureRope",
  ArmorHead = "ArmorHead",
  ArmorBody = "ArmorBody",
  Accessory = "Accessory",
  MaterialOre = "MaterialOre",
  MaterialJewelry = "MaterialJewelry",
  MaterialIngot = "MaterialIngot",
  MaterialWood = "MaterialWood",
  MaterialStone = "MaterialStone",
  MaterialProccessing = "MaterialProccessing",
  MaterialMonster = "MaterialMonster",
  MaterialPalEgg = "MaterialPalEgg",
  ConsumeBandage = "ConsumeBandage",
  ConsumeSeed = "ConsumeSeed",
  ConsumeBullet = "ConsumeBullet",
  ConsumeWazaMachine = "ConsumeWazaMachine",
  ConsumeTechnologyBook = "ConsumeTechnologyBook",
  ConsumeOther = "ConsumeOther",
  FoodMeat = "FoodMeat",
  FoodVegetable = "FoodVegetable",
  FoodFish = "FoodFish",
  FoodDishMeat = "FoodDishMeat",
  FoodDishVegetable = "FoodDishVegetable",
  FoodDishFish = "FoodDishFish",
  FoodProcessed = "FoodProcessed",
  Essential = "Essential",
  EssentialUnlockPlayerFuture = "Essential_UnlockPlayerFuture",
  Glider = "Glider",
  Shield = "Shield",
  Money = "Money",
  Medicine = "Medicine",
  Drug = "Drug",
  MonsterEquipWeapon = "MonsterEquipWeapon",
  Blueprint = "Blueprint",
  EPalItemTypeBMAX = "EPalItemTypeB_MAX",
}

export enum EPalOrganizationType {
  None = "None",
  Guild = "Guild",
  Police = "Police",
  City = "City",
  Brigade = "Brigade",
  TeamBlackHunter = "TeamBlackHunter",
  TeamFireCult = "TeamFireCult",
  TeamWelfareGroup = "TeamWelfareGroup",
  MAX = "MAX",
}

export enum EPalPassiveSkillEffectTargetType {
  None = "None",
  ToSelf = "ToSelf",
  ToTrainer = "ToTrainer",
  ToSelfAndTrainer = "ToSelfAndTrainer",
  EPalPassiveSkillEffectTargetTypeMAX = "EPalPassiveSkillEffectTargetType_MAX",
}

export enum EPalPassiveSkillEffectType {
  No = "no",
  MaxHP = "MaxHP",
  MeleeAttack = "MeleeAttack",
  ShotAttack = "ShotAttack",
  Defense = "Defense",
  Support = "Support",
  CraftSpeed = "CraftSpeed",
  MoveSpeed = "MoveSpeed",
  Homing = "Homing",
  Explosive = "Explosive",
  BulletSpeed = "BulletSpeed",
  BulletAccuracy = "BulletAccuracy",
  Recoil = "Recoil",
  ElementFire = "ElementFire",
  ElementWater = "ElementWater",
  ElementLeaf = "ElementLeaf",
  ElementElectricity = "ElementElectricity",
  ElementIce = "ElementIce",
  ElementEarth = "ElementEarth",
  ElementDark = "ElementDark",
  ElementDragon = "ElementDragon",
  ElementResistNormal = "ElementResist_Normal",
  ElementResistFire = "ElementResist_Fire",
  ElementResistWater = "ElementResist_Water",
  ElementResistLeaf = "ElementResist_Leaf",
  ElementResistElectricity = "ElementResist_Electricity",
  ElementResistIce = "ElementResist_Ice",
  ElementResistEarth = "ElementResist_Earth",
  ElementResistDark = "ElementResist_Dark",
  ElementResistDragon = "ElementResist_Dragon",
  ElementBoostNormal = "ElementBoost_Normal",
  ElementBoostFire = "ElementBoost_Fire",
  ElementBoostWater = "ElementBoost_Water",
  ElementBoostLeaf = "ElementBoost_Leaf",
  ElementBoostElectricity = "ElementBoost_Electricity",
  ElementBoostIce = "ElementBoost_Ice",
  ElementBoostEarth = "ElementBoost_Earth",
  ElementBoostDark = "ElementBoost_Dark",
  ElementBoostDragon = "ElementBoost_Dragon",
  ElementAddItemDropNormal = "ElementAddItemDrop_Normal",
  ElementAddItemDropFire = "ElementAddItemDrop_Fire",
  ElementAddItemDropWater = "ElementAddItemDrop_Water",
  ElementAddItemDropLeaf = "ElementAddItemDrop_Leaf",
  ElementAddItemDropElectricity = "ElementAddItemDrop_Electricity",
  ElementAddItemDropIce = "ElementAddItemDrop_Ice",
  ElementAddItemDropEarth = "ElementAddItemDrop_Earth",
  ElementAddItemDropDark = "ElementAddItemDrop_Dark",
  ElementAddItemDropDragon = "ElementAddItemDrop_Dragon",
  CollectItem = "CollectItem",
  Mute = "Mute",
  Logging = "Logging",
  Mining = "Mining",
  GainItemDrop = "GainItemDrop",
  LifeSteal = "LifeSteal",
  TemperatureResistHeat = "TemperatureResist_Heat",
  TemperatureResistCold = "TemperatureResist_Cold",
  TemperatureInvalidHeat = "TemperatureInvalid_Heat",
  TemperatureInvalidCold = "TemperatureInvalid_Cold",
  MaxInventoryWeight = "MaxInventoryWeight",
  FullStomatchDecrease = "FullStomatch_Decrease",
  SanityDecrease = "Sanity_Decrease",
  BodyPartsWeakDamage = "BodyPartsWeakDamage",
  EPalPassiveSkillEffectTypeMAX = "EPalPassiveSkillEffectType_MAX",
}

export enum EPalSizeType {
  None = "None",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  EPalSizeTypeMAX = "EPalSizeType_MAX",
}

export enum EPalSpecialAttackRateType {
  None = "None",
  VsWood = "vsWood",
  VsStone = "vsStone",
  EPalSpecialAttackRateTypeMAX = "EPalSpecialAttackRateType_MAX",
}

export enum EPalTribeID {
  None = "None",
  Anubis = "Anubis",
  Baphomet = "Baphomet",
  BaphometDark = "Baphomet_Dark",
  Bastet = "Bastet",
  BastetIce = "Bastet_Ice",
  Boar = "Boar",
  Carbunclo = "Carbunclo",
  ColorfulBird = "ColorfulBird",
  Deer = "Deer",
  DrillGame = "DrillGame",
  Eagle = "Eagle",
  ElecPanda = "ElecPanda",
  Ganesha = "Ganesha",
  Garm = "Garm",
  Gorilla = "Gorilla",
  Hedgehog = "Hedgehog",
  HedgehogIce = "Hedgehog_Ice",
  Kirin = "Kirin",
  Kitsunebi = "Kitsunebi",
  LittleBriarRose = "LittleBriarRose",
  Mutant = "Mutant",
  Owl = "Owl",
  Penguin = "Penguin",
  RaijinDaughter = "RaijinDaughter",
  SharkKid = "SharkKid",
  SheepBall = "SheepBall",
  Umihebi = "Umihebi",
  Werewolf = "Werewolf",
  WindChimes = "WindChimes",
  Suzaku = "Suzaku",
  SuzakuWater = "Suzaku_Water",
  FireKirin = "FireKirin",
  FairyDragon = "FairyDragon",
  FairyDragonWater = "FairyDragon_Water",
  SweetsSheep = "SweetsSheep",
  WhiteTiger = "WhiteTiger",
  Alpaca = "Alpaca",
  Serpent = "Serpent",
  SerpentGround = "Serpent_Ground",
  DarkCrow = "DarkCrow",
  BlueDragon = "BlueDragon",
  PinkCat = "PinkCat",
  NegativeKoala = "NegativeKoala",
  FengyunDeeper = "FengyunDeeper",
  VolcanicMonster = "VolcanicMonster",
  VolcanicMonsterIce = "VolcanicMonster_Ice",
  GhostBeast = "GhostBeast",
  RobinHood = "RobinHood",
  LazyDragon = "LazyDragon",
  LazyDragonElectric = "LazyDragon_Electric",
  AmaterasuWolf = "AmaterasuWolf",
  LizardMan = "LizardMan",
  Blueplatypus = "Blueplatypus",
  BlackFurDragon = "BlackFurDragon",
  BeardedDragon = "BeardedDragon",
  BirdDragon = "BirdDragon",
  BirdDragonIce = "BirdDragon_Ice",
  PinkKangaroo = "PinkKangaroo",
  ChickenPal = "ChickenPal",
  FlowerDinosaur = "FlowerDinosaur",
  FlowerDinosaurElectric = "FlowerDinosaur_Electric",
  ElecCat = "ElecCat",
  IceHorse = "IceHorse",
  IceHorseDark = "IceHorse_Dark",
  GrassMammoth = "GrassMammoth",
  CatVampire = "CatVampire",
  SakuraSaurus = "SakuraSaurus",
  SakuraSaurusWater = "SakuraSaurus_Water",
  Horus = "Horus",
  KingBahamut = "KingBahamut",
  BerryGoat = "BerryGoat",
  IceDeer = "IceDeer",
  BlackGriffon = "BlackGriffon",
  WhiteMoth = "WhiteMoth",
  CuteFox = "CuteFox",
  FoxMage = "FoxMage",
  PinkLizard = "PinkLizard",
  WaterLizard = "WaterLizard",
  ElecLion = "ElecLion",
  GuardianDog = "GuardianDog",
  GrassDragon = "GrassDragon",
  WizardOwl = "WizardOwl",
  Kelpie = "Kelpie",
  NegativeOctopus = "NegativeOctopus",
  CowPal = "CowPal",
  Yeti = "Yeti",
  YetiGrass = "Yeti_Grass",
  VioletFairy = "VioletFairy",
  HawkBird = "HawkBird",
  FlowerRabbit = "FlowerRabbit",
  LilyQueen = "LilyQueen",
  LilyQueenDark = "LilyQueen_Dark",
  QueenBee = "QueenBee",
  SoldierBee = "SoldierBee",
  CatBat = "CatBat",
  GrassPanda = "GrassPanda",
  GrassPandaElectric = "GrassPanda_Electric",
  FlameBuffalo = "FlameBuffalo",
  ThunderDog = "ThunderDog",
  CuteMole = "CuteMole",
  BlackMetalDragon = "BlackMetalDragon",
  GrassRabbitMan = "GrassRabbitMan",
  IceFox = "IceFox",
  JetDragon = "JetDragon",
  DreamDemon = "DreamDemon",
  Monkey = "Monkey",
  Manticore = "Manticore",
  ManticoreDark = "Manticore_Dark",
  KingAlpaca = "KingAlpaca",
  PlantSlime = "PlantSlime",
  DarkMutant = "DarkMutant",
  MopBaby = "MopBaby",
  MopKing = "MopKing",
  CatMage = "CatMage",
  PinkRabbit = "PinkRabbit",
  ThunderBird = "ThunderBird",
  HerculesBeetle = "HerculesBeetle",
  SaintCentaur = "SaintCentaur",
  NightFox = "NightFox",
  CaptainPenguin = "CaptainPenguin",
  WeaselDragon = "WeaselDragon",
  SkyDragon = "SkyDragon",
  HadesBird = "HadesBird",
  RedArmorBird = "RedArmorBird",
  Ronin = "Ronin",
  FlyingManta = "FlyingManta",
  BlackCentaur = "BlackCentaur",
  FlowerDoll = "FlowerDoll",
  NaughtyCat = "NaughtyCat",
  CuteButterfly = "CuteButterfly",
  DarkScorpion = "DarkScorpion",
  ThunderDragonMan = "ThunderDragonMan",
  WoolFox = "WoolFox",
  SifuDog = "SifuDog",
  TentacleTurtle = "TentacleTurtle",
  GoldenHorse = "GoldenHorse",
  BadCatgirl = "BadCatgirl",
  BrownRabbit = "BrownRabbit",
  FeatherOstrich = "FeatherOstrich",
  WingGolem = "WingGolem",
  ScorpionMan = "ScorpionMan",
  BlueberryFairy = "BlueberryFairy",
  LazyCatfish = "LazyCatfish",
  DeerGround = "Deer_Ground",
  FireKirinDark = "FireKirin_Dark",
  KingAlpacaIce = "KingAlpaca_Ice",
  RobinHoodGround = "RobinHood_Ground",
  GrassMammothIce = "GrassMammoth_Ice",
  KelpieFire = "Kelpie_Fire",
  SharkKidFire = "SharkKid_Fire",
  LizardManFire = "LizardMan_Fire",
  LavaGirl = "LavaGirl",
  FlameBambi = "FlameBambi",
  UmihebiFire = "Umihebi_Fire",
  WindChimesIce = "WindChimes_Ice",
  Human = "Human",
  EPalTribeIDMAX = "EPalTribeID_MAX",
}

export enum EPalWazaCategory {
  Melee = "Melee",
  Shot = "Shot",
  Support = "Support",
  EPalWazaCategoryMAX = "EPalWazaCategory_MAX",
}

export enum EPalWazaID {
  None = "None",
  HumanPunch = "Human_Punch",
  WorkAttack = "WorkAttack",
  Throw = "Throw",
  Scratch = "Scratch",
  EnergyShot = "EnergyShot",
  UniqueAnubisLowRoundKick = "Unique_Anubis_LowRoundKick",
  UniqueAnubisGroundPunch = "Unique_Anubis_GroundPunch",
  UniqueAnubisTackle = "Unique_Anubis_Tackle",
  UniqueDeerPushupHorn = "Unique_Deer_PushupHorn",
  HyperBeam = "HyperBeam",
  PowerShot = "PowerShot",
  PowerBall = "PowerBall",
  UniqueGarmBite = "Unique_Garm_Bite",
  Intimidate = "Intimidate",
  UniqueBoarTackle = "Unique_Boar_Tackle",
  UniquePinkCatCatPunch = "Unique_PinkCat_CatPunch",
  UniqueFlowerDinosaurWhip = "Unique_FlowerDinosaur_Whip",
  UniqueSheepBallRoll = "Unique_SheepBall_Roll",
  UniqueChickenPalChickenPeck = "Unique_ChickenPal_ChickenPeck",
  UniqueGorillaGroundPunch = "Unique_Gorilla_GroundPunch",
  UniqueGrassmammothEarthquake = "Unique_Grassmammoth_Earthquake",
  AirCanon = "AirCanon",
  UniqueGrassPandaMusclePunch = "Unique_GrassPanda_MusclePunch",
  UniqueRobinHoodBowSnipe = "Unique_RobinHood_BowSnipe",
  UniqueAlpacaTackle = "Unique_Alpaca_Tackle",
  UniqueKingAlpacaBodyPress = "Unique_KingAlpaca_BodyPress",
  UniqueWerewolfScratch = "Unique_Werewolf_Scratch",
  UniqueFengyunDeeperCloudTempest = "Unique_FengyunDeeper_CloudTempest",
  UniqueBaphometSwallowKite = "Unique_Baphomet_SwallowKite",
  UniqueHerculesBeetleBeetleTackle = "Unique_HerculesBeetle_BeetleTackle",
  UniqueHawkBirdStorm = "Unique_HawkBird_Storm",
  UniqueEagleGlidingNail = "Unique_Eagle_GlidingNail",
  SelfDestruct = "SelfDestruct",
  SelfDestructBee = "SelfDestruct_Bee",
  SelfExplosion = "SelfExplosion",
  FireBlast = "FireBlast",
  Flamethrower = "Flamethrower",
  FireBall = "FireBall",
  FlareArrow = "FlareArrow",
  FireSeed = "FireSeed",
  UniqueHorusFlareBird = "Unique_Horus_FlareBird",
  FlareTornado = "FlareTornado",
  Inferno = "Inferno",
  UniqueFireKirinTackle = "Unique_FireKirin_Tackle",
  UniqueAmaterasuWolfFireCharge = "Unique_AmaterasuWolf_FireCharge",
  UniqueVolcanicMonsterMagmaAttack = "Unique_VolcanicMonster_MagmaAttack",
  UniqueFlameBuffaloFlameHorn = "Unique_FlameBuffalo_FlameHorn",
  WaterGun = "WaterGun",
  WaterWave = "WaterWave",
  HydroPump = "HydroPump",
  WaterBall = "WaterBall",
  TidalWave = "TidalWave",
  AquaJet = "AquaJet",
  BubbleShot = "BubbleShot",
  AcidRain = "AcidRain",
  UniqueBluePlatypusToboggan = "Unique_BluePlatypus_Toboggan",
  WindCutter = "WindCutter",
  GrassTornado = "GrassTornado",
  SolarBeam = "SolarBeam",
  SeedMachinegun = "SeedMachinegun",
  SeedMine = "SeedMine",
  RootAttack = "RootAttack",
  SpecialCutter = "SpecialCutter",
  UniqueQueenBeeSpinLance = "Unique_QueenBee_SpinLance",
  ThunderRain = "ThunderRain",
  ThunderBall = "ThunderBall",
  LineThunder = "LineThunder",
  CrossThunder = "CrossThunder",
  ThreeThunder = "ThreeThunder",
  ElecWave = "ElecWave",
  Thunderbolt = "Thunderbolt",
  ThunderFunnel = "ThunderFunnel",
  SpreadPulse = "SpreadPulse",
  LockonLaser = "LockonLaser",
  LightningStrike = "LightningStrike",
  UniqueElecPandaElecScratch = "Unique_ElecPanda_ElecScratch",
  UniqueKirinLightningTackle = "Unique_Kirin_LightningTackle",
  IceMissile = "IceMissile",
  BlizzardLance = "BlizzardLance",
  SnowStorm = "SnowStorm",
  IcicleThrow = "IcicleThrow",
  UniqueIceHorseIceBladeAttack = "Unique_IceHorse_IceBladeAttack",
  IceBlade = "IceBlade",
  SandTornado = "SandTornado",
  ThrowRock = "ThrowRock",
  RockLance = "RockLance",
  MudShot = "MudShot",
  StoneShotgun = "StoneShotgun",
  UniqueDrillGameShellAttack = "Unique_DrillGame_ShellAttack",
  DarkLaser = "DarkLaser",
  DarkWave = "DarkWave",
  ShadowBall = "ShadowBall",
  Psychokinesis = "Psychokinesis",
  PoisonShot = "PoisonShot",
  GhostFlame = "GhostFlame",
  UniqueDarkCrowTelePoke = "Unique_DarkCrow_TelePoke",
  DragonMeteor = "DragonMeteor",
  DragonBreath = "DragonBreath",
  DragonWave = "DragonWave",
  DragonCanon = "DragonCanon",
  UniqueFairyDragonFairyTornado = "Unique_FairyDragon_FairyTornado",
  FunnelDreamDemon = "Funnel_DreamDemon",
  FunnelRaijinDaughter = "Funnel_RaijinDaughter",
  StardustArrow = "StardustArrow",
  Tremor = "Tremor",
  FrostBreath = "FrostBreath",
  DiamondFall = "DiamondFall",
  BeamSlicer = "BeamSlicer",
  Commet = "Commet",
  DarkBall = "DarkBall",
  DarkFog = "DarkFog",
  PoisonFog = "PoisonFog",
  DarkLegion = "DarkLegion",
  UniqueBirdDragonFireBreath = "Unique_BirdDragon_FireBreath",
  UniqueBlackMetalDragonFirePunch = "Unique_BlackMetalDragon_FirePunch",
  UniqueDarkScorpionPierce = "Unique_DarkScorpion_Pierce",
  UniqueGhostBeastTossin = "Unique_GhostBeast_Tossin",
  UniqueJetDragonJumpBeam = "Unique_JetDragon_JumpBeam",
  UniqueThunderBirdThunderStorm = "Unique_ThunderBird_ThunderStorm",
  UniqueYetiSnowBall = "Unique_Yeti_SnowBall",
  UniqueNaughtyCatCatPress = "Unique_NaughtyCat_CatPress",
  UniqueIceDeerIceHorn = "Unique_IceDeer_IceHorn",
  UniqueKingBahamutAirCrash = "Unique_KingBahamut_AirCrash",
  UniqueManticoreInfernoStrike = "Unique_Manticore_InfernoStrike",
  UniqueSoldierBeeNeedleLance = "Unique_SoldierBee_NeedleLance",
  UniqueThunderDogInazumaShorai = "Unique_ThunderDog_InazumaShorai",
  UniqueBlackCentaurTwoSpearRushes = "Unique_BlackCentaur_TwoSpearRushes",
  UniqueBlackGriffonTackleLaser = "Unique_BlackGriffon_TackleLaser",
  UniqueSakuraSaurusSideTackle = "Unique_SakuraSaurus_SideTackle",
  UniqueThunderDragonManThunderSwordAttack = "Unique_ThunderDragonMan_ThunderSwordAttack",
  UniqueRedArmorBirdTriplePeck = "Unique_RedArmorBird_TriplePeck",
  UniqueCaptainPenguinBodySlide = "Unique_CaptainPenguin_BodySlide",
  UniqueRoninIai = "Unique_Ronin_Iai",
  UniqueGrassRabbitManGrassRoundKick = "Unique_GrassRabbitMan_GrassRoundKick",
  UniqueSaintCentaurOneSpearRushes = "Unique_SaintCentaur_OneSpearRushes",
  UniqueUmihebiWindingTackle = "Unique_Umihebi_WindingTackle",
  UniqueWeaselDragonFlyingTackle = "Unique_WeaselDragon_FlyingTackle",
  UniqueWhiteTigerIceScratch = "Unique_WhiteTiger_IceScratch",
  UniqueBaphometDarkDarkKite = "Unique_Baphomet_Dark_DarkKite",
  UniqueBirdDragonIceIceBreath = "Unique_BirdDragon_Ice_IceBreath",
  UniqueFireKirinDarkDarkTossin = "Unique_FireKirin_Dark_DarkTossin",
  UniqueVolcanicMonsterIceIceAttack = "Unique_VolcanicMonster_Ice_IceAttack",
  UniqueIceHorseDarkDarkBladeAttack = "Unique_IceHorse_Dark_DarkBladeAttack",
  UniqueYetiGrassGrassBall = "Unique_Yeti_Grass_GrassBall",
  UniqueGrassPandaElectricElectricPunch = "Unique_GrassPanda_Electric_ElectricPunch",
  Reserve52 = "Reserve_52",
  Reserve53 = "Reserve_53",
  Reserve54 = "Reserve_54",
  Reserve55 = "Reserve_55",
  Reserve56 = "Reserve_56",
  Reserve57 = "Reserve_57",
  Reserve58 = "Reserve_58",
  Reserve59 = "Reserve_59",
  Reserve60 = "Reserve_60",
  Reserve61 = "Reserve_61",
  Reserve62 = "Reserve_62",
  Reserve63 = "Reserve_63",
  Reserve64 = "Reserve_64",
  Reserve65 = "Reserve_65",
  Reserve66 = "Reserve_66",
  Reserve67 = "Reserve_67",
  Reserve68 = "Reserve_68",
  Reserve69 = "Reserve_69",
  Reserve70 = "Reserve_70",
  Reserve71 = "Reserve_71",
  Reserve72 = "Reserve_72",
  Reserve73 = "Reserve_73",
  Reserve74 = "Reserve_74",
  Reserve75 = "Reserve_75",
  Reserve76 = "Reserve_76",
  Reserve77 = "Reserve_77",
  Reserve78 = "Reserve_78",
  Reserve79 = "Reserve_79",
  Reserve80 = "Reserve_80",
  Reserve81 = "Reserve_81",
  Reserve82 = "Reserve_82",
  Reserve83 = "Reserve_83",
  Reserve84 = "Reserve_84",
  Reserve85 = "Reserve_85",
  Reserve86 = "Reserve_86",
  Reserve87 = "Reserve_87",
  Reserve88 = "Reserve_88",
  Reserve89 = "Reserve_89",
  Reserve90 = "Reserve_90",
  Reserve91 = "Reserve_91",
  Reserve92 = "Reserve_92",
  Reserve93 = "Reserve_93",
  Reserve94 = "Reserve_94",
  Reserve95 = "Reserve_95",
  Reserve96 = "Reserve_96",
  Reserve97 = "Reserve_97",
  Reserve98 = "Reserve_98",
  Reserve99 = "Reserve_99",
  MAX = "MAX",
}

export enum EPalWeaponType {
  None = "None",
  ThrowObject = "ThrowObject",
  Handgun = "Handgun",
  AssaultRifle = "AssaultRifle",
  Shotgun = "Shotgun",
  SniperRifle = "SniperRifle",
  RocketLauncher = "RocketLauncher",
  MeleeWeapon = "MeleeWeapon",
  Bow = "Bow",
  BowGun = "BowGun",
  FlameThrower = "FlameThrower",
  GatlingGun = "GatlingGun",
  Liftup = "Liftup",
  LaserRifle = "LaserRifle",
  MAX = "MAX",
}

export enum EPalWorkSuitability {
  None = "None",
  EmitFlame = "EmitFlame",
  Watering = "Watering",
  Seeding = "Seeding",
  GenerateElectricity = "GenerateElectricity",
  Handcraft = "Handcraft",
  Collection = "Collection",
  Deforest = "Deforest",
  Mining = "Mining",
  OilExtraction = "OilExtraction",
  ProductMedicine = "ProductMedicine",
  Cool = "Cool",
  Transport = "Transport",
  MonsterFarm = "MonsterFarm",
  Anyone = "Anyone",
  MAX = "MAX",
}

export enum EPalWorkType {
  None = "None",
  CommonTemp = "CommonTemp",
  ReviveCharacter = "ReviveCharacter",
  Architecture = "Architecture",
  RepairBuildObject = "RepairBuildObject",
  FarmHarvest = "FarmHarvest",
  HarvestLevelObject = "HarvestLevelObject",
  TransportFoodItemInBaseCamp = "TransportFoodItemInBaseCamp",
  Seeding = "Seeding",
  Watering = "Watering",
  Cooking = "Cooking",
  TransportDisposableItemInBaseCamp = "TransportDisposableItemInBaseCamp",
  ConvertItem = "ConvertItem",
  ProductItem = "ProductItem",
  Smelting = "Smelting",
  ProductMedicine = "ProductMedicine",
  TransportItemInBaseCamp = "TransportItemInBaseCamp",
  CollectResourcePickable = "CollectResourcePickable",
  ProductResourceDeforest = "ProductResource_Deforest",
  ProductResourceMining = "ProductResource_Mining",
  ProductResourceDeforestOnFacility = "ProductResource_Deforest_OnFacility",
  ProductResourceMiningOnFacility = "ProductResource_Mining_OnFacility",
  GenerateEnergy = "GenerateEnergy",
  Ignition = "Ignition",
  Defense = "Defense",
  BreedFarm = "BreedFarm",
  MonsterFarm = "MonsterFarm",
  ExtinguishBurn = "ExtinguishBurn",
  Cool = "Cool",
  Attack = "Attack",
  CollectItemToStorage = "CollectItemToStorage",
  TransportItem = "TransportItem",
  CollectResource = "CollectResource",
  GrowupPromotion = "GrowupPromotion",
  EPalWorkTypeMAX = "EPalWorkType_MAX",
}

export interface ElementSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  largeIconPath?: string | null;
}

export interface ElementSummaryResponseIEnumerableEnveloped {
  data?: ElementSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export enum EntityType {
  None = "None",
  ActiveSkill = "ActiveSkill",
  BuildObject = "BuildObject",
  Item = "Item",
  Pal = "Pal",
  PartnerSkill = "PartnerSkill",
  PassiveSkill = "PassiveSkill",
  Recipe = "Recipe",
  Tech = "Tech",
  Element = "Element",
  Work = "Work",
  BreedingResult = "BreedingResult",
  Treasure = "Treasure",
  Npc = "Npc",
}

export interface EntityTypeISummaryModel {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
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

export interface ItemDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  rarity: number;
  props: ItemProperties;
  passiveSkillId?: string | null;
  sources?: ItemSources;
  ingredientFor?: ItemIngredientFor;
  foodEffects?: ItemFoodEffect[] | null;
  isObtainable: boolean;
}

export interface ItemDetailsResponseEnveloped {
  data?: ItemDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface ItemDrop {
  itemId?: string | null;
  /** @format float */
  dropRate?: number;
  /** @format int32 */
  min?: number;
  /** @format int32 */
  max?: number;
}

export interface ItemDropSource {
  id?: string | null;
  entityType?: EntityType;
  /** @format float */
  dropRate?: number;
  /** @format int32 */
  min?: number;
  /** @format int32 */
  max?: number;
}

export interface ItemFoodEffect {
  /** @format int32 */
  effectTime?: number;
  /** @format int32 */
  effectValue?: number;
  effectType?: EPalFoodStatusEffectType;
}

export interface ItemIngredientFor {
  recipes?: string[] | null;
  buildObjects?: string[] | null;
}

export interface ItemProperties {
  typeA?: EPalItemTypeA;
  typeB?: EPalItemTypeB;
  /** @format int32 */
  rank?: number;
  /** @format int32 */
  rarity?: number;
  /** @format int32 */
  maxStackCount?: number;
  /** @format double */
  weight?: number;
  /** @format int32 */
  price?: number;
  /** @format int32 */
  sortId?: number;
  bInTreasureBox?: boolean;
  bNotConsumed?: boolean;
  bEnableHandcraft?: boolean;
  /** @format int32 */
  technologyTreeLock?: number;
  itemStaticClass?: string | null;
  itemDynamicClass?: string | null;
  itemActorClass?: string | null;
  itemStaticMeshName?: string | null;
  visualBlueprintClassName?: string | null;
  dropItemType?: EPalDropItemType;
  /** @format int32 */
  editorRowNameHash?: number;
  /** @format int32 */
  restoreSatiety?: number;
  /** @format int32 */
  restoreConcentration?: number;
  /** @format int32 */
  restoreSanity?: number;
  /** @format int32 */
  restoreHealth?: number;
  /** @format int32 */
  grantEffect1Id?: number;
  /** @format int32 */
  grantEffect1Time?: number;
  /** @format int32 */
  grantEffect2Id?: number;
  /** @format int32 */
  grantEffect2Time?: number;
  /** @format int32 */
  grantEffect3Id?: number;
  /** @format int32 */
  grantEffect3Time?: number;
  /** @format int32 */
  durability?: number;
  elementType?: EPalElementType;
  bSleepWeapon?: boolean;
  /** @format int32 */
  magazineSize?: number;
  /** @format int32 */
  sneakAttackRate?: number;
  /** @format int32 */
  physicalAttackValue?: number;
  /** @format int32 */
  hpValue?: number;
  /** @format int32 */
  physicalDefenseValue?: number;
  /** @format int32 */
  shieldValue?: number;
  /** @format int32 */
  magicAttackValue?: number;
  /** @format int32 */
  magicDefenseValue?: number;
  passiveSkillName?: string | null;
  wazaId?: EPalWazaID;
  /** @format double */
  corruptionFactor?: number;
  /** @format int32 */
  floatValue1?: number;
}

export interface ItemSources {
  drops?: ItemDropSource[] | null;
  treasureBoxes?: ItemDropSource[] | null;
  recipes?: string[] | null;
}

export interface ItemSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  rarity: number;
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

export interface PalWorkType {
  workType?: EPalWorkType;
  /** @format int32 */
  workPriorityInBase?: number;
  workTypeDefinition?: WorkTypeDefinition;
}

export interface PaldexDistribution {
  dayTimeLocations?: Coordinate[] | null;
  /** @format double */
  dayTimeRadius?: number;
  nightTimeLocations?: Coordinate[] | null;
  /** @format double */
  nightTimeRadius?: number;
}

export interface PartnerSkillDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  palsWithSkill?: string[] | null;
}

export interface PartnerSkillDetailsResponseEnveloped {
  data?: PartnerSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PartnerSkillSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
}

export interface PartnerSkillSummaryResponseIEnumerableEnveloped {
  data?: PartnerSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PassiveSkillDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  rank: number;
  /** @format int32 */
  palsCount: number;
  summary?: string | null;
  passiveSkillEffects?: PassiveSkillEffect[] | null;
  props?: PassiveSkillProperties;
  palsWithSkill?: string[] | null;
  itemsWithSkill?: string[] | null;
}

export interface PassiveSkillDetailsResponseEnveloped {
  data?: PassiveSkillDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface PassiveSkillEffect {
  effectType: EPalPassiveSkillEffectType;
  /** @format float */
  effectValue: number;
  targetType: EPalPassiveSkillEffectTargetType;
}

export interface PassiveSkillProperties {
  invokeActiveOtomo: boolean;
  invokeWorker: boolean;
  invokeRiding: boolean;
  invokeReserve: boolean;
  invokeInOtomo: boolean;
  invokeAlways: boolean;
  addPal: boolean;
  addRarePal: boolean;
  addShotWeapon: boolean;
  addMeleeWeapon: boolean;
  addArmor: boolean;
  addAccessory: boolean;
}

export interface PassiveSkillSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  rank: number;
  /** @format int32 */
  palsCount: number;
}

export interface PassiveSkillSummaryResponseIEnumerableEnveloped {
  data?: PassiveSkillSummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface RecipeDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @minLength 1 */
  outputItemId: string;
  outputItem: ItemSummaryResponse;
  /** @format int32 */
  rarity: number;
  props: RecipeProperties;
  unlockTech?: string[] | null;
  ingredients: RecipeIngredient[];
}

export interface RecipeDetailsResponseEnveloped {
  data?: RecipeDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface RecipeIngredient {
  itemId?: string | null;
  /** @format int64 */
  quantity?: number;
}

export interface RecipeProperties {
  /** @format float */
  workAmount: number;
  /** @format int32 */
  workableAttribute: number;
  unlockItemId?: string | null;
  energyType: EPalEnergyType;
  /** @format int32 */
  energyAmount: number;
}

export interface RecipeSummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @minLength 1 */
  outputItemId: string;
  outputItem: ItemSummaryResponse;
  /** @format int32 */
  rarity: number;
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

export interface TechnologyDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  tier?: number;
  unlockBuildObjects?: string[] | null;
  unlockItemRecipes?: string[] | null;
  requiresTechnology?: string | null;
  props: TechnologyProperties;
}

export interface TechnologyDetailsResponseEnveloped {
  data?: TechnologyDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface TechnologyProperties {
  isBossTechnology?: boolean;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  cost?: number;
}

export interface TechnologySummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  /** @format int32 */
  tier?: number;
}

export interface TechnologySummaryResponseIEnumerableEnveloped {
  data?: TechnologySummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface WorkSuitabilityCharacter {
  characterId?: string | null;
  /** @format int32 */
  rank?: number;
}

export interface WorkSuitabilityDetailsResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
  props?: WorkSuitabilityProperties;
  palsWithWorkSuitability?: WorkSuitabilityCharacter[] | null;
}

export interface WorkSuitabilityDetailsResponseEnveloped {
  data?: WorkSuitabilityDetailsResponse;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface WorkSuitabilityProperties {
  workSuitability?: EPalWorkSuitability;
  workTypes?: PalWorkType[] | null;
  speedByRank?: Record<string, number | null>;
}

export interface WorkSuitabilitySummaryResponse {
  id?: string | null;
  entityType?: EntityType;
  iconPath?: string | null;
  name?: string | null;
  description?: string | null;
  relations?: Record<string, Record<string, EntityTypeISummaryModel>>;
}

export interface WorkSuitabilitySummaryResponseIEnumerableEnveloped {
  data?: WorkSuitabilitySummaryResponse[] | null;
  metadata?: Metadata;
  filterOptions?: Filter[] | null;
}

export interface WorkTypeDefinition {
  genusCategories?: EPalGenusCategoryType[] | null;
  workSuitability?: EPalWorkSuitability;
  workType?: EPalWorkType;
  actionType?: EPalActionType;
  /** @format int32 */
  workerMaxNum?: number | null;
  /** @format float */
  affectSanityValue?: number;
}
