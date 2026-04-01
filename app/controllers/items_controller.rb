class ItemsController < ApplicationController
  before_action :basic_auth, only: [:admin, :admin_create]

  def admin
  @item = Item.new
end

def admin_create
  @item = Item.new(item_params)
  if @item.save
    redirect_to items_path, notice: "登録しました"
  else
    render :admin
  end
end
  
  def index
    @items = Item.all || [] # データが無ければ空配列
  end

  def new
    @item = Item.new
  end

  def show
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to items_path, notice: "Item was successfully created."
    else
      render :new
    end
  end

  private

  def item_params
    params.require(:item).permit(:title, :description, :price, :stock, :image)
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |user, pass|
      user == "adrico" && pass == "adrico"
    end
  end
end
