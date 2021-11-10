class TimeatacksController < ApplicationController
  before_action :logged_in_user, only: [:create]

  def index
    
  end

  def create
    @timeatack = current_user.timeatacks.build(timeatack_params)
    @timeatack.save
  end

  private
    def timeatack_params
      params.require(:timeatack).permit(:time)
    end
end
