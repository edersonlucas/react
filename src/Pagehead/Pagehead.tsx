import styled from 'styled-components'
import {get} from '../constants'
import sx, {SxProp} from '../sx'
import {ComponentProps} from '../utils/types'

const Pagehead = styled.div<SxProp>`
  position: relative;
  padding-top: ${get('space.4')};
  padding-bottom: ${get('space.4')};
  margin-bottom: ${get('space.4')};
  border-bottom: 1px solid ${get('colors.border.default')};
  ${sx};
`

export type PageheadProps = ComponentProps<typeof Pagehead>
export default Pagehead
