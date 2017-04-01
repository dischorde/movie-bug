class User < ApplicationRecord
  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password
  after_initialize :ensure_session_token, :create_gravatar_hash

  has_many :projects
  has_many :reviews

  has_many :enrollments
  has_many :enrolled_courses, through: :enrollments, source: :course

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def is_password?(pass)
    BCrypt::Password.new(password_digest).is_password?(pass)
  end

  private

  def create_gravatar_hash
    self.gravatar_hash ||= Digest::MD5.hexdigest(self.email)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
