@if($product->quantity <= settings("in_stock_low"))
    <span class="badge badge-danger">{{$product->quantity}}</span>


    @else
    <span class="badge badge-primary">{{$product->quantity}}</span>
@endif
