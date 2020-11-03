# realar
react with laravel application


clicks.js:
put this file into publick/js folder in your laravel project,
in blade where you want use clicks.js you must add:
/meta id="csrf" name="csrf" content="{{csrf_token()}}"/
 and 
'<script src="{{asset('js/clicks.js')}}"></script>',
code of this file send to server:
  page-url of page where user click,
  tag-name of html-element which was clicked,
  x and y - coordinates of the click


Click.js
put this file into resources/js/components
and in resources/js/app.js add: require('./components/Click'),
it is React Component which receive from blade where he included data and build table of clicks,
in laravel-blade must be: /div/ id="clicks" class="mt-5" data="{{ $data }}"></div/ for use this Component


ClickController.php: 
put into app/Http/Controllers,
this class extends Controller and has 2 own methodes: 
postClick(Request $req) - which insert data to database-table 'clicks' 
and userClicks() - which send array of data from table 'clicks' to view - clicks.blade.php
