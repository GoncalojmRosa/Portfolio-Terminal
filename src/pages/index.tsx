import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import { ReactTerminal } from 'react-terminal-component'
import {
  EmulatorState,
  FileSystem,
  History,
  OutputFactory,
  defaultCommandMapping,
  CommandMapping,
  Outputs,
  Emulator,
} from 'javascript-terminal'

import ReactWindow from 'reactjs-windows'
import 'reactjs-windows/dist/index.css'
import { useState } from 'react'

const Home: NextPage = () => {
  const emulator = new Emulator()

  const customState = EmulatorState.create({
    fs: FileSystem.create({
      '/Gonçalo_Rosa': {},
      '/Gonçalo_Rosa/README': { content: 'This is a text file' },
      '/Gonçalo_Rosa/nested/directory': {},
      '/Gonçalo_Rosa/nested/directory/file': {
        content: 'End of nested directory!',
      },
    }),

    commandMapping: CommandMapping.create({
      ...defaultCommandMapping,
      print: {
        function: (state: any, opts: any) => {
          const input = opts.join(' ')

          return {
            output: OutputFactory.makeTextOutput(
              <ReactWindow title="Test Window">
                <p>{input}</p>
              </ReactWindow>
            ),
          }
        },
        optDef: {},
      },
      help: {
        function: (state: any, opts: any) => {
          const input = newEmulatorState.getCommandMapping()
          // console.log(input.map(a: => console.log(a)))
          return {
            output: OutputFactory.getCommandMapping(),
          }
        },
        optDef: {},
      },
    }),
  })
  const defaultOutputs = customState.getOutputs()
  const newOutputs = Outputs.addRecord(
    defaultOutputs,
    OutputFactory.makeTextOutput(`To open PDF Files use evince or xdg-open.`)
  )
  const emulatorState = customState.setOutputs(newOutputs)

  const defaultHistory = customState.getHistory()
  const newHistory = History.recordCommand(defaultHistory, 'history')
  customState.setHistory(newHistory)

  const commandStr = 'ls'
  const plugins: any = []

  const newEmulatorState = emulator.execute(emulatorState, commandStr, plugins)

  return (
    <div>
      <ReactTerminal
        emulatorState={newEmulatorState}
        promptSymbol=">‍"
        theme={{
          background: '#141313',
          promptSymbolColor: '#6effe6',
          commandColor: '#fcfcfc',
          outputColor: '#fcfcfc',
          errorOutputColor: '#ff89bd',
          fontSize: '1.1rem',
          spacing: '1%',
          fontFamily: 'monospace',
          width: '100%',
          height: '100vh',
        }}
        clickToFocus={true}
      />
    </div>
  )
}

export default Home
