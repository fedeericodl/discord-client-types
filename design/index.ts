import type { AccessibilityAnnouncer } from "./components/AccessibilityAnnouncer";
import type { LOW_SATURATION_THRESHOLD } from "./components/AccessibilityPreferencesContext/AccessibilityConstants";
import type { AccessibilityPreferencesContext } from "./components/AccessibilityPreferencesContext/AccessibilityPreferencesContext";
import type { Anchor } from "./components/Anchor";
import type {
  AvatarSizes,
  AvatarSizeSpecs,
  GetAvatarSize,
  GetAvatarSpecs,
} from "./components/Avatar/AvatarConstants";
import type { Backdrop, BackdropStyles } from "./components/Backdrop";
import type {
  BadgeShapes,
  CircleBadge,
  GetBadgeCountString,
  GetBadgeWidthForValue,
  IconBadge,
  NumberBadge,
  PremiumBadge,
  TextBadge,
} from "./components/Badges";
import type { BlockInteractions, BlockInteractionsContext } from "./components/BlockInteractions";
import type { Breadcrumbs } from "./components/Breadcrumbs";
import type {
  Button,
  ButtonColors,
  ButtonLink,
  ButtonLooks,
  ButtonSizes,
  GetButtonStyle,
} from "./components/Button/Button";
import type {
  CircleIconButton,
  CircleIconButtonColors,
  CircleIconButtonSizes,
} from "./components/Button/CircleIconButton";
import type { LinkButton } from "./components/Button/LinkButton";
import type { Shine, ShineSizes, ShinyButton } from "./components/Button/ShinyButton";
import type { ButtonGroup } from "./components/ButtonGroup";
import type { CalendarPicker } from "./components/CalendarPicker";
import type { Card, CardTypes } from "./components/Card";
import type { Checkbox, CheckboxIndicator } from "./components/Checkbox";
import type { Clickable } from "./components/Clickable/Clickable";
import type { ClickableContainer } from "./components/Clickable/ClickableContainer";
import type { Collapsible } from "./components/Collapsible";
import type { CopyInput, CopyInputModes } from "./components/CopyInput";
import type { DateInput } from "./components/DateInput";
import type { EmptyState, EmptyStateImage, EmptyStateText } from "./components/EmptyState";
import type { FocusRing, FocusRingScope } from "./components/Focus/FocusRing";
import type { FocusRingManager } from "./components/Focus/FocusRingManager";
import type {
  FormContext,
  FormContextProvider,
  UseFormContext,
} from "./components/Forms/FormContext";
import type { FormDivider } from "./components/Forms/FormDivider";
import type { FormErrorBlock, FormErrorBlockColors } from "./components/Forms/FormErrorBlock";
import type { FormItem } from "./components/Forms/FormItem";
import type { FormLabel } from "./components/Forms/FormLabel";
import type {
  FormNotice,
  FormNoticeImagePositions,
  FormNoticeTypes,
} from "./components/Forms/FormNotice";
import type { FormSection } from "./components/Forms/FormSection";
import type { FormSwitch } from "./components/Forms/FormSwitch";
import type { FormText, FormTextTypes } from "./components/Forms/FormText";
import type { FormTitle, FormTitleTags } from "./components/Forms/FormTitle";
import type { HelpMessage, HelpMessageTypes } from "./components/HelpMessage";
import type { HiddenVisually } from "./components/HiddenVisually";
import type { Interactive } from "./components/Interactive";
import type { KeyCombo, PRETTY_KEYS } from "./components/KeyCombo";
import type { NavItem } from "./components/NavItem";
import type {
  Notice,
  NoticeButton,
  NoticeButtonAnchor,
  NoticeCloseButton,
  NoticeColors,
  PrimaryCTANoticeButton,
} from "./components/Notice";
import type { NumberInputStepper } from "./components/NumberInputStepper";
import type { Paginator } from "./components/Paginator/Paginator";
import type { Progress } from "./components/Progress/Progress";
import type { ProgressCircle } from "./components/Progress/ProgressCircle";
import type { StackedProgress } from "./components/Progress/StackedProgress";
import type {
  RadioGroup,
  RadioIndicator,
  UseRadioGroup,
  UseRadioItem,
} from "./components/RadioGroup";
import type { NameWithRole, NameWithRoleAnchor } from "./components/Role/NameWithRole";
import type { RoleCircle, RoleDot } from "./components/Role/RoleDot";
import type { SearchBar } from "./components/SearchBar";
import type { SearchBox } from "./components/SearchBox";
import type { SegmentedControl } from "./components/SegmentedControl";
import type { SelectLooks } from "./components/Select/SelectTypes";
import type { Shakeable } from "./components/Shakeable";
import type { Shaker } from "./components/Shaker";
import type { Spacer } from "./components/Spacer";
import type { Spinner, SpinnerTypes } from "./components/Spinner";
import type { Switch } from "./components/Switch";
import type {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "./components/Table";
import type { Text } from "./components/Text";
import type { TextArea } from "./components/TextInput/TextArea";
import type { TextAreaAutosize } from "./components/TextInput/TextAreaAutosize";
import type { InputError, TextInput } from "./components/TextInput/TextInput";
import type { TimeInput } from "./components/TimeInput";
import type { CreateToast, Toast } from "./components/Toast/Toast";
import type { PopToast, ShowToast, UseToastStore } from "./components/Toast/ToastAPI";
import type { ToastPosition, ToastType } from "./components/Toast/ToastConstants";
import type { ToastContainer } from "./components/Toast/ToastContainer";
import type { TransitionGroup, TransitionStates } from "./components/TransitionGroup";

export * from "./components/AccessibilityAnnouncer";
export * from "./components/AccessibilityPreferencesContext/AccessibilityConstants";
export * from "./components/AccessibilityPreferencesContext/AccessibilityPreferencesContext";
export * from "./components/Anchor";
export * from "./components/Avatar/AvatarConstants";
export * from "./components/Backdrop";
export * from "./components/Badges";
export * from "./components/BlockInteractions";
export * from "./components/Breadcrumbs";
export * from "./components/Button/Button";
export * from "./components/Button/CircleIconButton";
export * from "./components/Button/LinkButton";
export * from "./components/ButtonGroup";
export * from "./components/CalendarPicker";
export * from "./components/Card";
export * from "./components/Checkbox";
export * from "./components/Clickable/Clickable";
export * from "./components/Clickable/ClickableContainer";
export * from "./components/Collapsible";
export * from "./components/CopyInput";
export * from "./components/DateInput";
export * from "./components/EmptyState";
export * from "./components/Focus/FocusRing";
export * from "./components/Focus/FocusRingManager";
export * from "./components/Forms/FormContext";
export * from "./components/Forms/FormDivider";
export * from "./components/Forms/FormErrorBlock";
export * from "./components/Forms/FormItem";
export * from "./components/Forms/FormLabel";
export * from "./components/Forms/FormNotice";
export * from "./components/Forms/FormSection";
export * from "./components/Forms/FormSwitch";
export * from "./components/Forms/FormText";
export * from "./components/Forms/FormTitle";
export * from "./components/HelpMessage";
export * from "./components/HiddenVisually";
export * from "./components/Interactive";
export * from "./components/KeyCombo";
export * from "./components/NavItem";
export * from "./components/Notice";
export * from "./components/NumberInputStepper";
export * from "./components/Paginator/PaginationController";
export * from "./components/Paginator/Paginator";
export * from "./components/Progress/Progress";
export * from "./components/Progress/ProgressCircle";
export * from "./components/Progress/StackedProgress";
export * from "./components/RadioGroup";
export * from "./components/Role/NameWithRole";
export * from "./components/Role/RoleDot";
export * from "./components/SearchBar";
export * from "./components/SearchBox";
export * from "./components/SegmentedControl";
export * from "./components/Select/SelectTypes";
export * from "./components/Shakeable";
export * from "./components/Shaker";
export * from "./components/Spacer";
export * from "./components/Spinner";
export * from "./components/Switch";
export * from "./components/Table";
export * from "./components/TextInput/TextArea";
export * from "./components/TextInput/TextAreaAutosize";
export * from "./components/TextInput/TextInput";
export * from "./components/TimeInput";
export * from "./components/Toast/Toast";
export * from "./components/Toast/ToastAPI";
export * from "./components/Toast/ToastConstants";
export * from "./components/Toast/ToastContainer";
export * from "./components/TransitionGroup";
export * from "./config";

/**
 * Discord's design system.
 * This is a collection of components and utilities that are used to build Discord's UI.
 */
export interface Design {
  AccessibilityAnnouncer: AccessibilityAnnouncer;
  AccessibilityPreferencesContext: AccessibilityPreferencesContext;
  Anchor: Anchor;
  AvatarSizes: AvatarSizes;
  AvatarSizeSpecs: AvatarSizeSpecs;
  Backdrop: Backdrop;
  BackdropStyles: BackdropStyles;
  BadgeShapes: BadgeShapes;
  BlockInteractions: BlockInteractions;
  BlockInteractionsContext: BlockInteractionsContext;
  Breadcrumbs: Breadcrumbs;
  Button: Button;
  ButtonColors: ButtonColors;
  ButtonGroup: ButtonGroup;
  ButtonLink: ButtonLink;
  ButtonLooks: ButtonLooks;
  ButtonSizes: ButtonSizes;
  CalendarPicker: CalendarPicker;
  Card: Card;
  CardTypes: CardTypes;
  Checkbox: Checkbox;
  CheckboxIndicator: CheckboxIndicator;
  CircleBadge: CircleBadge;
  CircleIconButton: CircleIconButton;
  CircleIconButtonColors: CircleIconButtonColors;
  CircleIconButtonSizes: CircleIconButtonSizes;
  Clickable: Clickable;
  ClickableContainer: ClickableContainer;
  Collapsible: Collapsible;
  CopyInput: CopyInput;
  CopyInputModes: CopyInputModes;
  DateInput: DateInput;
  EmptyState: EmptyState;
  EmptyStateImage: EmptyStateImage;
  EmptyStateText: EmptyStateText;
  FocusRing: typeof FocusRing;
  FocusRingManager: FocusRingManager;
  FocusRingScope: typeof FocusRingScope;
  FormContext: FormContext;
  FormContextProvider: FormContextProvider;
  FormDivider: FormDivider;
  FormErrorBlock: FormErrorBlock;
  FormErrorBlockColors: FormErrorBlockColors;
  FormItem: FormItem;
  FormLabel: FormLabel;
  FormNotice: FormNotice;
  FormNoticeImagePositions: FormNoticeImagePositions;
  FormNoticeTypes: FormNoticeTypes;
  FormSection: FormSection;
  FormSwitch: FormSwitch;
  FormText: FormText;
  FormTextTypes: FormTextTypes;
  FormTitle: FormTitle;
  FormTitleTags: FormTitleTags;
  HelpMessage: HelpMessage;
  HelpMessageTypes: typeof HelpMessageTypes;
  HiddenVisually: HiddenVisually;
  IconBadge: IconBadge;
  InputError: InputError;
  Interactive: Interactive;
  KeyCombo: KeyCombo;
  LinkButton: LinkButton;
  LOW_SATURATION_THRESHOLD: LOW_SATURATION_THRESHOLD;
  NameWithRole: NameWithRole;
  NameWithRoleAnchor: NameWithRoleAnchor;
  NavItem: NavItem;
  Notice: Notice;
  NoticeButton: NoticeButton;
  NoticeButtonAnchor: NoticeButtonAnchor;
  NoticeCloseButton: NoticeCloseButton;
  NoticeColors: NoticeColors;
  NumberBadge: NumberBadge;
  NumberInputStepper: NumberInputStepper;
  Paginator: Paginator;
  PremiumBadge: PremiumBadge;
  PRETTY_KEYS: PRETTY_KEYS;
  PrimaryCTANoticeButton: PrimaryCTANoticeButton;
  Progress: Progress;
  ProgressCircle: ProgressCircle;
  RadioGroup: RadioGroup;
  RadioIndicator: RadioIndicator;
  RoleCircle: RoleCircle;
  RoleDot: RoleDot;
  SearchBar: SearchBar;
  SearchBox: SearchBox;
  SegmentedControl: SegmentedControl;
  SelectLooks: typeof SelectLooks;
  Shakeable: Shakeable;
  Shaker: Shaker;
  Shine: Shine;
  ShineSizes: ShineSizes;
  ShinyButton: ShinyButton;
  Spacer: Spacer;
  Spinner: Spinner;
  SpinnerTypes: SpinnerTypes;
  StackedProgress: StackedProgress;
  Switch: Switch;
  Table: Table;
  TableBody: TableBody;
  TableCell: TableCell;
  TableColumn: TableColumn;
  TableHeader: TableHeader;
  TableRow: TableRow;
  Text: Text;
  TextArea: TextArea;
  TextAreaAutosize: TextAreaAutosize;
  TextBadge: TextBadge;
  TextInput: TextInput;
  TimeInput: TimeInput;
  Toast: Toast;
  ToastContainer: ToastContainer;
  ToastPosition: typeof ToastPosition;
  ToastType: typeof ToastType;
  TransitionGroup: TransitionGroup;
  TransitionStates: typeof TransitionStates;
  createToast: CreateToast;
  getAvatarSize: GetAvatarSize;
  getAvatarSpecs: GetAvatarSpecs;
  getBadgeCountString: GetBadgeCountString;
  getBadgeWidthForValue: GetBadgeWidthForValue;
  getButtonStyle: GetButtonStyle;
  popToast: PopToast;
  showToast: ShowToast;
  useFormContext: UseFormContext;
  useRadioGroup: UseRadioGroup;
  useRadioItem: UseRadioItem;
  useToastStore: UseToastStore;
}
