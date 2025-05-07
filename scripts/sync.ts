import { spawnSync } from 'child_process'

async function main() {
  function run(command, args) {
    const result = spawnSync(command, args, { stdio: 'inherit' })
    if (result.status !== 0) {
      console.error(`❌ Failed: ${command} ${args.join(' ')}`)
      process.exit(result.status)
    }
  }

  const mirrorUrl = 'https://github.com/quicktvui/quicktvui-next.git'
  const check = spawnSync('git', ['remote'], { encoding: 'utf-8' })
  if (!check.stdout.includes('mirror')) {
    run('git', ['remote', 'add', 'mirror', mirrorUrl])
  } else {
    run('git', ['remote', 'set-url', 'mirror', mirrorUrl])
  }

  run('git', ['push', 'mirror', '--all'])
  run('git', ['push', 'mirror', '--tags'])

  console.log(`✅ 仓库同步完成：当前项目 => ${mirrorUrl}`)
}

main()
