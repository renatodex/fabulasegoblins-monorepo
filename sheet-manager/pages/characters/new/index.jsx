import ScreenSlideProvider from '../../../src/contexts/screen_slide_context'
import Role from './role'
import Overview from './overview'

export default function Index () {
  return (
    <ScreenSlideProvider>
      <Overview />
      <Role />
    </ScreenSlideProvider>
  )
}
