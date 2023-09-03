 <li class="nav-item menu-open">
@php($id = auth('admin')->id())
@if(factory('permission')->hasPermission(["view-roles"],$id))
          <a href="{{route('roles.index')}}" class="nav-link @if(request()->routeIs('roles.index')) active @endif">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
             {{lang("models/roles.plural")}}
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
	  @endif
	  @if(factory('permission')->hasPermission(["view-categories"],$id))
          <a href="{{route('category.index')}}" class="nav-link @if(request()->routeIs('category.index')) active @endif">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
             {{lang("models/category.plural")}}
              <i class="right fas fa-angle-left"></i>
            </p>
	  </a>
	  @endif
	  @if(factory("permission")->hasPermission(["view-languages"],$id))
     <a href="{{route('language.index')}}" class="nav-link  @if(request()->routeIs('language.index')) active @endif">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/language.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
     @endif
	  @if(factory("permission")->hasPermission(["view-languages"],$id))

     <a href="{{route('admins.index')}}" class="nav-link @if(request()->routeIs('admins.*')) active @endif">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/admins.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
     @endif
     @if(factory('permission')->hasPermission(["view-branches"],$id))
 <a href="{{route('branches.index')}}" class="nav-link @if(request()->routeIs('branches.*')) active @endif">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/branches.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
	@endif
     @if(factory('permission')->hasPermission(["view-customers"],$id))
         <a href="{{route('customers.index')}}" class="nav-link @if(request()->routeIs('customers.*')) active @endif ">
             <i class="nav-icon fas fa-tachometer-alt"></i>
             <p>
                 {{lang("models/customers.plural")}}
                 <i class="right fas fa-angle-left"></i>
             </p>
         </a>
     @endif
     @if(factory('permission')->hasPermission(["view-brands"],$id))
         <a href="{{route('brands.index')}}" class="nav-link @if(request()->routeIs('brands.*')) active @endif">
             <i class="nav-icon fas fa-tachometer-alt"></i>
             <p>
                 {{lang("models/brands.plural")}}
                 <i class="right fas fa-angle-left"></i>
             </p>
         </a>
     @endif
     @if(factory('permission')->hasPermission(["view-products"],$id))
         <a href="{{route('products.index')}}" class="nav-link @if(request()->routeIs('products.*')) active @endif">
             <i class="nav-icon fas fa-tachometer-alt"></i>
             <p>
                 {{lang("models/products.plural")}}
                 <i class="right fas fa-angle-left"></i>
             </p>
         </a>
     @endif
     <a href="{{route('files.index')}}" class="nav-link @if(request()->routeIs('files.*')) active @endif">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/files.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
 </li>






