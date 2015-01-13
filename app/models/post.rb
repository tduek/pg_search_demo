class Post < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_on_title_and_body, against: [:title, :body]
  
  multisearchable against: [:title, :body]
  
  belongs_to :user
  
  
end
