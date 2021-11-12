class TimeatacksController < ApplicationController
  before_action :logged_in_user, only: [:create]

  def index
    
  end

  def create
    @timeatack = current_user.timeatacks.build(timeatack_params)
    if @timeatack.save
      flash[:success] = 'タイムが記録されました！'
    end
    
  end

  private
    def timeatack_params
      params.require(:timeatack).permit(:time)
    end
end
