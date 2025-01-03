async function fetchProjects() {
    const username = 'GlennAzx';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const projectsGrid = document.getElementById('projects-grid');
    
    repos
        .filter(repo => !repo.fork && !repo.private)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .forEach(repo => {
            const projectCard = `
                <div class="project-card bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all hover:-translate-y-2">
                    <h3 class="text-xl font-bold mb-2 dark:text-white">${repo.name}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${repo.description || 'No description available'}</p>
                    <div class="flex items-center space-x-4">
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            <i class="fas fa-code-branch mr-1"></i>${repo.language || 'Various'}
                        </span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            <i class="fas fa-star mr-1"></i>${repo.stargazers_count}
                        </span>
                        <a href="${repo.html_url}" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                            View Project <i class="fas fa-external-link-alt ml-1"></i>
                        </a>
                    </div>
                </div>
            `;
            projectsGrid.innerHTML += projectCard;
        });
}

document.addEventListener('DOMContentLoaded', fetchProjects);