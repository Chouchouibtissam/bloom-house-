# Create your models here.
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


# This table is used for signup, login, and authentication process.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(default=timezone.now)
    created_by = models.DateTimeField(default=timezone.now)
    modified_by = models.DateTimeField(default=timezone.now)
    role = models.CharField(max_length=100, default="normal")
    status = models.CharField(max_length=100, default="Active")
    auth_provider = models.CharField( max_length=50, blank=True, default='email')
    @property
    def user_id(self) :
     return self.id

#Defining Localisation model 
class Localisation (models.Model):
    wilaya = models.CharField(max_length=50, default="")
    commune = models.CharField(max_length=50, default="")
    adresse = models.CharField(max_length=1000, default="")
    @property
    def Loc_id(self):
        return self.id

#Defining contact info model
class ContactInfo (models.Model):
    nom_contact = models.CharField(max_length=30, default="")
    prenom_contact = models.CharField(max_length=30, default="")
    email_contact = models.EmailField()
    telephone_contact = models.IntegerField(default=0)
    adresse_contact = models.CharField(max_length=1000, default="")
    @property
    def Contact_id(self):
        return self.id

#Defining an advert model 
class Annonce (models.Model):
    User_id = models.IntegerField(default=0)
    AI_Categorie = models.CharField(max_length= 30, default="")
    AI_Type = models.CharField(max_length=30, default="")
    AI_Surface = models.FloatField(default=0)
    AI_Description = models.CharField(max_length = 1000, default="")
    AI_Prix = models.FloatField(default=0)
    AI_Localisation = models.ForeignKey(Localisation, on_delete=models.CASCADE, null=True)
    AI_Contact = models.ForeignKey(ContactInfo, on_delete=models.CASCADE, null=True)
    #AI_Photo = models.ImageField()
    @property
    def AI_id (self):
        return self.id
