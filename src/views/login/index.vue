<template>
  <div class="login-container">
    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
      <div class="floating-element element-4"></div>
      <div class="floating-element element-5"></div>
    </div>

    <!-- 登录卡片 -->
    <div class="login-card">
      <!-- 品牌区域 -->
      <div class="brand-section">
        <div class="brand-icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="8 4"
            />
            <path
              d="M20 32h24M32 20v24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h1 class="brand-title">阅读者</h1>
        <p class="brand-subtitle">在文字的世界里，遇见更好的自己</p>
      </div>

      <!-- 切换标签 -->
      <div class="tab-switch">
        <button :class="['tab-btn', { active: loginType === 'qr' }]" @click="loginType = 'qr'">
          <svg
            class="tab-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="9" cy="9" r="1.5" />
            <circle cx="15" cy="9" r="1.5" />
            <circle cx="9" cy="15" r="1.5" />
            <circle cx="15" cy="15" r="1.5" />
          </svg>
          <span>扫码登录</span>
        </button>
        <button
          :class="['tab-btn', { active: loginType === 'phone' }]"
          @click="loginType = 'phone'"
        >
          <svg
            class="tab-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>短信验证</span>
        </button>
      </div>

      <!-- 二维码登录 -->
      <div v-if="loginType === 'qr'" class="login-form qr-login">
        <div class="qr-container">
          <div class="qr-wrapper">
            <div class="qr-code">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- QR Code pattern -->
                <rect x="0" y="0" width="200" height="200" fill="#fff" />
                <rect x="15" y="15" width="45" height="45" fill="#000" />
                <rect x="22" y="22" width="11" height="11" fill="#fff" />
                <rect x="32" y="22" width="11" height="11" fill="#fff" />
                <rect x="22" y="32" width="11" height="11" fill="#fff" />
                <rect x="140" y="15" width="45" height="45" fill="#000" />
                <rect x="147" y="22" width="11" height="11" fill="#fff" />
                <rect x="157" y="22" width="11" height="11" fill="#fff" />
                <rect x="147" y="32" width="11" height="11" fill="#fff" />
                <rect x="15" y="140" width="45" height="45" fill="#000" />
                <rect x="22" y="147" width="11" height="11" fill="#fff" />
                <rect x="32" y="147" width="11" height="11" fill="#fff" />
                <rect x="22" y="157" width="11" height="11" fill="#fff" />
                <!-- Data pattern -->
                <rect x="65" y="15" width="7" height="7" fill="#000" />
                <rect x="75" y="15" width="7" height="7" fill="#000" />
                <rect x="85" y="15" width="7" height="7" fill="#000" />
                <rect x="105" y="15" width="7" height="7" fill="#000" />
                <rect x="115" y="15" width="7" height="7" fill="#000" />
                <rect x="15" y="65" width="7" height="7" fill="#000" />
                <rect x="15" y="75" width="7" height="7" fill="#000" />
                <rect x="15" y="85" width="7" height="7" fill="#000" />
                <rect x="15" y="105" width="7" height="7" fill="#000" />
                <rect x="15" y="115" width="7" height="7" fill="#000" />
                <!-- Center pattern -->
                <rect x="90" y="90" width="20" height="20" fill="#000" />
                <rect x="97" y="97" width="6" height="6" fill="#fff" />
              </svg>
            </div>
            <div class="qr-mask" v-if="showRefreshMask">
              <div class="refresh-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
              </div>
            </div>
          </div>
          <p class="qr-tip">使用阅读者 App 扫码登录</p>
          <div class="qr-timer">
            <svg
              class="timer-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span
              >二维码将在 <strong>{{ formatTime(remainingTime) }}</strong> 后刷新</span
            >
          </div>
          <button class="refresh-btn" @click="refreshQRCode">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            <span>刷新二维码</span>
          </button>
        </div>
      </div>

      <!-- 手机号登录 -->
      <div v-else class="login-form phone-login">
        <div class="form-group">
          <label class="form-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </label>
          <input
            v-model="phone"
            type="tel"
            class="form-input"
            placeholder="请输入手机号码"
            maxlength="11"
          />
        </div>

        <div class="form-group">
          <label class="form-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </label>
          <input
            v-model="code"
            type="text"
            class="form-input"
            placeholder="请输入验证码"
            maxlength="6"
          />
          <button :class="['code-btn', { disabled: codeBtnDisabled }]" @click="sendCode">
            {{ codeBtnText }}
          </button>
        </div>

        <button class="submit-btn" @click="handleLogin">
          <span>登 录</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- 底部链接 -->
      <div class="login-footer">
        <a href="#" class="footer-link">用户协议</a>
        <span class="footer-divider">|</span>
        <a href="#" class="footer-link">隐私政策</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const loginType = ref<'qr' | 'phone'>('qr')
const phone = ref('')
const code = ref('')
const remainingTime = ref(300) // 5分钟 = 300秒
const showRefreshMask = ref(false)
const codeBtnDisabled = ref(false)
const codeBtnText = ref('获取验证码')
const codeCountdown = ref(60)

let qrTimer: ReturnType<typeof setInterval> | null = null
let codeTimer: ReturnType<typeof setInterval> | null = null

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const refreshQRCode = () => {
  showRefreshMask.value = true
  setTimeout(() => {
    remainingTime.value = 300
    showRefreshMask.value = false
  }, 500)
}

const sendCode = () => {
  if (!phone.value || phone.value.length !== 11) {
    alert('请输入正确的手机号码')
    return
  }
  codeBtnDisabled.value = true
  codeBtnText.value = `${codeCountdown.value}秒后重新获取`

  codeTimer = setInterval(() => {
    codeCountdown.value--
    if (codeCountdown.value <= 0) {
      clearInterval(codeTimer!)
      codeBtnDisabled.value = false
      codeBtnText.value = '获取验证码'
      codeCountdown.value = 60
    } else {
      codeBtnText.value = `${codeCountdown.value}秒后重新获取`
    }
  }, 1000)
}

const handleLogin = () => {
  if (!phone.value || phone.value.length !== 11) {
    alert('请输入正确的手机号码')
    return
  }
  if (!code.value || code.value.length !== 6) {
    alert('请输入6位验证码')
    return
  }
  alert('登录成功！')
}

onMounted(() => {
  qrTimer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--
    } else {
      refreshQRCode()
    }
  }, 1000)
})

onUnmounted(() => {
  if (qrTimer) clearInterval(qrTimer)
  if (codeTimer) clearInterval(codeTimer)
})
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

/* 背景装饰元素 */
.bg-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
}

.element-1 {
  width: 300px;
  height: 300px;
  background: #fff;
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.element-2 {
  width: 200px;
  height: 200px;
  background: #f5f5f5;
  top: 20%;
  right: -50px;
  animation-delay: -5s;
}

.element-3 {
  width: 150px;
  height: 150px;
  background: #e8e8e8;
  bottom: 10%;
  left: 10%;
  animation-delay: -10s;
}

.element-4 {
  width: 180px;
  height: 180px;
  background: #dcdcdc;
  bottom: -50px;
  right: 20%;
  animation-delay: -15s;
}

.element-5 {
  width: 120px;
  height: 120px;
  background: #fff;
  top: 60%;
  left: 40%;
  animation-delay: -7s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

/* 登录卡片 */
.login-card {
  width: 420px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 10;
}

/* 品牌区域 */
.brand-section {
  text-align: center;
  margin-bottom: 40px;
}

.brand-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  color: #667eea;
  animation: pulse 3s ease-in-out infinite;
}

.brand-icon svg {
  width: 100%;
  height: 100%;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.brand-title {
  font-size: 28px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 8px;
  letter-spacing: 2px;
}

.brand-subtitle {
  font-size: 14px;
  color: #718096;
  margin: 0;
  font-style: italic;
}

/* 切换标签 */
.tab-switch {
  display: flex;
  background: #f7fafc;
  border-radius: 16px;
  padding: 6px;
  margin-bottom: 32px;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #718096;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  color: #4a5568;
}

.tab-btn.active {
  background: #fff;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
}

.tab-icon {
  width: 18px;
  height: 18px;
}

/* 登录表单 */
.login-form {
  min-height: 280px;
}

/* 二维码登录 */
.qr-login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-container {
  text-align: center;
}

.qr-wrapper {
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto 20px;
  border-radius: 16px;
  overflow: hidden;
}

.qr-code {
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
}

.qr-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.refresh-icon {
  width: 40px;
  height: 40px;
  color: #667eea;
  animation: spin 0.5s linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.qr-tip {
  font-size: 14px;
  color: #4a5568;
  margin: 0 0 16px;
}

.qr-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  color: #a0aec0;
  margin-bottom: 20px;
}

.timer-icon {
  width: 16px;
  height: 16px;
}

.qr-timer strong {
  color: #667eea;
  font-weight: 600;
}

.refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: transparent;
  color: #667eea;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.refresh-btn:hover {
  background: #f0f0ff;
  border-color: #667eea;
}

.refresh-btn svg {
  width: 16px;
  height: 16px;
}

/* 手机号登录 */
.phone-login {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  position: relative;
}

.form-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.form-label svg {
  width: 18px;
  height: 18px;
}

.form-input {
  width: 100%;
  padding: 16px 16px 16px 48px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 14px;
  color: #2d3748;
  background: #fff;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input::placeholder {
  color: #a0aec0;
}

.code-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.code-btn:hover:not(.disabled) {
  transform: translateY(-50%) scale(1.02);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.code-btn.disabled {
  background: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.35);
}

.submit-btn svg {
  width: 18px;
  height: 18px;
}

/* 底部链接 */
.login-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}

.footer-link {
  font-size: 13px;
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #667eea;
}

.footer-divider {
  color: #e2e8f0;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-card {
    width: 90%;
    padding: 32px 24px;
  }

  .brand-title {
    font-size: 24px;
  }

  .qr-wrapper {
    width: 140px;
    height: 140px;
  }
}
</style>
