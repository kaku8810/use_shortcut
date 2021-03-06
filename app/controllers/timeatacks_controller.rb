class TimeatacksController < ApplicationController
  before_action :logged_in_user, only: [:create]

  def index
    @timeatacks = Timeatack.order('time ASC').limit(10)
  end

  def create
    @timeatack = current_user.timeatacks.build(timeatack_params)
    flash[:success] = 'タイムが記録されました！' if @timeatack.save
  end

  private

  def timeatack_params
    params.require(:timeatack).permit(:time)
  end
end
