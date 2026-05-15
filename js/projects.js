/*Para agregar un nuevo proyecto, simplemente copia un objeto
del array y modifica sus valores. Se renderiza automáticamente.*/

const projects = [
{
title: "Sistema de Gestión Empresarial",
description: "Plataforma web fullstack para la administración de procesos internos, incluyendo módulos de inventario, ventas y reportes en tiempo real.",
tags: ["React", "Node.js", "PostgreSQL", "Docker"],
github: "https://github.com/tu-usuario/proyecto-1",
demo: "https://proyecto-1.netlify.app"
},
{
title: "App de Agentes Autónomos con IA",
description: "Aplicación que implementa agentes autónomos utilizando APIs de OpenAI y Gemini para automatizar flujos de trabajo y generar análisis inteligentes.",
tags: ["JavaScript", "OpenAI API", "Express.js", "MongoDB"],
github: "https://github.com/tu-usuario/proyecto-2",
demo: "https://proyecto-2.netlify.app"
},
{
title: "E-Commerce Platform",
description: "Tienda en línea con carrito de compras, pasarela de pagos, panel administrativo y sistema de notificaciones en tiempo real.",
tags: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
github: "https://github.com/tu-usuario/proyecto-3",
demo: "https://proyecto-3.netlify.app"
},
{
title: "Dashboard de Analytics",
description: "Panel de control interactivo para visualización de métricas y KPIs, con gráficos dinámicos y exportación de reportes.",
tags: ["Angular", "Spring Boot", "SQL Server", "Docker"],
github: "https://github.com/tu-usuario/proyecto-4",
demo: null // Si no hay demo, pon null
},
{
title: "App Móvil de Productividad",
description: "Aplicación móvil multiplataforma para gestión de tareas y seguimiento de hábitos con sincronización en la nube.",
tags: ["React Native", "Node.js", "MongoDB"],
github: "https://github.com/tu-usuario/proyecto-5",
demo: null
},
{
title: "API RESTful de Microservicios",
description: "Arquitectura de microservicios con autenticación JWT, rate limiting, documentación Swagger y despliegue con CI/CD.",
tags: ["Express.js", "Docker", "PostgreSQL", "CI/CD"],
github: "https://github.com/tu-usuario/proyecto-6",
demo: "https://proyecto-6.netlify.app"
}
];

/* ============================================================
RENDER FUNCTION - No necesitas modificar esto
============================================================ */
function renderProjects() {
const grid = document.getElementById('projects-grid');
if (!grid) return;

grid.innerHTML = projects.map(project => `
<article class="project-card reveal">
<div class="project-card-header">
<i class="fas fa-folder-open"></i>
<div class="project-card-links">
${project.github ? `
<a href="${project.github}" target="_blank" aria-label="Ver código en GitHub" title="GitHub">
<i class="fab fa-github"></i>
</a>
` : ''}
${project.demo ? `
<a href="${project.demo}" target="_blank" aria-label="Ver demo en vivo" title="Demo">
<i class="fas fa-external-link-alt"></i>
</a>
` : ''}
</div>
</div>
<h3>${project.title}</h3>
<p>${project.description}</p>
<div class="project-card-tags">
${project.tags.map(tag => `<span>${tag}</span>`).join(' · ')}
</div>
</article>
`).join('');
}

// Render on DOM load
document.addEventListener('DOMContentLoaded', renderProjects);