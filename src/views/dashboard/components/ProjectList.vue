<template>
  <div class="project-list">
    <div 
      v-for="(project, index) in projects" 
      :key="index" 
      class="project-item"
    >
      <div class="project-icon" :style="{ backgroundColor: project.iconColor }">
        <i :class="project.icon"></i>
      </div>
      <div class="project-info">
        <div class="project-header">
          <h3 class="project-name">{{ project.name }}</h3>
          <span class="project-status" :class="project.status.toLowerCase()">
            {{ project.status }}
          </span>
        </div>
        <p class="project-rate">{{ project.rate }}/hour</p>
      </div>
      <div class="project-actions">
        <button class="dropdown-btn">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

interface Project {
  name: string;
  status: string;
  rate: string;
  icon: string;
  iconColor: string;
}

export default {
  name: 'ProjectList',
  setup() {
    const projects = ref<Project[]>([
      {
        name: 'Copyright Project',
        status: 'Not Paid',
        rate: '$10',
        icon: 'fas fa-copyright',
        iconColor: '#3b82f6'
      },
      {
        name: 'Web Design Project',
        status: 'Paid',
        rate: '$10',
        icon: 'fas fa-code',
        iconColor: '#10b981'
      }
    ]);

    return {
      projects
    };
  }
};
</script>

<style scoped>
.project-list {
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 600px;
}

.project-item {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-item:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.project-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 20px;
}

.project-info {
  flex: 1;
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.project-name {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  margin-right: 12px;
}

.project-status {
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: capitalize;
}

.project-status.paid {
  background-color: #10b981;
  color: white;
}

.project-status.not-paid {
  background-color: #f3f4f6;
  color: #6b7280;
}

.project-rate {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.project-actions {
  margin-left: 16px;
}

.dropdown-btn {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.dropdown-btn:hover {
  background-color: #f3f4f6;
  color: #6b7280;
}

.dropdown-btn i {
  font-size: 12px;
}

/* Responsive */
@media (max-width: 480px) {
  .project-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-icon {
    margin-bottom: 12px;
  }
  
  .project-actions {
    margin-left: 0;
    margin-top: 12px;
    align-self: flex-end;
  }
}
</style>