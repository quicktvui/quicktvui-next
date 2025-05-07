import { run } from '@quicktvui/build'

async function main() {
  await run(
    'git remote set-url mirror https://github.com/quicktvui/quicktvui-next.git'
  )
  await run('git push mirror --all')
  await run('git push mirror --tags')
  console.log(`sync success!`)
}

main()
