class Post < ActiveRecord::Base
  validates :title, presence:true

  before_save :build_slug

  private
  def build_slug
    self.slug = self.title.downcase.parameterize
  end
end
