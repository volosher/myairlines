import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount, render, shallow } from 'enzyme'

import { CurrencySwitcher } from '../CurrencySwitcher'

const initialState = {
  currency: { selected: 'USD' }
  ,
}

const mockStore = configureStore()
const store = mockStore(initialState)
const mockValue = initialState.currency.selected

test('renders the component', () => {
  const component = shallow(
    <Provider store={store}>
      <CurrencySwitcher />
      ,
    </Provider>,
  )
  expect(component).toMatchSnapshot()
})

test('select onChange have been called', () => {
  const component = mount(
    <Provider store={store}>
      <CurrencySwitcher />
      ,
    </Provider>,
  )

  const HandlerChange = jest.fn()

  component.setProps({
    children: (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
      <select
        onChange={HandlerChange}
        value={mockValue}
      />
    ),
  })

  const myElement = component.find('select')
  expect(myElement.props().value).toBe('USD')
  myElement.simulate('change', { preventDefault: jest.fn, target: { value: 'UKR' } })
  expect(HandlerChange).toHaveBeenCalled()
  expect(HandlerChange).toHaveBeenCalledTimes(1)
})

test('dispatch ', () => {
  const ChangeAction = () => ({ type: 'GET_CURRENCY', payload: 'UKR' })
  const HandlerChange = jest.fn(() => store.dispatch(ChangeAction()))
  const actions = store.getActions()
  const expectedPayload = { type: 'GET_CURRENCY', payload: 'UKR' }

  const component = mount(
    <Provider store={store}>
      <CurrencySwitcher />
      ,
    </Provider>,
  )

  component.setProps({
    children: (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
      <select
        onChange={HandlerChange}
        value={mockValue}
      />
    ),
  })

  const myElement = component.find('select')
  expect(myElement.props().value).toEqual('USD')
  myElement.simulate('change', { target: { value: 'UKR' } })
  expect(HandlerChange).toHaveBeenCalled()
  expect(actions).toEqual([expectedPayload])
  console.log('values = ', store.getState())
})

// const event = {
//     target: { value: 'UKR' },
//   }

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: jest.fn(() => ),
// }))

// expect(mySelect.props().value).toBe('USD')
// component.simulate('change', { preventDefault: jest.fn, target: { value: 'UKR' } })

// const mockValue = useSelector((state) => state.currency.selected)

// const event = {
//   target: { value: 'UKR' },
// } as React.ChangeEvent<HTMLInputElement>

// const HandlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//   initialState.currency.selected = e.target.value
// }

// const expectedAction = {
//   type: 'GET_CURRENCY',
// }

// const mockDispatchFn = jest.fn()
// const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')
// useDispatchSpy.mockReturnValue(mockDispatchFn)

// expect(mockDispatchFn).toHaveBeenCalledWith(expectedAction)
// console.log('time = ', mockDispatchFn.mock.calls.length)
// expect(mockDispatch.mock.calls[0][0]).toEqual({ type: 'GET_CURRENCY', payload: 'UKR' })

// const mockFn = jest.fn()
// const element = enzyme.shallow(
//   <CurrencySwitcher />,
// )
// const select = element.find('select')
// select.simulate('change', { preventDefault: jest.fn, target: { value: 'UKR' } })
// expect(select.props().value).toEqual('UKR')

// component.setProps({
//   children: (
//     <select
//       onChange={HandlerChange}
//     />
//   ),
// })

// myElement.setProps({ onChange: HandlerChange })
// myElement.simulate('change', event)
// expect(myElement.value).toEqual('UKR')
// console.log('event = ', event.target.value)
// expect(initialState.currency.selected).toEqual('UKR')

// const HandlerChange = jest.fn()

// const event = {
//   target: { value: 'UKR' },
// } as React.ChangeEvent<HTMLInputElement>

// const useDispatchSpy = jest.spyOn(redux, 'useDispatch')
// const mockDispatchFn = jest.fn()
// useDispatchSpy.mockReturnValue(mockDispatchFn)

// const myElement = component.find('select')
// expect(myElement.props().value).toBe('USD')
// component.setProps({
//   children: (
//     // eslint-disable-next-line jsx-a11y/control-has-associated-label
//     <select
//       onChange={HandlerChange}
//     />
//   ),
// })

// myElement.simulate('change', event)
// expect(mockDispatchFn).toHaveBeenCalledWith('GET_CURRENCY')

// expect(HandlerChange).toHaveBeenCalledWith('UKR')
// expect(initialState.currency.selected).toEqual('UKR')
// myElement.simulate('change', '', { value: ['val'] })
// expect(mockMyEventHandler).toHaveBeenCalledWith(['val'])

//   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
//   const myDispatch = jest.fn()
//   useDispatchMock.mockReturnValue(myDispatch)
//   expect(myDispatch).not.toHaveBeenCalled()

//   const component = shallow(
//     <CurrencySwitcher />,
//   )
// //   const mockMyEventHandler = jest.fn()
// })

// test('OnChange function', () => {
//   //   const event = {
//   //     target: { value: 'the-value' },
//   //   } as React.ChangeEvent<HTMLInputElement>

//   const component = shallow(
//     // <Provider store={store}>
//     <CurrencySwitcher />,
//     // </Provider>,
//   )
//   const mockMyEventHandler = jest.fn()

//   component.find('CurrencySwitcher').dive().find('select').setProps({ onChange: mockMyEventHandler })
//   component.find('CurrencySwitcher').dive().find('select').simulate('change', '', { value: ['val'] })
//   expect(mockMyEventHandler).toHaveBeenCalledWith(['val'])
