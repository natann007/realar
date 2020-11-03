# realar
react with laravel application


CLICKS.JS:
put this file into publick/js folder in your laravel project,
in blade where you want use it add:
'<script src="{{asset('js/clicks.js')}}"></script>',
code of this file send to server:
  page-url of page where user click,
  tag-name of html-element which was clicked,
  x and y - coordinates of the click
