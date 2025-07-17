// ========================================
// 全局变量和配置 - 整个应用的基础设置
// ========================================

// 当前选择的难度级别，默认为'beginner'（初级）
let currentDifficulty = 'beginner';

// 学习进度，记录用户的学习完成情况
let progress = {
    beginner: 0,    // 初级课程进度
    intermediate: 0, // 中级课程进度
    advanced: 0     // 高级课程进度
};

// 课程数据 - 定义所有课程的内容和结构
const lessons = {
    // 初级课程：适合编程零基础的学习者
    beginner: [
        {
            id: 'html-basics',
            title: 'HTML基础',
            description: '学习网页的骨架结构，就像建房子的框架',
            duration: '30分钟',
            content: `
                <h4>什么是HTML？</h4>
                <p>HTML（HyperText Markup Language）是网页的骨架，就像建房子时的钢筋框架。它告诉浏览器网页的结构和内容。</p>
                
                <h4>基本HTML结构</h4>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;我的第一个网页&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;欢迎来到我的网站！&lt;/h1&gt;
    &lt;p&gt;这是一个段落。&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                
                <h4>常用HTML标签</h4>
                <ul>
                    <li><code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>：标题标签，数字越小标题越大</li>
                    <li><code>&lt;p&gt;</code>：段落标签，用来包裹文字段落</li>
                    <li><code>&lt;a&gt;</code>：链接标签，创建可点击的链接</li>
                    <li><code>&lt;img&gt;</code>：图片标签，显示图片</li>
                    <li><code>&lt;div&gt;</code>：容器标签，用来组织其他元素</li>
                </ul>
                
                <div class="interactive-demo">
                    <h4>试试看：创建你的第一个HTML元素</h4>
                    <p>点击下面的按钮，看看HTML是如何工作的：</p>
                    <button class="demo-button" onclick="showHTMLDemo()">创建标题</button>
                    <div id="html-demo-result"></div>
                </div>
            `
        },
        {
            id: 'css-basics',
            title: 'CSS基础',
            description: '学习如何美化网页，就像给房子装修',
            duration: '45分钟',
            content: `
                <h4>什么是CSS？</h4>
                <p>CSS（Cascading Style Sheets）是网页的化妆师，负责让HTML变得美观。如果HTML是房子的框架，CSS就是装修和装饰。</p>
                
                <h4>CSS的三种使用方式</h4>
                <ol>
                    <li><strong>内联样式</strong>：直接写在HTML标签里</li>
                    <li><strong>内部样式</strong>：写在HTML文档的&lt;style&gt;标签里</li>
                    <li><strong>外部样式</strong>：单独的CSS文件（推荐）</li>
                </ol>
                
                <h4>基本CSS语法</h4>
                <pre><code>/* 选择器 { 属性: 值; } */
h1 {
    color: blue;        /* 文字颜色 */
    font-size: 24px;    /* 字体大小 */
    text-align: center; /* 文字居中 */
}

.my-class {
    background-color: yellow;  /* 背景颜色 */
    padding: 10px;            /* 内边距 */
}

#my-id {
    border: 1px solid black;  /* 边框 */
}</code></pre>
                
                <div class="interactive-demo">
                    <h4>试试看：改变文字颜色</h4>
                    <p>点击按钮看看CSS的魔法：</p>
                    <button class="demo-button" onclick="showCSSDemo()">变换颜色</button>
                    <div id="css-demo-result">这段文字会变色哦！</div>
                </div>
            `
        },
        {
            id: 'js-basics',
            title: 'JavaScript基础',
            description: '学习让网页动起来的魔法',
            duration: '60分钟',
            content: `
                <h4>什么是JavaScript？</h4>
                <p>JavaScript是网页的大脑，让网页能够思考和互动。如果HTML是骨架，CSS是外观，那么JavaScript就是灵魂。</p>
                
                <h4>JavaScript能做什么？</h4>
                <ul>
                    <li>响应用户的点击、输入等操作</li>
                    <li>动态改变网页内容</li>
                    <li>验证表单数据</li>
                    <li>创建动画效果</li>
                    <li>与服务器通信</li>
                </ul>
                
                <h4>基本语法示例</h4>
                <pre><code>// 变量声明
let name = "小明";
const age = 18;

// 函数定义
function sayHello() {
    alert("你好，" + name + "！");
}

// 事件监听
document.getElementById("myButton").addEventListener("click", function() {
    console.log("按钮被点击了！");
});</code></pre>
                
                <div class="interactive-demo">
                    <h4>试试看：你的第一个JavaScript程序</h4>
                    <button class="demo-button" onclick="showJSDemo()">点我试试</button>
                    <div id="js-demo-result"></div>
                </div>
            `
        }
    ],
    
    // 中级课程：有一定基础后的进阶内容
    intermediate: [
        {
            id: 'responsive-design',
            title: '响应式设计',
            description: '让网页在手机、平板、电脑上都好看',
            duration: '90分钟',
            content: `
                <h4>什么是响应式设计？</h4>
                <p>响应式设计就像变形金刚，能够根据不同的屏幕尺寸自动调整布局和样式，确保在手机、平板、电脑上都有良好的用户体验。</p>
                
                <h4>核心技术</h4>
                <ul>
                    <li><strong>弹性布局（Flexbox）</strong>：让元素能够灵活排列</li>
                    <li><strong>网格布局（Grid）</strong>：创建复杂的二维布局</li>
                    <li><strong>媒体查询（Media Queries）</strong>：根据屏幕尺寸应用不同样式</li>
                    <li><strong>相对单位</strong>：使用rem、em、%等相对单位</li>
                </ul>
                
                <h4>媒体查询示例</h4>
                <pre><code>/* 桌面端样式 */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* 平板端样式 */
@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 手机端样式 */
@media (max-width: 480px) {
    .container {
        grid-template-columns: 1fr;
    }
}</code></pre>
            `
        },
        {
            id: 'dom-manipulation',
            title: 'DOM操作',
            description: '用JavaScript控制网页元素',
            duration: '75分钟',
            content: `
                <h4>什么是DOM？</h4>
                <p>DOM（Document Object Model）是浏览器把HTML文档转换成的一个对象树。通过JavaScript，我们可以像操控积木一样操控网页元素。</p>
                
                <h4>常用DOM操作</h4>
                <pre><code>// 获取元素
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// 修改内容
element.textContent = '新的文字内容';
element.innerHTML = '&lt;strong&gt;粗体文字&lt;/strong&gt;';

// 修改样式
element.style.color = 'red';
element.style.backgroundColor = 'yellow';

// 添加/移除类
element.classList.add('newClass');
element.classList.remove('oldClass');

// 创建新元素
const newDiv = document.createElement('div');
newDiv.textContent = '我是新创建的元素';
document.body.appendChild(newDiv);</code></pre>
            `
        },
        {
            id: 'api-basics',
            title: 'API基础',
            description: '学习如何与服务器通信',
            duration: '120分钟',
            content: `
                <h4>什么是API？</h4>
                <p>API（Application Programming Interface）就像餐厅的服务员，帮助你的网页与服务器进行沟通，获取或发送数据。</p>
                
                <h4>使用Fetch API获取数据</h4>
                <pre><code>// 获取数据的基本语法
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('获取到的数据:', data);
        // 在这里处理数据
    })
    .catch(error => {
        console.error('出错了:', error);
    });

// 使用async/await的现代写法
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('出错了:', error);
    }
}</code></pre>
            `
        }
    ],
    
    // 高级课程：深入的专业技能
    advanced: [
        {
            id: 'react-intro',
            title: 'React入门',
            description: '学习现代前端框架',
            duration: '180分钟',
            content: `
                <h4>什么是React？</h4>
                <p>React是Facebook开发的前端框架，就像乐高积木一样，让你可以用组件来构建复杂的用户界面。</p>
                
                <h4>React的核心概念</h4>
                <ul>
                    <li><strong>组件（Components）</strong>：可重用的UI片段</li>
                    <li><strong>JSX</strong>：在JavaScript中写HTML的语法</li>
                    <li><strong>Props</strong>：组件之间传递数据的方式</li>
                    <li><strong>State</strong>：组件内部的状态管理</li>
                </ul>
                
                <h4>简单的React组件</h4>
                <pre><code>import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        &lt;div&gt;
            &lt;h2&gt;计数器: {count}&lt;/h2&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
                点击增加
            &lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;</code></pre>
            `
        },
        {
            id: 'node-basics',
            title: 'Node.js基础',
            description: '用JavaScript开发后端',
            duration: '150分钟',
            content: `
                <h4>什么是Node.js？</h4>
                <p>Node.js让JavaScript可以在服务器上运行，就像给JavaScript插上了翅膀，让它不仅能在浏览器里飞，还能在服务器上翱翔。</p>
                
                <h4>创建简单的HTTP服务器</h4>
                <pre><code>const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('&lt;h1&gt;你好，这是我的第一个Node.js服务器！&lt;/h1&gt;');
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});</code></pre>
                
                <h4>使用Express框架</h4>
                <pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('欢迎来到Express服务器！');
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: '张三' },
        { id: 2, name: '李四' }
    ]);
});

app.listen(3000, () => {
    console.log('Express服务器运行在端口3000');
});</code></pre>
            `
        },
        {
            id: 'database-basics',
            title: '数据库基础',
            description: '学习数据存储和管理',
            duration: '200分钟',
            content: `
                <h4>什么是数据库？</h4>
                <p>数据库就像一个超级有序的图书馆，能够高效地存储、查找和管理大量数据。</p>
                
                <h4>SQL基础语法</h4>
                <pre><code>-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (name, email) VALUES ('张三', 'zhangsan@example.com');

-- 查询数据
SELECT * FROM users WHERE name LIKE '张%';

-- 更新数据
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;</code></pre>
                
                <h4>在Node.js中使用数据库</h4>
                <pre><code>const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myapp'
});

// 查询用户
function getUsers() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', (error, results) => {
            if (error) reject(error);
            else resolve(results);
        });
    });
}</code></pre>
            `
        }
    ]
};

// 测验题目数据
const quizQuestions = [
    {
        question: "HTML中哪个标签用来创建标题？",
        options: ["&lt;title&gt;", "&lt;h1&gt;", "&lt;header&gt;", "&lt;head&gt;"],
        correct: 1,
        explanation: "&lt;h1&gt;到&lt;h6&gt;标签用来创建不同级别的标题，&lt;h1&gt;是最大的标题。"
    },
    {
        question: "CSS中哪个属性用来改变文字颜色？",
        options: ["font-color", "text-color", "color", "background-color"],
        correct: 2,
        explanation: "color属性用来设置文字颜色，background-color用来设置背景颜色。"
    },
    {
        question: "JavaScript中如何声明一个变量？",
        options: ["var name", "let name", "const name", "以上都可以"],
        correct: 3,
        explanation: "JavaScript中可以用var、let或const来声明变量，但推荐使用let和const。"
    }
];

// ========================================
// 页面初始化和事件监听
// ========================================

// 当页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadProgress();
    showLessonsForDifficulty(currentDifficulty);
});

// 初始化应用
function initializeApp() {
    console.log('🎉 Claude代码学习平台已启动！');
    updateProgressDisplay();
    loadRandomQuiz();
}

// 设置事件监听器
function setupEventListeners() {
    // 难度选择按钮事件
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const difficulty = this.dataset.difficulty;
            selectDifficulty(difficulty);
        });
    });
    
    // 模态框关闭事件
    const modal = document.getElementById('lessonModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ========================================
// 难度选择和课程显示
// ========================================

// 选择学习难度
function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // 更新按钮状态
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
    
    // 显示对应课程
    showLessonsForDifficulty(difficulty);
    
    console.log(`📚 切换到${getDifficultyName(difficulty)}课程`);
}

// 显示指定难度的课程
function showLessonsForDifficulty(difficulty) {
    // 隐藏所有级别容器
    document.querySelectorAll('.level-container').forEach(container => {
        container.classList.add('hidden');
    });
    
    // 显示选中的级别
    const targetContainer = document.getElementById(`${difficulty}-lessons`);
    if (targetContainer) {
        targetContainer.classList.remove('hidden');
    }
    
    // 更新课程内容
    updateLessonsContent(difficulty);
}

// 更新课程内容
function updateLessonsContent(difficulty) {
    const lessonsGrid = document.querySelector(`#${difficulty}-lessons .lessons-grid`);
    if (!lessonsGrid || !lessons[difficulty]) return;
    
    lessonsGrid.innerHTML = '';
    
    lessons[difficulty].forEach((lesson, index) => {
        const lessonCard = createLessonCard(lesson, index);
        lessonsGrid.appendChild(lessonCard);
    });
}

// 创建课程卡片
function createLessonCard(lesson, index) {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <h4>${lesson.title}</h4>
        <p>${lesson.description}</p>
        <span class="duration">${lesson.duration}</span>
    `;
    
    card.addEventListener('click', () => openLesson(lesson));
    
    return card;
}

// 打开课程详情
function openLesson(lesson) {
    const modal = document.getElementById('lessonModal');
    const title = document.getElementById('lessonTitle');
    const content = document.getElementById('lessonContent');
    
    title.textContent = lesson.title;
    content.innerHTML = lesson.content;
    
    modal.style.display = 'block';
    
    // 更新进度
    updateProgress(lesson.id);
    
    console.log(`📖 打开课程：${lesson.title}`);
}

// ========================================
// 进度管理
// ========================================

// 更新学习进度
function updateProgress(lessonId) {
    const difficultyLessons = lessons[currentDifficulty];
    const lessonIndex = difficultyLessons.findIndex(lesson => lesson.id === lessonId);
    
    if (lessonIndex !== -1) {
        const newProgress = Math.max(progress[currentDifficulty], lessonIndex + 1);
        progress[currentDifficulty] = newProgress;
        
        saveProgress();
        updateProgressDisplay();
        
        console.log(`📈 进度更新：${currentDifficulty} ${newProgress}/${difficultyLessons.length}`);
    }
}

// 更新进度显示
function updateProgressDisplay() {
    const totalLessons = Object.values(lessons).flat().length;
    const completedLessons = Object.values(progress).reduce((sum, p) => sum + p, 0);
    const percentage = Math.round((completedLessons / totalLessons) * 100);
    
    const progressBar = document.querySelector('.progress');
    const progressText = document.getElementById('progressText');
    
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }
}

// 保存进度到本地存储
function saveProgress() {
    localStorage.setItem('learningProgress', JSON.stringify(progress));
}

// 从本地存储加载进度
function loadProgress() {
    const savedProgress = localStorage.getItem('learningProgress');
    if (savedProgress) {
        progress = { ...progress, ...JSON.parse(savedProgress) };
    }
}

// ========================================
// 测验功能
// ========================================

let currentQuizIndex = 0;
let quizAnswered = false;

// 加载随机测验题
function loadRandomQuiz() {
    currentQuizIndex = Math.floor(Math.random() * quizQuestions.length);
    quizAnswered = false;
    displayQuiz();
}

// 显示测验题
function displayQuiz() {
    const quiz = quizQuestions[currentQuizIndex];
    const container = document.querySelector('.quiz-container');
    
    if (!container) return;
    
    container.innerHTML = `
        <div class="quiz-question">${quiz.question}</div>
        <div class="quiz-options">
            ${quiz.options.map((option, index) => 
                `<div class="quiz-option" onclick="selectQuizOption(${index})">${option}</div>`
            ).join('')}
        </div>
        <button class="demo-button" onclick="loadRandomQuiz()" style="margin-top: 1rem;">下一题</button>
    `;
}

// 选择测验选项
function selectQuizOption(selectedIndex) {
    if (quizAnswered) return;
    
    quizAnswered = true;
    const quiz = quizQuestions[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        if (index === quiz.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && index !== quiz.correct) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // 显示解释
    setTimeout(() => {
        const container = document.querySelector('.quiz-container');
        const explanation = document.createElement('div');
        explanation.style.marginTop = '1rem';
        explanation.style.padding = '1rem';
        explanation.style.backgroundColor = '#e8f5e8';
        explanation.style.borderRadius = '8px';
        explanation.innerHTML = `<strong>解释：</strong>${quiz.explanation}`;
        container.appendChild(explanation);
    }, 1000);
}

// ========================================
// 演示功能
// ========================================

// HTML演示
function showHTMLDemo() {
    const result = document.getElementById('html-demo-result');
    result.innerHTML = '<h2 style="color: #667eea; margin-top: 1rem;">🎉 恭喜！你创建了一个HTML标题！</h2>';
}

// CSS演示
function showCSSDemo() {
    const result = document.getElementById('css-demo-result');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    result.style.color = randomColor;
    result.style.fontWeight = 'bold';
    result.style.fontSize = '1.2rem';
}

// JavaScript演示
function showJSDemo() {
    const result = document.getElementById('js-demo-result');
    const messages = [
        '🎉 JavaScript正在工作！',
        '✨ 这就是编程的魔法！',
        '🚀 你已经开始你的编程之旅了！',
        '💡 继续学习，你会变得更强！'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    result.innerHTML = `<p style="color: #667eea; font-weight: bold; margin-top: 1rem;">${randomMessage}</p>`;
}

// ========================================
// 工具功能
// ========================================

// 代码格式化工具
function formatCode() {
    const textarea = document.querySelector('#codeFormatter textarea');
    if (!textarea) return;
    
    let code = textarea.value;
    
    // 简单的代码格式化（这里只是示例）
    code = code.replace(/;/g, ';\n');
    code = code.replace(/{/g, '{\n    ');
    code = code.replace(/}/g, '\n}');
    
    textarea.value = code;
    
    // 显示成功消息
    showToast('代码格式化完成！');
}

// 颜色选择器工具
function pickColor() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const result = document.querySelector('#colorPicker .tool-result');
    if (result) {
        result.innerHTML = `
            <div style="background: ${randomColor}; padding: 1rem; border-radius: 8px; color: white; text-align: center; margin-top: 1rem;">
                选中的颜色：${randomColor}
            </div>
        `;
    }
}

// 显示提示消息
function showToast(message) {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // 3秒后移除
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========================================
// 工具函数
// ========================================

// 获取难度级别的中文名称
function getDifficultyName(difficulty) {
    const names = {
        beginner: '初级',
        intermediate: '中级',
        advanced: '高级'
    };
    return names[difficulty] || difficulty;
}

// 添加CSS动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// 调试和开发工具
// ========================================

// 开发模式下的调试信息
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔧 开发模式已启用');
    
    // 添加全局调试函数
    window.debugApp = {
        getLessons: () => lessons,
        getProgress: () => progress,
        getCurrentDifficulty: () => currentDifficulty,
        resetProgress: () => {
            progress = { beginner: 0, intermediate: 0, advanced: 0 };
            saveProgress();
            updateProgressDisplay();
            console.log('✅ 进度已重置');
        }
    };
    
    console.log('💡 使用 window.debugApp 访问调试功能');
}

// 错误处理
window.addEventListener('error', function(event) {
    console.error('❌ 应用错误:', event.error);
    showToast('哎呀，出现了一个小问题！请刷新页面重试。');
});

// 页面卸载时保存数据
window.addEventListener('beforeunload', function() {
    saveProgress();
});

console.log('🎓 Claude代码学习平台 JavaScript 已加载完成！');