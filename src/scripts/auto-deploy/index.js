import simpleGit from 'simple-git'

export const autoDeploy = async () => {
  const git = simpleGit(__dirname)
  git.diffSummary((err, r) => {
    console.log(err)
    console.log(r)
  })
}
