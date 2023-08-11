<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{settings("project_name",default: "Ecommerce")}}</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<link rel='stylesheet' href='{{url("dist/css/app.css")}}'>

</head>
<body class="hold-transition sidebar-mini layout-fixed">
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="../../index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
        </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                <i class="fas fa-search"></i>
            </a>
            <div class="navbar-search-block">
                <form class="form-inline">
                    <div class="input-group input-group-sm">
                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-navbar" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>

        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-comments"></i>
                <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                Brad Diesel
                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">Call me whenever you can...</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                John Pierce
                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">I got your message bro</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                Nora Silvester
                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">The subject goes here</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>
        </li>
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-bell"></i>
                <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span class="dropdown-item dropdown-header">15 Notifications</span>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i> 8 friend requests
                    <span class="float-right text-muted text-sm">12 hours</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-file mr-2"></i> 3 new reports
                    <span class="float-right text-muted text-sm">2 days</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                <i class="fas fa-expand-arrows-alt"></i>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <i class="fas fa-th-large"></i>
            </a>
        </li>
    </ul>
</nav>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
        <img src="{{url("storage/".settings("logo",default: "default.png"))}}" alt="{{settings("logo_name",default: "Ecommerce")}}" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">{{settings("project_name",default: "Ecommerce")}}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="../../dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                @auth("admin")
                    <a href="#" class="d-block">{{auth("admin")->user()->first_name}}</a>
                @endauth
            </div>
        </div>

        <!-- SidebarSearch Form -->


        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                @include("layouts.menu")

            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
<!-- Content Wrapper. Contains page content -->
@hasSection("iframe")
    <div class="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
        <!-- Content Header (Page header) -->

        <div class="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
            <div class="nav-item dropdown">
                <a class="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Close</a>
                <div class="dropdown-menu mt-0">
                    <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all">Close All</a>
                    <a class="dropdown-item" href="#" data-widget="iframe-close" data-type="all-other">Close All Other</a>
                </div>
            </div>
            <a class="nav-link bg-light" href="#" data-widget="iframe-scrollleft"><i class="fas fa-angle-double-left"></i></a>
            <ul class="navbar-nav overflow-hidden" role="tablist"></ul>
            <a class="nav-link bg-light" href="#" data-widget="iframe-scrollright"><i class="fas fa-angle-double-right"></i></a>
            <a class="nav-link bg-light" href="#" data-widget="iframe-fullscreen"><i class="fas fa-expand"></i></a>
        </div>
        <div class="tab-content">
            <div class="tab-empty">
                <h2 class="display-4">No tab selected!</h2>
            </div>
            <div class="tab-loading">
                <div>
                    <h2 class="display-4">Tab is loading <i class="fa fa-sync fa-spin"></i></h2>
                </div>
            </div>
        </div>
    </div>
@else

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>@yield("title")</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">


                             <li class="breadcrumb-item"><a href="{{url('/admin')}}">{{lang("home")}}</a></li>
                        @php
                            $level_2 = str(request()->route()->getName())->split("/\./")[0];


                        @endphp
                            <li class="breadcrumb-item"><a href="{{url($level_2)}}">{{lang($level_2)}}</a></li>

                        @php
                                $breadcrumb  = str(request()->route()->uri);

                            $breadcrumb_text = match (true){
                                $breadcrumb->contains("create") =>  lang("Create"),
                                $breadcrumb->endsWith("edit")  => lang("Edit"),
                                !!$breadcrumb->contains("show") => lang("Show"),
                                default => lang("Index")
                            };

                        @endphp
                            <li class="breadcrumb-item">
                                {{$breadcrumb_text}}
                            </li>

                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        @yield("create_button","")
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <!-- Default box -->
                    <div class="card card-success">
                        <div class="card-header">
                            @yield("card_title")
                        </div>
                        <div class="card-body">
                            @yield("content")
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->

</div>
@endif
@include("layouts.footer")
