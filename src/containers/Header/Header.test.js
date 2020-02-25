import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './Header'
import { generateGrid } from '../../store/actions/rootActions'
import GenerateButton from '../../components/Header/GenerateButton'

jest.mock('../../store/actions/rootActions', () => ({
  generateGrid: jest.fn().mockReturnValue({ type: 'test' }),
}))

const storeMock = createStore(state => state)

const createTestInstance = () =>
  renderer.create(
    <Provider store={storeMock}>
      <Header />
    </Provider>
  ).root

describe('Header', () => {
  it('should pass action to reducer with instruction to create grid 10 by 10', () => {
    const instance = createTestInstance()

    const generateButton = instance.findByType(GenerateButton)
    generateButton.props.onClick()

    expect(generateGrid).toBeCalledWith(10, 10)
  })
})
