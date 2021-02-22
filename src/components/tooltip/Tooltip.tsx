import * as React from "react"
import { Tooltip as RMWCTooltip } from "@rmwc/tooltip"

const TOOLTIP_ENTER_DELAY = 500

type TooltipProps = React.ComponentProps<typeof RMWCTooltip>

/**
 * Tooltip
 */
export const Tooltip = (props: TooltipProps) => (
  <RMWCTooltip enterDelay={TOOLTIP_ENTER_DELAY} {...props}>
    {props.children}
  </RMWCTooltip>
)

export default Tooltip
