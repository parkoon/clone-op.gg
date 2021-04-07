import { FC, Fragment, JSXElementConstructor, PropsWithChildren } from 'react'

type Components =
  | JSXElementConstructor<PropsWithChildren<any>>
  | [JSXElementConstructor<PropsWithChildren<any>>, { [key: string]: any }]

interface Props {
  providers: Components[]
}

const Compose: FC<Props> = ({ providers, children }) => (
  <Fragment>
    {providers.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr) ? [...curr] : [curr, {}]
      return <Provider {...props}>{acc}</Provider>
    }, children)}
  </Fragment>
)

export default Compose
