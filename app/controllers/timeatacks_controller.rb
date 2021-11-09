class TimeatacksController < ApplicationController
  before_action :logged_in_user, only: [:create]

  def index
    @timeatack = current_user.timeatacks.build(timeatack_params)
    @timeatack.save
  end

  def create

  end

  private
    def timeatack_params
      params.require(:timeatack).permit(:time)
    end
end
