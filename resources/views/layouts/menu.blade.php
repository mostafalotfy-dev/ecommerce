 <li class="nav-item menu-open">
@php($id = auth('admin')->id())
@if(factory('permission')->has(["view-roles"],$id))
          <a href="{{route('roles.index')}}" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
             {{lang("models/roles.plural")}}
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
	  @endif
	  @if(factory('permission')->has(["view-categories"],$id))
          <a href="{{route('category.index')}}" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
             {{lang("models/category.plural")}}
              <i class="right fas fa-angle-left"></i>
            </p>
	  </a>
	  @endif
	  @if(factory("permission")->has(["view-languages"],$id))
     <a href="{{route('language.index')}}" class="nav-link active">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/language.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
     @endif
	  @if(factory("permission")->has(["view-admins"],$id))
    
     <a href="{{route('admins.index')}}" class="nav-link active">
         <i class="nav-icon fas fa-tachometer-alt"></i>
         <p>
             {{lang("models/admins.plural")}}
             <i class="right fas fa-angle-left"></i>
         </p>
     </a>
@endif


 </li>






