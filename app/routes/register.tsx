import Header from '~/components/Header'
import HeaderBackButton from '~/components/HeaderBackButton'
import { useGoBack } from '~/hooks/useGoBack'

const Resister = () => {
  const goBack = useGoBack()
  return (
    <div>
      <Header title="회원가입" headerBack={<HeaderBackButton onClick={goBack} />} />
    </div>
  )
}

export default Resister
