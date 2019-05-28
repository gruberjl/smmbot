import simpleGit from 'simple-git'

export const autoDeploy = async () => {
  const git = simpleGit(__dirname)

  git.diffSummary((err, r) => {
    if (r.files.length > 0) {
      console.log('pull new')
      console.log(r)
    } else {
      console.log('do nothing')
    }
  })
}
