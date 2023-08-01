<div class="row">
    <div class="col-md-3">
        <label class="required" for="first_name">{{lang("models/admins.fields.first_name")}}</label>
        <input type="text"  class="form-control" id="first_name" name="first_name" value="{{old("first_name")}}" required>
    </div>
    <div class="col-md-3">
        <label for="last_name" class="required">{{lang("models/admins.fields.last_name")}}</label>
        <input type="text" class="form-control" name="last_name" id="last_name" value="{{old("last_name")}}" required>
    </div>
    <div class="col-md-3">
        <label for="email" class="required">{{lang("models/admins.fields.email")}}</label>
        <input type="email" class="form-control" name="email" id="email" value="{{old("email")}}" required>
    </div>

    <div class="col-md-3">
        <label for="phone_number" class="required">{{lang("models/admins.fields.phone_number")}}</label>
        <input type="text" class="form-control" name="phone_number" id="phone_number" value="{{old("phone_number")}}" required>
    </div>

</div>
<hr>
<div class="row">
    <div class="col-md-3">
    <label for="profile_image" class="required">{{lang("models/admins.fields.profile_image")}}</label>
    <input class="form-control" type="file" name="profile_image">
    </div>
    <div class="col-md-3">
        <label for="status" class="required">{{lang("models/admins.fields.status")}}</label>
        <input type="checkbox" id="status" name="status">
    </div>
</div>
