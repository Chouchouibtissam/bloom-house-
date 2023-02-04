from rest_framework.generics import GenericAPIView
from .serializers import*
from .models import Annonce
from rest_framework.response import Response
from rest_framework import status , viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from django.shortcuts import render



@permission_classes((AllowAny, ))
class GoogleSocialAuthView(GenericAPIView):

    serializer_class = GoogleSocialAuthSerializer

    def post(self, request):
        """
        POST with "auth_token"
        Send an idtoken as from google to get user information
        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token']) #Once the data is validated return it to the caller
        return Response(data,status=status.HTTP_200_OK)

class AnnonceView (viewsets.ModelViewSet):
    serializer_class = AnnonceSerializer
    queryset = Annonce.objects.all()

class LocalisationView (viewsets.ModelViewSet):
    serializer_class = LocalisationSerializer
    def get_queryset(self):
        Loca_id = self.request.query_params.get("locid")
        MyAnnonceLocalisation = Localisation.objects.filter(id = Loca_id)
        return MyAnnonceLocalisation
    #queryset = Localisation.objects.all()

class MesAnnoncesView (viewsets.ModelViewSet):
    serializer_class = AnnonceSerializer
    def get_queryset(self):
        user_id = self.request.query_params.get("Userid")
        MyAnnonces = Annonce.objects.filter(User_id = user_id)
        return MyAnnonces

        #queryset = Annonce.objects.filter()
       
class ContactInfoView(viewsets.ModelViewSet):
    serializer_class = ContactInfoSerializer
    queryset = ContactInfo.objects.all()
    
def index(request):
    return render(request, 'index.html')


