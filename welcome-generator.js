// Personalized Welcome Message Generator
class WelcomeMessageGenerator {
    constructor() {
        this.industries = [
            'food processing', 'restaurant', 'food retail', 'agriculture', 'food manufacturing',
            'chemical processing', 'pharmaceutical', 'specialty chemicals', 'industrial chemicals'
        ];
        
        this.businessTypes = [
            'startup', 'enterprise', 'small business', 'medium business', 'corporation',
            'family business', 'tech company', 'manufacturer', 'distributor', 'retailer'
        ];
        
        this.solutions = [
            'ecommerce platform', 'AI-powered analytics', 'inventory management', 
            'customer engagement system', 'automated ordering system', 'supply chain optimization',
            'predictive analytics', 'smart recommendations', 'process automation'
        ];
        
        this.timeOfDay = this.getTimeOfDay();
        this.init();
    }
    
    getTimeOfDay() {
        const hour = new Date().getHours();
        if (hour < 12) return 'morning';
        if (hour < 17) return 'afternoon';
        return 'evening';
    }
    
    generatePersonalizedMessage(userInputs) {
        const { name, industry, businessType, challenge } = userInputs;
        
        const greetings = {
            morning: `Good morning, ${name}!`,
            afternoon: `Good afternoon, ${name}!`,
            evening: `Good evening, ${name}!`
        };
        
        const industrySpecific = {
            'food processing': 'streamline your food production operations',
            'restaurant': 'enhance your restaurant management and customer experience',
            'food retail': 'optimize your food retail operations and customer engagement',
            'agriculture': 'modernize your agricultural processes and supply chain',
            'food manufacturing': 'improve your manufacturing efficiency and quality control',
            'chemical processing': 'optimize your chemical processing workflows',
            'pharmaceutical': 'enhance your pharmaceutical operations and compliance',
            'specialty chemicals': 'streamline your specialty chemical production',
            'industrial chemicals': 'improve your industrial chemical processes'
        };
        
        const businessTypeMessages = {
            'startup': "As an innovative startup, you're perfectly positioned to leverage cutting-edge technology.",
            'enterprise': "Your enterprise-scale operations can benefit significantly from our scalable solutions.",
            'small business': "We understand the unique challenges small businesses face and have tailored solutions.",
            'medium business': "Your growing business needs robust systems that can scale with your success.",
            'corporation': "Large-scale operations require enterprise-grade solutions with proven reliability."
        };
        
        const challengeSolutions = {
            'inventory management': 'Our AI-powered inventory optimization can reduce waste and improve stock management.',
            'customer acquisition': 'Our ecommerce platforms include advanced customer acquisition and retention tools.',
            'operational efficiency': 'We specialize in automation solutions that dramatically improve operational efficiency.',
            'data analysis': 'Our AI applications can transform your data into actionable business insights.',
            'supply chain': 'We offer comprehensive supply chain optimization using predictive analytics.',
            'cost reduction': 'Our solutions are designed to reduce operational costs while improving performance.'
        };
        
        let message = `${greetings[this.timeOfDay]} `;
        
        if (industry) {
            message += `We're excited to help ${industrySpecific[industry] || 'transform your business operations'}. `;
        }
        
        if (businessType) {
            message += `${businessTypeMessages[businessType] || 'We have solutions tailored to your business needs.'} `;
        }
        
        if (challenge) {
            message += `${challengeSolutions[challenge] || 'We can help address your specific operational challenges.'} `;
        }
        
        message += `Let's discuss how SourceGoodFood can accelerate your digital transformation!`;
        
        return message;
    }
    
    createGeneratorHTML() {
        return `
            <div class="welcome-generator">
                <div class="generator-header">
                    <h3>Get Your Personalized Welcome Message</h3>
                    <p>Discover how SourceGoodFood can help your specific business needs</p>
                </div>
                
                <form class="generator-form" id="welcomeForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="userName">Your Name</label>
                            <input type="text" id="userName" name="name" placeholder="Enter your name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="industry">Industry</label>
                            <select id="industry" name="industry" required>
                                <option value="">Select your industry</option>
                                ${this.industries.map(industry => 
                                    `<option value="${industry}">${industry.charAt(0).toUpperCase() + industry.slice(1)}</option>`
                                ).join('')}
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="businessType">Business Type</label>
                            <select id="businessType" name="businessType" required>
                                <option value="">Select business type</option>
                                ${this.businessTypes.map(type => 
                                    `<option value="${type}">${type.charAt(0).toUpperCase() + type.slice(1)}</option>`
                                ).join('')}
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="challenge">Main Challenge</label>
                            <select id="challenge" name="challenge" required>
                                <option value="">Select main challenge</option>
                                <option value="inventory management">Inventory Management</option>
                                <option value="customer acquisition">Customer Acquisition</option>
                                <option value="operational efficiency">Operational Efficiency</option>
                                <option value="data analysis">Data Analysis</option>
                                <option value="supply chain">Supply Chain</option>
                                <option value="cost reduction">Cost Reduction</option>
                            </select>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary generator-btn">
                        Generate My Welcome Message
                    </button>
                </form>
                
                <div class="generated-message" id="generatedMessage" style="display: none;">
                    <div class="message-header">
                        <h4>Your Personalized Message</h4>
                        <button class="copy-btn" id="copyMessage" title="Copy message">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                    <div class="message-content" id="messageContent"></div>
                    <div class="message-actions">
                        <button class="btn btn-secondary" id="generateAnother">Generate Another</button>
                        <a href="#contact" class="btn btn-primary">Start Your Project</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    init() {
        // This will be called when the generator is added to the page
        document.addEventListener('DOMContentLoaded', () => {
            this.attachEventListeners();
        });
    }
    
    attachEventListeners() {
        const form = document.getElementById('welcomeForm');
        const generateAnotherBtn = document.getElementById('generateAnother');
        const copyBtn = document.getElementById('copyMessage');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
        
        if (generateAnotherBtn) {
            generateAnotherBtn.addEventListener('click', () => {
                this.resetGenerator();
            });
        }
        
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyMessage();
            });
        }
    }
    
    handleFormSubmit() {
        const form = document.getElementById('welcomeForm');
        const formData = new FormData(form);
        const userInputs = Object.fromEntries(formData.entries());
        
        const message = this.generatePersonalizedMessage(userInputs);
        this.displayMessage(message);
        
        // Add animation
        const messageDiv = document.getElementById('generatedMessage');
        messageDiv.style.display = 'block';
        messageDiv.classList.add('fade-in');
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    displayMessage(message) {
        const messageContent = document.getElementById('messageContent');
        if (messageContent) {
            messageContent.textContent = message;
        }
    }
    
    resetGenerator() {
        const form = document.getElementById('welcomeForm');
        const messageDiv = document.getElementById('generatedMessage');
        
        if (form) form.reset();
        if (messageDiv) {
            messageDiv.style.display = 'none';
            messageDiv.classList.remove('fade-in');
        }
    }
    
    copyMessage() {
        const messageContent = document.getElementById('messageContent');
        if (messageContent) {
            navigator.clipboard.writeText(messageContent.textContent).then(() => {
                const copyBtn = document.getElementById('copyMessage');
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.style.color = '#4dd0e1';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    copyBtn.style.color = '';
                }, 2000);
            });
        }
    }
}

// Initialize the welcome message generator
const welcomeGenerator = new WelcomeMessageGenerator();