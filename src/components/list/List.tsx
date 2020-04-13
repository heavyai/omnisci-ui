import * as React from "react"
import cx from "classnames"
import { List as RMWCList } from "@rmwc/list"

/**
 * List properties.
 */
export interface IListProps {
  /** Content specified as children. */
  children?: [React.ReactNode]
  compact?: boolean
}

/**
 * List
 */
export const List = (props: IListProps) => (
  <RMWCList className={cx({compact: props.compact})} {...props}>{props.children}</RMWCList>
)

export default List
