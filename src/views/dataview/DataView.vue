<template>
  <div class="data-view">
    <!-- Header -->
    <div class="header">
      <h1>Image Gallery</h1>
      <button class="upload-btn" @click="openUploadModal">
        <i class="fas fa-upload"></i> Upload Image
      </button>
    </div>
    
    <!-- Image Grid -->
    <div class="image-grid">
      <div class="image-card" v-for="(image, index) in images" :key="index">
        <div class="image-container">
          <img :src="image.url" :alt="image.name" @click="openPreviewModal(image)" />
          <div class="image-overlay">
            <button class="overlay-btn" @click.stop="editImage(image)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="overlay-btn delete" @click.stop="deleteImage(index)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="image-info">
          <h3>{{ image.name }}</h3>
          <p>{{ image.size }}</p>
        </div>
      </div>
    </div>
    
    <!-- Upload Modal -->
    <div class="modal" v-if="showUploadModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Upload Image</h2>
          <button class="close-btn" @click="showUploadModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <input type="file" ref="fileInput" accept="image/*" @change="handleFileUpload" />
          <div class="preview-container" v-if="previewImage">
            <img :src="previewImage" alt="Preview" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showUploadModal = false">Cancel</button>
          <button class="confirm-btn" @click="uploadImage" :disabled="!previewImage">Upload</button>
        </div>
      </div>
    </div>
    
    <!-- Preview Modal -->
    <div class="modal" v-if="showPreviewModal">
      <div class="modal-content preview-modal">
        <div class="modal-header">
          <h2>{{ selectedImage?.name }}</h2>
          <button class="close-btn" @click="showPreviewModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <img :src="selectedImage?.url" :alt="selectedImage?.name" class="preview-image" />
        </div>
        <div class="modal-footer">
          <button class="download-btn" @click="downloadImage(selectedImage)">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';

interface Image {
  name: string;
  url: string;
  size: string;
  type: string;
}

export default {
  name: 'DataView',
  setup() {
    // State
    const showUploadModal = ref(false);
    const showPreviewModal = ref(false);
    const fileInput = ref<HTMLInputElement | null>(null);
    const previewImage = ref<string | null>(null);
    const selectedImage = ref<Image | null>(null);
    
    // Mock images data
    const images = reactive<Image[]>([
      {
        name: 'Mountain Landscape',
        url: 'https://picsum.photos/seed/mountain/400/300',
        size: '1.2 MB',
        type: 'jpg'
      },
      {
        name: 'Ocean Waves',
        url: 'https://picsum.photos/seed/ocean/400/300',
        size: '850 KB',
        type: 'jpg'
      },
      {
        name: 'Forest Path',
        url: 'https://picsum.photos/seed/forest/400/300',
        size: '920 KB',
        type: 'jpg'
      },
      {
        name: 'City Skyline',
        url: 'https://picsum.photos/seed/city/400/300',
        size: '1.5 MB',
        type: 'jpg'
      },
      {
        name: 'Desert Sunset',
        url: 'https://picsum.photos/seed/desert/400/300',
        size: '780 KB',
        type: 'jpg'
      },
      {
        name: 'Lake Reflections',
        url: 'https://picsum.photos/seed/lake/400/300',
        size: '1.1 MB',
        type: 'jpg'
      }
    ]);
    
    // Methods
    const openUploadModal = () => {
      showUploadModal.value = true;
      previewImage.value = null;
    };
    
    const openPreviewModal = (image: Image) => {
      selectedImage.value = image;
      showPreviewModal.value = true;
    };
    
    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
          previewImage.value = e.target?.result as string;
        };
        
        reader.readAsDataURL(file);
      }
    };
    
    const uploadImage = () => {
      if (previewImage.value) {
        // In a real app, you would upload the image to a server
        // For this example, we'll just add it to the local array
        const newImage: Image = {
          name: `Image ${images.length + 1}`,
          url: previewImage.value,
          size: '1.0 MB',
          type: 'jpg'
        };
        
        images.push(newImage);
        showUploadModal.value = false;
        previewImage.value = null;
        
        // Reset file input
        if (fileInput.value) {
          fileInput.value.value = '';
        }
      }
    };
    
    const editImage = (image: Image) => {
      // In a real app, you would open an edit modal
      console.log('Edit image:', image);
    };
    
    const deleteImage = (index: number) => {
      if (confirm('Are you sure you want to delete this image?')) {
        images.splice(index, 1);
      }
    };
    
    const downloadImage = (image: Image | null) => {
      if (image) {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = image.name;
        link.click();
      }
    };
    
    return {
      showUploadModal,
      showPreviewModal,
      fileInput,
      previewImage,
      selectedImage,
      images,
      openUploadModal,
      openPreviewModal,
      handleFileUpload,
      uploadImage,
      editImage,
      deleteImage,
      downloadImage
    };
  }
};
</script>

<style scoped>
.data-view {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.upload-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.upload-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.image-container:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.overlay-btn {
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.overlay-btn:hover {
  transform: scale(1.1);
}

.overlay-btn.delete {
  background: #ef4444;
  color: white;
}

.image-info {
  padding: 15px;
}

.image-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #333;
}

.image-info p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.preview-modal {
  max-width: 800px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.modal-header h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.preview-container {
  margin-top: 20px;
  text-align: center;
}

.preview-container img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
}

.preview-image {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 8px;
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-btn {
  background: #f0f0f0;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: #e0e0e0;
}

.confirm-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.confirm-btn:hover:not(:disabled) {
  background: #2563eb;
}

.confirm-btn:disabled {
  background: #93c5fd;
  cursor: not-allowed;
}

.download-btn {
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: #059669;
}

/* Responsive */
@media (max-width: 768px) {
  .data-view {
    padding: 10px;
  }
  
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .modal-content {
    width: 95%;
  }
}
</style>