from django.contrib import admin

# Register your models here.
# import the model Todo
from .models import User
from .models import Annonce
 
# create a class for the admin-model integration
class UserAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("email","username","auth_provider")
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(User,UserAdmin)

class AnnonceAdmin(admin.ModelAdmin):
    list_display = ("AI_id","User_id","AI_Categorie","AI_Type","AI_Surface","AI_Description","AI_Prix","AI_Localisation")
admin.site.register(Annonce,AnnonceAdmin)
