class ItemsController < ApplicationController
  def index
    @items = Item.all || [] # データが無ければ空配列
  end

  def new
    @item = Item.new
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
    params.require(:item).permit(:title, :description, :price, :stock)
  end
end
