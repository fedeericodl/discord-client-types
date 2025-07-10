import type { AccessibilityAnnouncer } from "./components/AccessibilityAnnouncer/web/AccessibilityAnnouncer";
import type { LOW_SATURATION_THRESHOLD } from "./components/AccessibilityPreferencesContext/AccessibilityConstants";
import type { AccessibilityPreferencesContext } from "./components/AccessibilityPreferencesContext/AccessibilityPreferencesContext";
import type { Anchor } from "./components/Anchor/web/Anchor";
import type { Backdrop, BackdropStyles } from "./components/Backdrop/web/Backdrop";
import type {
  BadgeShapes,
  CircleBadge,
  GetBadgeCountString,
  GetBadgeWidthForValue,
  IconBadge,
  NumberBadge,
  PremiumBadge,
  TextBadge,
} from "./components/Badges/web/Badges";
import type {
  BlockInteractions,
  BlockInteractionsContext,
} from "./components/BlockInteractions/BlockInteractions";
import type { Breadcrumbs } from "./components/Breadcrumbs/web/Breadcrumbs";
import type {
  Button,
  ButtonColors,
  ButtonLink,
  ButtonLooks,
  ButtonSizes,
  GetButtonStyle,
} from "./components/Button/web/Button";
import type {
  CircleIconButton,
  CircleIconButtonColors,
  CircleIconButtonSizes,
} from "./components/Button/web/CircleIconButton";
import type { Shine, ShineSizes, ShinyButton } from "./components/Button/web/ShinyButton";
import type { ButtonGroup } from "./components/ButtonGroup/web/ButtonGroup";
import type { CalendarPicker } from "./components/CalendarPicker/web/CalendarPicker";
import type { Card, CardTypes } from "./components/Card/web/Card";
import type { Checkbox, CheckboxIndicator } from "./components/Checkbox/web/Checkbox";
import type { Clickable } from "./components/Clickable/web/Clickable";
import type { ClickableContainer } from "./components/Clickable/web/ClickableContainer";
import type { Collapsible } from "./components/Collapsible/web/Collapsible";
import type {
  ColorPicker,
  ColorPickerCustomButton,
  ColorPickerDefaultButton,
  CustomColorPicker,
} from "./components/ColorPicker/web/ColorPicker";
import type { ColorPickerControl } from "./components/ColorPicker/web/ColorPickerControl";
import type { CopyInput, CopyInputModes } from "./components/CopyInput/web/CopyInput";
import type { DateInput } from "./components/DateInput/web/DateInput";
import type {
  EmptyState,
  EmptyStateImage,
  EmptyStateText,
} from "./components/EmptyState/web/EmptyState";
import type {
  FormContext,
  FormContextProvider,
  UseFormContext,
} from "./components/Forms/web/FormContext";
import type { FormDivider } from "./components/Forms/web/FormDivider";
import type { FormErrorBlock, FormErrorBlockColors } from "./components/Forms/web/FormErrorBlock";
import type { FormItem } from "./components/Forms/web/FormItem";
import type {
  FormNotice,
  FormNoticeImagePositions,
  FormNoticeTypes,
} from "./components/Forms/web/FormNotice";
import type { FormSection } from "./components/Forms/web/FormSection";
import type { FormSwitch } from "./components/Forms/web/FormSwitch";
import type { FormText, FormTextTypes } from "./components/Forms/web/FormText";
import type { FormTitle, FormTitleTags } from "./components/Forms/web/FormTitle";
import type { HelpMessage, HelpMessageTypes } from "./components/HelpMessage/web/HelpMessage";
import type { HiddenVisually } from "./components/HiddenVisually/web/HiddenVisually";
import type { Interactive } from "./components/Interactive/web/Interactive";
import type { KeyCombo, PRETTY_KEYS } from "./components/KeyCombo/web/KeyCombo";
import type { NavItem } from "./components/NavItem/web/NavItem";
import type {
  Notice,
  NoticeButton,
  NoticeButtonAnchor,
  NoticeCloseButton,
  NoticeColors,
  PrimaryCTANoticeButton,
} from "./components/Notice/web/Notice";
import type { NumberInputStepper } from "./components/NumberInputStepper/web/NumberInputStepper";
import type { Paginator } from "./components/Paginator/web/Paginator";
import type { Progress } from "./components/Progress/web/Progress";
import type { ProgressCircle } from "./components/Progress/web/ProgressCircle";
import type { StackedProgress } from "./components/Progress/web/StackedProgress";
import type {
  RadioGroup,
  RadioIndicator,
  UseRadioGroup,
  UseRadioItem,
} from "./components/RadioGroup/web/RadioGroup";
import type { SearchBar } from "./components/SearchBar/web/SearchBar";
import type { SearchBox } from "./components/SearchBox/web/SearchBox";
import type { SegmentedControl } from "./components/SegmentedControl/web/SegmentedControl";
import type { Shakeable } from "./components/Shakeable/web/Shakeable";
import type { Shaker } from "./components/Shaker/web/Shaker";
import type { Slider } from "./components/Slider/web/Slider";
import type { Spacer } from "./components/Spacer/web/Spacer";
import type { Spinner, SpinnerTypes } from "./components/Spinner/web/Spinner";
import type { Switch } from "./components/Switch/web/Switch";
import type { Text } from "./components/Text/web/Text";
import type { TextArea } from "./components/TextInput/web/TextArea";
import type { TextAreaAutosize } from "./components/TextInput/web/TextAreaAutosize";
import type { InputError, TextInput } from "./components/TextInput/web/TextInput";
import type { TimeInput } from "./components/TimeInput/web/TimeInput";
import type { CreateToast, Toast } from "./components/Toast/web/Toast";
import type { PopToast, ShowToast, UseToastStore } from "./components/Toast/web/ToastAPI";
import type { ToastPosition, ToastType } from "./components/Toast/web/ToastConstants";
import type { ToastContainer } from "./components/Toast/web/ToastContainer";
import type {
  TransitionGroup,
  TransitionStates,
} from "./components/TransitionGroup/TransitionGroup";

export * from "./components/AccessibilityAnnouncer/web/AccessibilityAnnouncer";
export * from "./components/AccessibilityPreferencesContext/AccessibilityConstants";
export * from "./components/AccessibilityPreferencesContext/AccessibilityPreferencesContext";
export * from "./components/Anchor/web/Anchor";
export * from "./components/Backdrop/web/Backdrop";
export * from "./components/Badges/web/Badges";
export * from "./components/BlockInteractions/BlockInteractions";
export * from "./components/Breadcrumbs/web/Breadcrumbs";
export * from "./components/Button/web/Button";
export * from "./components/Button/web/CircleIconButton";
export * from "./components/ButtonGroup/web/ButtonGroup";
export * from "./components/CalendarPicker/web/CalendarPicker";
export * from "./components/Card/web/Card";
export * from "./components/Checkbox/web/Checkbox";
export * from "./components/Clickable/web/Clickable";
export * from "./components/Clickable/web/ClickableContainer";
export * from "./components/Collapsible/web/Collapsible";
export * from "./components/ColorPicker/web/ColorPicker";
export * from "./components/ColorPicker/web/ColorPickerControl";
export * from "./components/CopyInput/web/CopyInput";
export * from "./components/DateInput/web/DateInput";
export * from "./components/EmptyState/web/EmptyState";
export * from "./components/Forms/web/FormContext";
export * from "./components/Forms/web/FormDivider";
export * from "./components/Forms/web/FormErrorBlock";
export * from "./components/Forms/web/FormItem";
export * from "./components/Forms/web/FormLabel";
export * from "./components/Forms/web/FormNotice";
export * from "./components/Forms/web/FormSection";
export * from "./components/Forms/web/FormSwitch";
export * from "./components/Forms/web/FormText";
export * from "./components/Forms/web/FormTitle";
export * from "./components/HelpMessage/web/HelpMessage";
export * from "./components/HiddenVisually/web/HiddenVisually";
export * from "./components/Interactive/web/Interactive";
export * from "./components/KeyCombo/web/KeyCombo";
export * from "./components/NavItem/web/NavItem";
export * from "./components/Notice/web/Notice";
export * from "./components/NumberInputStepper/web/NumberInputStepper";
export * from "./components/Paginator/web/PaginationController";
export * from "./components/Paginator/web/Paginator";
export * from "./components/Progress/web/Progress";
export * from "./components/Progress/web/ProgressCircle";
export * from "./components/Progress/web/StackedProgress";
export * from "./components/RadioGroup/web/RadioGroup";
export * from "./components/SearchBar/web/SearchBar";
export * from "./components/SearchBox/web/SearchBox";
export * from "./components/SegmentedControl/web/SegmentedControl";
export * from "./components/Shakeable/web/Shakeable";
export * from "./components/Shaker/web/Shaker";
export * from "./components/Slider/web/Slider";
export * from "./components/Spacer/web/Spacer";
export * from "./components/Spinner/web/Spinner";
export * from "./components/Switch/web/Switch";
export * from "./components/Table/web/Table";
export * from "./components/Text/web/Text";
export * from "./components/TextInput/web/TextArea";
export * from "./components/TextInput/web/TextAreaAutosize";
export * from "./components/TextInput/web/TextInput";
export * from "./components/TimeInput/web/TimeInput";
export * from "./components/Toast/web/Toast";
export * from "./components/Toast/web/ToastAPI";
export * from "./components/Toast/web/ToastConstants";
export * from "./components/Toast/web/ToastContainer";
export * from "./components/TransitionGroup/TransitionGroup";
export * from "./config";

/**
 * Discord's design system.
 * This is a collection of components and utilities that are used to build Discord's UI.
 */
export interface Design {
  AccessibilityAnnouncer: AccessibilityAnnouncer;
  AccessibilityPreferencesContext: AccessibilityPreferencesContext;
  Anchor: Anchor;
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
  ColorPicker: ColorPicker;
  ColorPickerControl: ColorPickerControl;
  ColorPickerCustomButton: ColorPickerCustomButton;
  ColorPickerDefaultButton: ColorPickerDefaultButton;
  CopyInput: CopyInput;
  CopyInputModes: CopyInputModes;
  CustomColorPicker: CustomColorPicker;
  DateInput: DateInput;
  EmptyState: EmptyState;
  EmptyStateImage: EmptyStateImage;
  EmptyStateText: EmptyStateText;
  FormContext: FormContext;
  FormContextProvider: FormContextProvider;
  FormDivider: FormDivider;
  FormErrorBlock: FormErrorBlock;
  FormErrorBlockColors: FormErrorBlockColors;
  FormItem: FormItem;
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
  LOW_SATURATION_THRESHOLD: LOW_SATURATION_THRESHOLD;
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
  SearchBar: SearchBar;
  SearchBox: SearchBox;
  SegmentedControl: SegmentedControl;
  Shakeable: Shakeable;
  Shaker: Shaker;
  Shine: Shine;
  ShineSizes: ShineSizes;
  ShinyButton: ShinyButton;
  Slider: Slider;
  Spacer: Spacer;
  Spinner: Spinner;
  SpinnerTypes: SpinnerTypes;
  StackedProgress: StackedProgress;
  Switch: Switch;
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
