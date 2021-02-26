import React from 'react'
import {FilterList} from '..'
import {render, behavesAsComponent, checkExports} from '../utils/testing'
import {COMMON} from '../constants'
import {render as HTMLRender, cleanup} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'
import 'babel-polyfill'
expect.extend(toHaveNoViolations)

describe('FilterList', () => {
  behavesAsComponent({Component: FilterList, systemPropArray: [COMMON]})

  checkExports('FilterList', {
    default: FilterList
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<FilterList>Hello</FilterList>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    cleanup()
  })

  it('renders a <ul>', () => {
    expect(render(<FilterList />).type).toEqual('ul')
  })
})