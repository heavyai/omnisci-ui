import * as React from "react"
import cx from "classnames"
import { List as RMWCList } from "@rmwc/list"

/**
 * List properties.
 */
export interface IListProps {
  /** Content specified as children. */
  children?: [React.ReactNode]
  /** Reduce list item padding */
  compact?: boolean
  extraCompact?: boolean
}

/**
 * List
 */
export const List = (props: IListProps) => {
  const { compact, extraCompact, children, ...rest } = props
  const classNames = cx({
    compact: props.compact,
    "extra-compact": props.extraCompact
  })

  return (
    <RMWCList {...rest} className={classNames}>
      {props.children}
    </RMWCList>
  )
}

export default List
