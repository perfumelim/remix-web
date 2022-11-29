import AuthForm from '~/components/AuthForm'
import Header from '~/components/Header'
import HeaderBackButton from '~/components/HeaderBackButton'
import { useGoBack } from '~/hooks/useGoBack'
import { json, type ActionFunction } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const username = form.get('username')
  const password = form.get('password')
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return json({
    text: 'hello world',
  })
}

const Resister = () => {
  const goBack = useGoBack()
  return (
    <div className="h-full">
      <Header title="회원가입" headerBack={<HeaderBackButton onClick={goBack} />} />
      <AuthForm mode="register" />
    </div>
  )
}

export default Resister
