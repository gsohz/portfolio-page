import { useGitHubAutomatedRepos, StackIcons } from 'github-automated-repos'
import './Project.css'

export default function Project() {
  const projects = useGitHubAutomatedRepos('gsohz', 'pinned')

  return (
    <>
      {projects.map(project => {
        return (
          <div className="card card-project" key={project.id}>
            <a href={project.html_url}>
              <h2>{project.name}</h2>
            </a>
            <p>{project.description}</p>
            <div className="project-icons">
              {project.topics.map((icon, index) => {
                if (!icon.includes('pinned'))
                  return (
                    <div title={icon}>
                      <StackIcons
                        key={icon}
                        className="stack-icon"
                        itemTopics={icon}
                      />
                    </div>
                  )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
