<div class="row">
<div class="col-md-3">
	{{html()->label("name")->text(lang("models/customers.fields.name"))}}
{{html()->text("name")->class("form-control")->placeholder(lang("models/customers.fields.name"))}}

</div>
<div class="col-md-3">
{{html()->label("mobile")->text(lang("models/customers.fields.mobile"))}}
{{html()->text("mobile")->placeholder(lang("models/customers.fields.mobile"))}}
</div>
</div
