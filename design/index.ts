import type { Anchor } from "./components/Anchor";
import type { Backdrop, BackdropStyles } from "./components/Backdrop";
import type { Breadcrumbs } from "./components/Breadcrumbs";
import type {
  Button,
  ButtonColors,
  ButtonLink,
  ButtonLooks,
  ButtonSizes,
  GetButtonStyle,
} from "./components/Button/Button";
import type { ButtonGroup } from "./components/ButtonGroup";
import type { Card, CardTypes } from "./components/Card";
import type { Checkbox } from "./components/Checkbox";
import type { Clickable } from "./components/Clickable/Clickable";
import type { EmptyState, EmptyStateImage, EmptyStateText } from "./components/EmptyState";
import type { FocusRingManager } from "./components/Focus/FocusRingManager";
import type {
  FormContext,
  FormContextProvider,
  UseFormContext,
} from "./components/Form/FormContext";
import type { FormDivider } from "./components/Form/FormDivider";
import type { FormErrorBlock, FormErrorBlockColors } from "./components/Form/FormErrorBlock";
import type { FormItem } from "./components/Form/FormItem";
import type {
  FormNotice,
  FormNoticeImagePositions,
  FormNoticeTypes,
} from "./components/Form/FormNotice";
import type { FormSection } from "./components/Form/FormSection";
import type { FormSwitch } from "./components/Form/FormSwitch";
import type { FormText, FormTextTypes } from "./components/Form/FormText";
import type { FormTitle, FormTitleTags } from "./components/Form/FormTitle";
import type { HiddenVisually } from "./components/HiddenVisually";
import type { Interactive } from "./components/Interactive";
import type {
  Notice,
  NoticeButton,
  NoticeButtonAnchor,
  NoticeCloseButton,
  NoticeColors,
  PrimaryCTANoticeButton,
} from "./components/Notice";
import type { NumberInputStepper } from "./components/NumberInputStepper";
import type { NameWithRole, NameWithRoleAnchor } from "./components/Role/NameWithRole";
import type { RoleCircle, RoleDot } from "./components/Role/RoleDot";
import type { Shakeable } from "./components/Shakeable";
import type { Shaker } from "./components/Shaker";
import type { Spacer } from "./components/Spacer";
import type { Spinner, SpinnerTypes } from "./components/Spinner";
import type { Switch } from "./components/Switch";
import type { TextArea } from "./components/TextArea/TextArea";
import type { InputError, TextInput } from "./components/TextInput";

export * from "./components/Anchor";
export * from "./components/Backdrop";
export * from "./components/Breadcrumbs";
export * from "./components/Button/Button";
export * from "./components/ButtonGroup";
export * from "./components/Card";
export * from "./components/Checkbox";
export * from "./components/EmptyState";
export * from "./components/Focus/FocusRing";
export * from "./components/Focus/FocusRingManager";
export * from "./components/Form/FormContext";
export * from "./components/Form/FormDivider";
export * from "./components/Form/FormErrorBlock";
export * from "./components/Form/FormItem";
export * from "./components/Form/FormNotice";
export * from "./components/Form/FormSection";
export * from "./components/Form/FormSwitch";
export * from "./components/Form/FormText";
export * from "./components/Form/FormTitle";
export * from "./components/HiddenVisually";
export * from "./components/Interactive";
export * from "./components/Notice";
export * from "./components/NumberInputStepper";
export * from "./components/Role/NameWithRole";
export * from "./components/Role/RoleDot";
export * from "./components/Shakeable";
export * from "./components/Shaker";
export * from "./components/Spacer";
export * from "./components/Spinner";
export * from "./components/Switch";
export * from "./components/TextArea/TextArea";
export * from "./components/TextInput";
export * from "./config";

export interface Design {
  Anchor: Anchor;
  Backdrop: Backdrop;
  BackdropStyles: BackdropStyles;
  Breadcrumbs: Breadcrumbs;
  Button: Button;
  ButtonColors: ButtonColors;
  ButtonGroup: ButtonGroup;
  ButtonLink: ButtonLink;
  ButtonLooks: ButtonLooks;
  ButtonSizes: ButtonSizes;
  Card: Card;
  CardTypes: CardTypes;
  Checkbox: Checkbox;
  Clickable: Clickable;
  EmptyState: EmptyState;
  EmptyStateImage: EmptyStateImage;
  EmptyStateText: EmptyStateText;
  FocusRingManager: FocusRingManager;
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
  HiddenVisually: HiddenVisually;
  InputError: InputError;
  Interactive: Interactive;
  NameWithRole: NameWithRole;
  NameWithRoleAnchor: NameWithRoleAnchor;
  Notice: Notice;
  NoticeButton: NoticeButton;
  NoticeButtonAnchor: NoticeButtonAnchor;
  NoticeCloseButton: NoticeCloseButton;
  NoticeColors: NoticeColors;
  NumberInputStepper: NumberInputStepper;
  PrimaryCTANoticeButton: PrimaryCTANoticeButton;
  RoleCircle: RoleCircle;
  RoleDot: RoleDot;
  Shakeable: Shakeable;
  Shaker: Shaker;
  Spacer: Spacer;
  Spinner: Spinner;
  SpinnerTypes: SpinnerTypes;
  Switch: Switch;
  TextArea: TextArea;
  TextInput: TextInput;
  getButtonStyle: GetButtonStyle;
  useFormContext: UseFormContext;
}
