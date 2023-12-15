namespace :habit_notifier do
  desc "Notify about all the habit to apply to everyday life"
  task habits: :environment do

  # Shuffle the posts randomly
  posts = Post.order("RANDOM()")

  notifier = Slack::Notifier.new(ENV['WEBHOOK_URL'])

  posts.each do |post|
    notifier.ping "#{post.title}: #{post.body}"
  end
  end

end
